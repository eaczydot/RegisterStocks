"use client";

import * as React from "react";

type SourceBlock = {
  path: string;
  content: string;
};

type BuildResult = {
  code: string;
  rootName: string;
};

const SOURCE_ENDPOINT = "/api/galaxy-source";

function extractBlocks(source: string): SourceBlock[] {
  const lines = source.split("\n");
  const blocks: SourceBlock[] = [];
  let currentPath: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (!currentPath) return;
    blocks.push({ path: currentPath, content: buffer.join("\n") });
  };

  for (const line of lines) {
    if (line.startsWith("~~~/")) {
      flush();
      currentPath = line.slice(4).trim();
      buffer = [];
      continue;
    }

    if (line.trim() === "~~~" && currentPath) {
      flush();
      currentPath = null;
      buffer = [];
      continue;
    }

    if (currentPath) {
      buffer.push(line);
    }
  }

  flush();
  return blocks;
}

function buildCombinedCode(blocks: SourceBlock[]): BuildResult {
  let rootName = "App";
  const codeParts: string[] = ["const { useEffect } = React;"];

  blocks.forEach((block) => {
    if (block.path !== "Component.jsx" && !block.path.startsWith("components/")) {
      return;
    }

    const exportMatch = block.content.match(/export default (\w+)/);
    if (block.path === "Component.jsx" && exportMatch) {
      rootName = exportMatch[1];
    }

    const cleaned = block.content
      .replace(/^import .*$/gm, "")
      .replace(/^export default .*$/gm, "")
      .trim();

    if (cleaned) {
      codeParts.push(cleaned);
    }
  });

  codeParts.push(`return ${rootName};`);

  return {
    code: codeParts.join("\n\n"),
    rootName,
  };
}

export default function GalaxyAppLoader() {
  const [AppComponent, setAppComponent] =
    React.useState<React.ComponentType | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(SOURCE_ENDPOINT);
        if (!response.ok) {
          throw new Error(`Failed to load source (${response.status})`);
        }

        const source = await response.text();
        const blocks = extractBlocks(source);
        const { code } = buildCombinedCode(blocks);

        const babel = (window as Window & {
          Babel?: { transform?: (code: string, options: unknown) => { code?: string } };
        }).Babel;
        if (!babel?.transform) {
          throw new Error("Babel standalone failed to load.");
        }

        const compiled = babel.transform(code, { presets: ["react"] }).code;
        if (!compiled) {
          throw new Error("Babel did not return compiled output.");
        }

        // eslint-disable-next-line no-new-func
        const factory = new Function("React", compiled) as (
          react: typeof React
        ) => React.ComponentType;
        const RootComponent = factory(React);

        if (!cancelled) {
          setAppComponent(() => RootComponent);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Failed to load Galaxy sub-app."
          );
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="bg-[#020202] text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-ice-blue/80">
            Galaxy Sub-App
          </p>
          <h1 className="text-2xl font-semibold">Unable to load experience</h1>
          <p className="text-sm text-white/70">{error}</p>
        </div>
      </div>
    );
  }

  if (!AppComponent) {
    return (
      <div className="bg-[#020202] text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-ice-blue/80">
            Galaxy Sub-App
          </p>
          <h1 className="text-2xl font-semibold">Loading experience</h1>
          <p className="text-sm text-white/70">
            Compiling the provided React source in-browser.
          </p>
        </div>
      </div>
    );
  }

  return <AppComponent />;
}

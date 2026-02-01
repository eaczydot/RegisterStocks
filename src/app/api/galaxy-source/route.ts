import { readFile } from "fs/promises";
import path from "path";

import { NextResponse } from "next/server";

export async function GET() {
  const sourcePath = path.join(
    process.cwd(),
    "prompt from Galaxy Digital SuperDesign.md"
  );
  const source = await readFile(sourcePath, "utf8");

  return new NextResponse(source, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default function Head() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material%20Icons&display=swap"
        data-font-preservation="true"
      />
      <style
        data-font-preservation="true"
        dangerouslySetInnerHTML={{
          __html: `/* Font declarations extracted from original page */
@font-face { font-family: 'simple-line-icons'; src: url('chrome-extension://mihdfbecejheednfigjpdacgeilhlmnf/assets/fonts/Simple-Line-Icons.ttf') format('truetype'); }

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-Regular.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:normal;font-weight:400}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-Italic.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:italic;font-weight:400}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-Medium.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:normal;font-weight:500}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-MediumItalic.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:italic;font-weight:500}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-MediumItalic.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:italic;font-weight:600}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-Medium.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:normal;font-weight:600}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-Bold.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:normal;font-weight:700}

@font-face{font-family:simply-circular;src:url(https://images.simplycodes.com/fonts/simply-circular/CircularXXWeb-BoldItalic.woff2) format("woff2");font-display:swap;font-feature-settings:"'ss08'on";font-style:italic;font-weight:700}

@font-face{font-family:degular;src:url(https://images.simplycodes.com/fonts/degular/Degular-Bold.woff2) format("woff2");font-display:swap;font-style:normal;font-weight:700}

@font-face{font-family:neue-haas-grotesk;src:url(https://images.simplycodes.com/fonts/neue-haas-grotesk/NHaasGroteskDSPro-55Rg.woff2) format("woff2");font-display:swap;font-style:normal;font-weight:400}

@font-face{font-family:neue-haas-grotesk;src:url(https://images.simplycodes.com/fonts/neue-haas-grotesk/NHaasGroteskDSPro-65Md.woff2) format("woff2");font-display:swap;font-style:normal;font-weight:500}

@font-face{font-family:neue-haas-grotesk;src:url(https://images.simplycodes.com/fonts/neue-haas-grotesk/NHaasGroteskDSPro-75Bd.woff2) format("woff2");font-display:swap;font-style:normal;font-weight:700}

@font-face { font-display: swap; font-family: FormaDisplay; src: url("/static/fonts/FormaDJRDisplay-Medium.woff2") format("woff2"), url("/static/fonts/FormaDJRDisplay-Medium.woff") format("woff"); font-style: normal; }

@font-face { font-display: swap; font-family: FormaDeck; src: url("/static/fonts/FormaDJRDeck-Medium.woff2") format("woff2"), url("/static/fonts/FormaDJRDeck-Medium.woff") format("woff"); font-style: normal; }

@font-face { font-display: swap; font-family: FormaMicro; src: url("/static/fonts/FormaDJRMicro-Regular.woff2") format("woff2"), url("/static/fonts/FormaDJRMicro-Regular.woff") format("woff"); font-weight: normal; font-style: normal; }

@font-face { font-display: swap; font-family: FormaMicro; src: url("/static/fonts/FormaDJRMicro-Bold.woff2") format("woff2"), url("/static/fonts/FormaDJRMicro-Bold.woff") format("woff"); font-weight: bold; font-style: normal; }

@font-face { font-display: swap; font-family: FormaMicro; src: url("/static/fonts/FormaDJRMicro-Italic.woff2") format("woff2"), url("/static/fonts/FormaDJRMicro-Italic.woff") format("woff"); font-weight: normal; font-style: italic; }`,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `/* Reset box-sizing */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Viewport constraints for modern layouts (Tailwind, flex, grid) */
html {
  height: 100%;
}

/* Basic reset for body */
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Support for height: 100% cascade in flex/grid layouts */
body > * {
  min-height: inherit;
}

/* Smart overflow fix for main content areas */
main,
[role="main"],
#main,
.flex > div:last-child:not([id*="sidebar"]),
.flex-1:not([id*="sidebar"]) {
  overflow-y: auto !important;
  max-height: 100vh !important;
}

/* Fix for containers that have both overflow-hidden classes */
.overflow-x-hidden.overflow-y-hidden:has(> div > div) {
  overflow-y: auto !important;
}`,
        }}
      />
      <link rel="stylesheet" href="/assets/galaxy_com/extracted-styles.css" />
      <style
        id="react-mount-height-fix"
        dangerouslySetInnerHTML={{
          __html: `html, body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
}`,
        }}
      />
    </>
  );
}

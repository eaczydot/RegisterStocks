import Script from "next/script";

import GalaxyAppLoader from "./GalaxyAppLoader";

export default function GalaxyPage() {
  return (
    <>
      <Script
        src="https://unpkg.com/@babel/standalone/babel.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/vendor.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/toc.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/ap-token.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/global.js?ts=2026-01-15T16:54:40.176Z"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/heroHome/heroHome.js?ts=2026-01-15T16:54:40.196Z"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/hero/hero.js?ts=2026-01-15T16:54:40.196Z"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/animatedSection/animatedSection.js?ts=2026-01-15T16:54:40.196Z"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.galaxy.com/static/bundle/bannerTop/bannerTop.js?ts=2026-01-15T16:54:40.196Z"
        strategy="afterInteractive"
      />
      <GalaxyAppLoader />
      <script
        type="text/delayed"
        data-src="https://js.hubspot.com/web-interactives-embed.js"
        crossOrigin="anonymous"
        id="hubspot-web-interactives-loader"
      />
    </>
  );
}

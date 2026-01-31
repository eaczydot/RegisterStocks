# Phase 0: RegisterStocks Landing Page & Limited Preview Demo

This plan defines the scope for the initial "RegisterStocks" landing page. This is the **earliest initial version** of the full product vision, designed to serve as a high-fidelity sales demo to secure the contract.

**Goal:** Build a production-quality landing page that clearly articulates the "Registry + Vault + Liquidity" value proposition, while presenting the rest of the application as "existing but gated" (blurred preview).

## 1. Design Philosophy (No Styling from Old Site)
*   **Clean, Institutional Trust:** The aesthetic should feel like a modern fintech infrastructure (e.g., Carta, Angellist, NASDAQ Private Market).
*   **Compliance-First:** Visuals and layout should emphasize structure, security, and verification.
*   **"Demo Mode":** The site functions as a marketing front. Any interaction that would lead to the app (Log In, Dashboard, Search) triggers the "Limited Preview" state (blurred background with "Request Access" modal).

## 2. Landing Page Structure & Content
*Derived from existing registerstocks.com content, structured for impact.*

### A. Hero Section
*   **Headline:** Registry for Equity and Private Holdings.
*   **Subhead:** Capital Efficiency Through Information. The infrastructure built for private markets to verify data provenance, structure registries, and prepare for liquidity.
*   **Primary CTA:** "Secure Your Holdings" / "Request Access" (Triggers Demo Gate)
*   **Secondary CTA:** "How it Works" (Scrolls to Features)

### B. Core Value Proposition (The "Why")
*   **The Problem:** Private markets rely on speculation and fragmented data.
*   **The Solution:** Capital moves intelligently when equity is digitized.
    *   *Verified Data Provenance:* SEC-aware provenance and auditability.
    *   *Structured Registries:* Normalized treatment of SAFEs, convertibles, equity, and LP interests.
    *   *Liquidity Readiness:* Instruments prepared for compliant secondary transfer.

### C. Feature Grid (The "What")
*   **Document Vault:** Verified document custody and immutable version history. (Icon: Lock/Vault)
*   **Structured Registry:** Canonical ledger of ownership, rights, and obligations. (Icon: Database/List)
*   **Normalization Layer:** Make SAFE notes, convertibles, and equity comparable and analyzable. (Icon: Charts/Scale)
*   **Liquidity Workflows:** Support for partial transfers, bundles, and staged liquidity. (Icon: Exchange/Arrows)
*   **Institutional Alignment:** Built to complement transfer agents and fund admins. (Icon: Building/Handshake)

### D. "Limited Preview" / Demo Gate
*   **Concept:** When a user clicks "Login" or tries to access the app features, they are taken to a view that suggests the application is running but restricted.
*   **Visual:** A screenshot or mock of the `Dashboard` (from Full Plan) is visible but heavily blurred/frosted.
*   **Overlay:** A clear modal window appears over the blurred app.
    *   *Text:* "RegisterStocks is currently in Private Beta for select partners."
    *   *Action:* "Contact us to schedule a full demo and secure your registry."
    *   *Inputs:* Name, Email, Organization Type (Investor, Fund, Company).

## 3. Alignment with Full Plan (The "North Star")
This landing page serves as the entry point for the 6-module build outlined in `Full Plan.md`. It specifically markets:
1.  **Module A (Vault):** By highlighting "Verified document custody".
2.  **Module B (Registry):** By highlighting "Structured Registries".
3.  **Module D (Liquidity):** By highlighting "Liquidity Readiness" as a first-class feature.

## 4. Implementation Steps
1.  **Scaffold Project:** Setup React/Next.js environment.
2.  **Build Landing Page Components:** Hero, Features, value prop sections using the copy above.
3.  **Implement Demo Gate:** Create the "Blurred App" layout and the "Request Access" modal.
4.  **Deploy:** Ship to a demo URL for client review.

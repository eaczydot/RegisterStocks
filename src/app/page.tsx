"use client";

import { useEffect, useState } from "react";

// Galaxy-inspired pill button styles
const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ice-blue px-8 py-3.5 text-[16px] font-medium text-[#020202] transition-all hover:bg-ice-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue/50";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-[16px] font-medium text-white transition-all hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue/50";
const ghostButton =
  "inline-flex items-center gap-2 text-[16px] text-white underline hover:text-ice-blue transition-colors";

const valuePoints = [
  {
    title: "Verified Data Provenance",
    description:
      "SEC-aware provenance, auditability, and immutable version history for every document and instrument.",
    icon: ShieldIcon,
  },
  {
    title: "Structured Registries",
    description:
      "Canonical ledgers that normalize SAFEs, convertibles, equity, and LP interests into a single source of truth.",
    icon: RegistryIcon,
  },
  {
    title: "Liquidity Readiness",
    description:
      "Instruments prepared for compliant secondary transfer, partial allocations, and staged liquidity.",
    icon: ArrowsIcon,
  },
];

const featureGrid = [
  {
    title: "Document Vault",
    description:
      "Verified document custody with cryptographic verification and immutable version history.",
    icon: VaultIcon,
  },
  {
    title: "Structured Registry",
    description:
      "Canonical ledger of ownership, rights, metadata, and obligations across entities.",
    icon: RegistryIcon,
  },
  {
    title: "Normalization Layer",
    description:
      "Compare SAFE notes, convertibles, equity, and LP interests with institutional-grade normalization.",
    icon: ScaleIcon,
  },
  {
    title: "Liquidity Workflows",
    description:
      "Support for partial transfers, bundles, and staged liquidity with compliance-forward controls.",
    icon: ArrowsIcon,
  },
  {
    title: "Institutional Alignment",
    description:
      "Built to complement transfer agents, fund administrators, and custodial partners.",
    icon: BuildingIcon,
  },
];

const registryStandards = [
  {
    title: "Registry of ownership, rights, metadata, and obligations.",
    description: "Safe and secure with institutional controls.",
  },
  {
    title: "Normalized treatment of SAFE notes, convertibles, equity, and LP interests.",
    description: "Better handling for professionals and DIY operators.",
  },
  {
    title: "Searchable, comparable, and analyzable instruments.",
    description: "Increase founder performance through measured analysis.",
  },
  {
    title: "Alignment with cap tables and fund records.",
    description: "Better accounting and audit readiness.",
  },
  {
    title: "Liquidity readiness for compliant secondary transfer.",
    description: "Support partial transfers, bundles, and staged liquidity.",
  },
  {
    title: "Evergreen capital support.",
    description:
      "Enable liquidity buffers for long-term strategies and patient capital structures.",
  },
];

export default function Home() {
  const [isGateOpen, setIsGateOpen] = useState(false);

  useEffect(() => {
    if (!isGateOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGateOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isGateOpen]);

  return (
    <div className="bg-night-sky text-slate-100">
      {/* Enhanced Header - Galaxy inspired */}
      <header className="bg-night-sky sticky top-0 z-50 min-h-20 border-b border-white/5">
        <div className="max-w-container mx-auto px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-subtle bg-white/5 border border-white/15 flex items-center justify-center">
              <span className="text-lg font-semibold text-ice-blue">RS</span>
            </div>
            <div>
              <p className="text-[16px] font-medium text-white">RegisterStocks</p>
              <p className="text-[12px] text-text-tertiary">Registry + Vault + Liquidity</p>
            </div>
          </div>
          
          {/* Navigation - cleaner spacing */}
          <nav className="hidden md:flex items-center gap-12">
            <a className="text-[16px] text-slate-300 hover:text-white transition-colors" href="#why">
              Why
            </a>
            <a className="text-[16px] text-slate-300 hover:text-white transition-colors" href="#features">
              Features
            </a>
            <a className="text-[16px] text-slate-300 hover:text-white transition-colors" href="#preview">
              Preview
            </a>
            <a className="text-[16px] text-slate-300 hover:text-white transition-colors" href="#contact">
              Contact
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block text-[16px] text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsGateOpen(true)}
            >
              Log In
            </button>
            <button className={primaryButton} onClick={() => setIsGateOpen(true)}>
              Request Access
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - Galaxy-inspired two-column layout */}
        <section className="bg-night-sky overflow-hidden py-24 lg:py-32">
          <div className="max-w-container mx-auto px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-ice-blue/80 mb-6">
                  Private Markets Infrastructure
                </p>
                <h1 className="text-display-lg lg:text-display-xl font-medium text-white mb-8">
                  Registry for Equity and Private Holdings.
                </h1>
                <p className="text-body-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                  Capital Efficiency Through Information. The infrastructure built
                  for private markets to verify data provenance, structure
                  registries, and prepare for liquidity.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <button
                    className={primaryButton}
                    onClick={() => setIsGateOpen(true)}
                  >
                    Secure Your Holdings
                  </button>
                  <a className={secondaryButton} href="#features">
                    How it Works
                  </a>
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  {[
                    { title: "Private Beta", description: "Select partners only" },
                    { title: "SEC-Aware", description: "Audit-ready provenance" },
                    { title: "Liquidity-Ready", description: "Compliant transfers" },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="text-[16px] font-medium text-white">{item.title}</p>
                      <p className="text-[14px] text-text-tertiary mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right: Abstract visual element */}
              <div className="relative hidden lg:flex justify-end">
                <div className="relative w-[480px] h-[480px]">
                  {/* Abstract geometric background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/10 via-transparent to-ice-blue/5 rounded-full blur-3xl" />
                  <div className="absolute inset-8 border border-white/10 rounded-full" />
                  <div className="absolute inset-16 border border-white/5 rounded-full" />
                  <div className="absolute inset-24 bg-card-bg/50 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-subtle bg-white/5 border border-white/15 flex items-center justify-center mb-4">
                        <ShieldIcon className="w-8 h-8 text-ice-blue" />
                      </div>
                      <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary">Verified</p>
                      <p className="text-[20px] font-medium text-white">Registry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section - Galaxy-inspired 12-column grid */}
        <section id="why" className="py-32 bg-deep-space">
          <div className="max-w-container mx-auto px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left column: Problem statement */}
              <div className="lg:col-span-5">
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-2">
                  The Problem
                </p>
                <h2 className="text-display-lg font-medium text-white mb-6">
                  Private markets rely on speculation.
                </h2>
                <p className="text-body-md text-slate-300 mb-4">
                  We started RegisterStocks Registry with a simple goal: create
                  a platform that helps investors, funds, and companies verify
                  ownership, structure registries, and prepare for liquidity.
                </p>
                <p className="text-body-md text-slate-300">
                  The future of private markets depends on better information
                  and structured registries, not more speculation. By digitizing equity,
                  RegisterStocks lets capital move more intelligently.
                </p>
              </div>
              
              {/* Right column: Solution */}
              <div className="lg:col-start-7 lg:col-span-6">
                <div className="rounded-subtle border border-white/10 bg-card-bg p-8">
                  <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-2">
                    The Solution
                  </p>
                  <h3 className="text-[24px] font-medium text-white mb-8">
                    Capital moves intelligently when equity is digitized.
                  </h3>
                  <div className="space-y-6">
                    {valuePoints.map((point) => (
                      <div key={point.title} className="flex gap-4">
                        <div className="w-14 h-14 rounded-subtle bg-white/5 border border-white/10 flex items-center justify-center text-ice-blue shrink-0">
                          <point.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[18px] font-medium text-white mb-1">
                            {point.title}
                          </p>
                          <p className="text-[15px] text-slate-400 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`${secondaryButton} mt-8 w-full justify-center`}
                    onClick={() => setIsGateOpen(true)}
                  >
                    Explore the Registry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid Section - Galaxy-inspired with section header */}
        <section id="features" className="py-32 bg-night-sky">
          <div className="max-w-container mx-auto px-12">
            {/* Section header with divider */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 pb-6 border-b border-white/10">
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-2">
                  The What
                </p>
                <h2 className="text-[20px] font-normal text-white">
                  The Registry + Vault + Liquidity stack
                </h2>
              </div>
              <button className={secondaryButton} onClick={() => setIsGateOpen(true)}>
                View Demo Dashboard
              </button>
            </div>
            
            {/* Description */}
            <p className="text-body-md text-slate-300 max-w-3xl mb-12">
              RegisterStocks delivers the core systems private markets have
              lacked: verified document custody, provenance, structured
              registries, and liquidity readiness, all without compromising
              compliance or control.
            </p>
            
            {/* Feature cards grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureGrid.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-subtle border border-white/10 bg-card-bg p-8 transition-all hover:border-ice-blue/30 hover-glow"
                >
                  <div className="w-14 h-14 rounded-subtle bg-white/5 border border-white/10 flex items-center justify-center text-ice-blue mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-[20px] font-medium text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-slate-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 text-[14px] text-ice-blue hover:underline transition-colors"
                    onClick={() => setIsGateOpen(true)}
                  >
                    Learn more
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Infrastructure Section */}
        <section className="py-32 bg-deep-space">
          <div className="max-w-container mx-auto px-12">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left card: Compliance */}
              <div className="rounded-subtle border border-white/10 bg-card-bg p-10">
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-3">
                  Regulatory & Institutional Alignment
                </p>
                <h2 className="text-[28px] font-medium text-white mb-6">
                  Designed for compliance and longevity.
                </h2>
                <p className="text-body-md text-slate-300 mb-4">
                  RegisterStocks supports SEC-aware provenance, auditability,
                  and KYC/AML integration pathways. The architecture is built to
                  complement transfer-agent and fund-administration frameworks,
                  with optional custodial partnerships for professional
                  operations.
                </p>
                <p className="text-body-md text-slate-300">
                  The platform is engineered to grow with regulation in fintech,
                  not around it, ensuring your registry stays durable as private
                  markets evolve.
                </p>
              </div>
              
              {/* Right card: Infrastructure benefits */}
              <div className="rounded-subtle border border-white/10 bg-white/[0.03] p-10">
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-3">
                  Infrastructure Built for Private Markets
                </p>
                <h2 className="text-[28px] font-medium text-white mb-8">
                  Reduce friction, lower risk, increase capital efficiency.
                </h2>
                <div className="space-y-4">
                  {[
                    "Cryptographic verification of documents and versions.",
                    "Eliminates uncertainty around rights, amendments, and validity.",
                    "Reduces moral hazard and information asymmetry.",
                    "Creates a clear path to stock exchange readiness.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-subtle border border-white/10 bg-card-bg p-5"
                    >
                      <CheckIcon className="w-5 h-5 text-ice-blue shrink-0 mt-0.5" />
                      <p className="text-[16px] text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registry Standards Section - Galaxy-inspired list style */}
        <section className="py-32 bg-night-sky">
          <div className="max-w-container mx-auto px-12">
            {/* Section header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 pb-6 border-b border-white/10">
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-2">
                  Registry Standards
                </p>
                <h2 className="text-display-lg font-medium text-white">
                  Built for professionals.
                </h2>
              </div>
              <button className={secondaryButton} onClick={() => setIsGateOpen(true)}>
                Request Registry Access
              </button>
            </div>
            
            {/* Standards list - Galaxy-inspired expandable style */}
            <ul className="divide-y divide-white/10">
              {registryStandards.map((item, index) => (
                <li
                  key={item.title}
                  className="py-8 group cursor-pointer hover:bg-white/[0.02] -mx-6 px-6 transition-colors"
                  onClick={() => setIsGateOpen(true)}
                >
                  <div className="flex justify-between items-start gap-8">
                    <div className="flex-1">
                      <h3 className="text-[20px] font-medium text-white mb-2 group-hover:text-ice-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[16px] text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-slate-500 group-hover:text-ice-blue transition-colors shrink-0">
                      <ArrowIcon className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Preview Section - Enhanced */}
        <section id="preview" className="py-32 bg-deep-space">
          <div className="max-w-container mx-auto px-12">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-3">
                  Limited Preview
                </p>
                <h2 className="text-display-lg font-medium text-white mb-6">
                  Demo mode for select partners.
                </h2>
                <p className="text-body-md text-slate-300 mb-8">
                  RegisterStocks is currently in Private Beta. The application
                  is running with live registry workflows, but access is gated
                  for vetted partners only.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className={primaryButton}
                    onClick={() => setIsGateOpen(true)}
                  >
                    Request Access
                  </button>
                  <button
                    className={secondaryButton}
                    onClick={() => setIsGateOpen(true)}
                  >
                    View Dashboard
                  </button>
                </div>
              </div>
              <div className="relative">
                <PreviewShell blurred />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-subtle border border-white/20 bg-night-sky/90 px-8 py-6 text-center shadow-2xl backdrop-blur">
                    <p className="text-[16px] font-medium text-white">
                      Private Beta
                    </p>
                    <p className="mt-2 text-[14px] text-text-tertiary">
                      Request access to unlock the full demo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-32 bg-night-sky">
          <div className="max-w-container mx-auto px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left column */}
              <div className="lg:col-span-5">
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-3">
                  Contact Us
                </p>
                <h2 className="text-display-lg font-medium text-white mb-6">
                  Drop us a line.
                </h2>
                <p className="text-body-md text-slate-300 mb-8">
                  Schedule a full demo, secure your registry, and sign up for
                  updates. We will follow up within 48 hours.
                </p>
                <div className="rounded-subtle border border-white/10 bg-card-bg p-8">
                  <h3 className="text-[16px] font-medium text-white mb-3">
                    Direct Line
                  </h3>
                  <p className="text-[18px] text-ice-blue mb-4">
                    contact@registerstocks.com
                  </p>
                  <p className="text-[14px] text-text-tertiary">
                    Private markets deserve better information.
                  </p>
                </div>
              </div>
              
              {/* Right column - Form */}
              <div className="lg:col-start-7 lg:col-span-6">
                <form
                  className="rounded-subtle border border-white/10 bg-white/[0.03] p-10"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="space-y-6">
                    <div>
                      <label className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary block mb-3">
                        Name
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[18px] text-white placeholder:text-slate-500 focus:border-ice-blue focus:outline-none transition-colors"
                        placeholder="Jane Founder"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary block mb-3">
                        Email
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[18px] text-white placeholder:text-slate-500 focus:border-ice-blue focus:outline-none transition-colors"
                        placeholder="jane@firm.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary block mb-3">
                        Organization Type
                      </label>
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[18px] text-white focus:border-ice-blue focus:outline-none transition-colors cursor-pointer">
                        <option className="bg-night-sky">Investor</option>
                        <option className="bg-night-sky">Fund</option>
                        <option className="bg-night-sky">Company</option>
                      </select>
                    </div>
                    <div className="pt-4">
                      <button className={`${primaryButton} w-full justify-center`} type="submit">
                        Request Access
                      </button>
                    </div>
                  </div>
                  <p className="mt-6 text-[14px] text-text-tertiary text-center">
                    Sign up for our email list for updates and more.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Galaxy-inspired grid layout */}
      <footer className="bg-night-sky py-24 border-t border-white/5">
        <div className="max-w-container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-subtle bg-white/5 border border-white/15 flex items-center justify-center">
                  <span className="text-lg font-semibold text-ice-blue">RS</span>
                </div>
                <p className="text-[20px] font-medium text-white">RegisterStocks</p>
              </div>
              <p className="text-[14px] text-text-tertiary max-w-xs leading-relaxed">
                Registry infrastructure for private markets. Capital efficiency through information.
              </p>
            </div>
            
            {/* Links */}
            <div className="lg:col-start-7 lg:col-span-6 grid grid-cols-3 gap-8">
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-4">
                  Platform
                </p>
                <ul className="space-y-3">
                  <li><button onClick={() => setIsGateOpen(true)} className="text-[16px] text-slate-300 hover:text-white transition-colors">Dashboard</button></li>
                  <li><button onClick={() => setIsGateOpen(true)} className="text-[16px] text-slate-300 hover:text-white transition-colors">Registry</button></li>
                  <li><button onClick={() => setIsGateOpen(true)} className="text-[16px] text-slate-300 hover:text-white transition-colors">Vault</button></li>
                </ul>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-4">
                  Company
                </p>
                <ul className="space-y-3">
                  <li><a href="#why" className="text-[16px] text-slate-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="#contact" className="text-[16px] text-slate-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.1em] uppercase text-text-tertiary mb-4">
                  Legal
                </p>
                <ul className="space-y-3">
                  <li><button onClick={() => setIsGateOpen(true)} className="text-[16px] text-slate-300 hover:text-white transition-colors">Privacy</button></li>
                  <li><button onClick={() => setIsGateOpen(true)} className="text-[16px] text-slate-300 hover:text-white transition-colors">Terms</button></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-[14px] text-text-tertiary">
              © {new Date().getFullYear()} RegisterStocks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <DemoGate open={isGateOpen} onClose={() => setIsGateOpen(false)} />
    </div>
  );
}

function DemoGate({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-night-sky/90 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-y-auto px-6 py-12">
        <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl items-center justify-center">
          <div className="relative w-full">
            <PreviewShell blurred className="rounded-subtle" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-md rounded-subtle border border-white/20 bg-night-sky/95 p-8 shadow-2xl backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[14px] tracking-[0.1em] uppercase text-ice-blue/80 mb-3">
                      Limited Preview
                    </p>
                    <h3 className="text-[24px] font-medium text-white">
                      RegisterStocks is currently in Private Beta for select
                      partners.
                    </h3>
                  </div>
                  <button
                    className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-white/40 hover:text-white"
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="mt-4 text-[16px] text-slate-300">
                  Contact us to schedule a full demo and secure your registry.
                </p>
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[16px] text-white placeholder:text-slate-500 focus:border-ice-blue focus:outline-none transition-colors"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[16px] text-white placeholder:text-slate-500 focus:border-ice-blue focus:outline-none transition-colors"
                    placeholder="Email"
                    type="email"
                  />
                  <select className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[16px] text-white focus:border-ice-blue focus:outline-none transition-colors cursor-pointer">
                    <option className="bg-night-sky">Investor</option>
                    <option className="bg-night-sky">Fund</option>
                    <option className="bg-night-sky">Company</option>
                  </select>
                  <div className="pt-4">
                    <button className={`${primaryButton} w-full justify-center`} type="submit">
                      Request Access
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-[14px] text-text-tertiary text-center">
                  We respond within 48 hours for qualified partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewShell({
  blurred,
  className = "",
}: {
  blurred?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-subtle border border-white/10 bg-card-bg p-6 shadow-2xl ${className}`}
    >
      <div
        className={`space-y-6 ${blurred ? "blur-xl opacity-70" : ""}`}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-subtle border border-white/10 bg-white/5" />
            <div>
              <div className="h-3 w-28 rounded-full bg-white/10" />
              <div className="mt-2 h-2 w-20 rounded-full bg-white/5" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-24 rounded-full border border-white/10 bg-white/5" />
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="space-y-3 rounded-subtle border border-white/10 bg-white/5 p-4">
            {["Dashboard", "Registries", "Vault", "Liquidity", "Compliance"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-subtle bg-white/5 px-3 py-2"
                >
                  <span className="text-[12px] text-slate-300">{item}</span>
                  <div className="h-2 w-6 rounded-full bg-white/10" />
                </div>
              )
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-subtle border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] text-slate-400">Registry Overview</p>
                  <p className="mt-2 text-[20px] font-medium text-white">
                    $4.2B Verified Holdings
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Active", "Pending", "Audit Ready"].map((label) => (
                  <div
                    key={label}
                    className="rounded-subtle border border-white/10 bg-night-sky/70 px-3 py-2"
                  >
                    <p className="text-[12px] text-slate-400">{label}</p>
                    <div className="mt-2 h-2 w-16 rounded-full bg-ice-blue/60" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Vault Activity", "Liquidity Readiness"].map((title) => (
                <div
                  key={title}
                  className="rounded-subtle border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-[12px] text-slate-400">{title}</p>
                  <div className="mt-3 h-20 rounded-subtle border border-dashed border-white/10 bg-night-sky/70" />
                </div>
              ))}
            </div>
            <div className="rounded-subtle border border-white/10 bg-white/5 p-4">
              <p className="text-[12px] text-slate-400">Registry Search</p>
              <div className="mt-3 h-10 rounded-full border border-white/10 bg-night-sky/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12" />
      <path d="m10 5 6 5-6 5" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 4 8 8" />
      <path d="m12 4-8 8" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.5 6.8 12l5.7-7" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 19 6v6c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function RegistryIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="6" rx="2" />
      <rect x="4" y="14" width="16" height="6" rx="2" />
      <path d="M8 7h.01M8 17h.01" />
    </svg>
  );
}

function VaultIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8v4l2 2" />
    </svg>
  );
}

function ScaleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M5 6h14" />
      <path d="m7 6 3.5 6H4.5L7 6Z" />
      <path d="m17 6 3.5 6h-6L17 6Z" />
    </svg>
  );
}

function ArrowsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
      <path d="M17 17H7V7" />
    </svg>
  );
}

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20V6a2 2 0 0 1 2-2h7" />
      <path d="M13 4h5a2 2 0 0 1 2 2v14" />
      <path d="M9 20V10" />
      <path d="M15 20v-8" />
      <path d="M2 20h20" />
    </svg>
  );
}

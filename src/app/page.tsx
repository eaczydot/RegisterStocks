"use client";

import { useEffect, useState } from "react";

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ice-blue px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-[#a3dfff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue/70";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-blue/60";

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
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,204,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 grid-faint opacity-40" />
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
              <span className="text-lg font-semibold text-ice-blue">RS</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                RegisterStocks
              </p>
              <p className="text-xs text-slate-500">
                Registry + Vault + Liquidity
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#why">
              Why
            </a>
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#preview">
              Limited Preview
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white md:inline-flex"
              onClick={() => setIsGateOpen(true)}
            >
              Log In
            </button>
            <button className={primaryButton} onClick={() => setIsGateOpen(true)}>
              Request Access
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pb-24 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(15,23,42,0.6),transparent_50%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ice-blue/80">
                Private Markets Infrastructure
              </p>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Registry for Equity and Private Holdings.
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Capital Efficiency Through Information. The infrastructure built
                for private markets to verify data provenance, structure
                registries, and prepare for liquidity.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Private Beta",
                    description: "Select partners only",
                  },
                  {
                    title: "SEC-Aware",
                    description: "Audit-ready provenance",
                  },
                  {
                    title: "Liquidity-Ready",
                    description: "Compliant transfers",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  The Why
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Private markets rely on speculation and fragmented data.
                </h2>
                <p className="mt-5 text-base text-slate-300">
                  We started RegisterStocks Registry with a simple goal: create
                  a platform that helps investors, funds, and companies verify
                  ownership, structure registries, and prepare for liquidity.
                  The future of private markets depends on better information
                  and structured registries, not more speculation.
                </p>
                <p className="mt-4 text-base text-slate-300">
                  By digitizing equity through SAFE notes and convertible debt,
                  RegisterStocks lets capital move more intelligently, much like
                  a stock exchange facilitates the trading of shares.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-deep-space/70 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  The Solution
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Capital moves intelligently when equity is digitized.
                </h3>
                <div className="mt-6 grid gap-5">
                  {valuePoints.map((point) => (
                    <div key={point.title} className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-ice-blue">
                        <point.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {point.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
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
        </section>

        <section id="features" className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  The What
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  The Registry + Vault + Liquidity stack.
                </h2>
                <p className="mt-4 max-w-2xl text-base text-slate-300">
                  RegisterStocks delivers the core systems private markets have
                  lacked: verified document custody, provenance, structured
                  registries, and liquidity readiness, all without compromising
                  compliance or control.
                </p>
              </div>
              <button className={secondaryButton} onClick={() => setIsGateOpen(true)}>
                View Demo Dashboard
              </button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureGrid.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-white/10 bg-deep-space/70 p-6 transition hover:border-ice-blue/40 hover:shadow-glow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-ice-blue">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {feature.description}
                  </p>
                  <button
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ice-blue"
                    onClick={() => setIsGateOpen(true)}
                  >
                    Learn more
                    <ArrowIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-white/10 bg-deep-space/70 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Regulatory & Institutional Alignment
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  Designed for compliance and longevity.
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  RegisterStocks supports SEC-aware provenance, auditability,
                  and KYC/AML integration pathways. The architecture is built to
                  complement transfer-agent and fund-administration frameworks,
                  with optional custodial partnerships for professional
                  operations.
                </p>
                <p className="mt-4 text-base text-slate-300">
                  The platform is engineered to grow with regulation in fintech,
                  not around it, ensuring your registry stays durable as private
                  markets evolve.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Infrastructure Built for Private Markets
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  Reduce friction, lower risk, increase capital efficiency.
                </h2>
                <div className="mt-6 grid gap-5">
                  {[
                    "Cryptographic verification of documents and versions.",
                    "Eliminates uncertainty around rights, amendments, and validity.",
                    "Reduces moral hazard and information asymmetry.",
                    "Creates a clear path to stock exchange readiness.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-deep-space/70 p-4"
                    >
                      <CheckIcon className="mt-1 h-4 w-4 text-ice-blue" />
                      <p className="text-sm text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Structured Registry Standardized Assets
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Registry standards built for professionals.
                </h2>
              </div>
              <button className={secondaryButton} onClick={() => setIsGateOpen(true)}>
                Request Registry Access
              </button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {registryStandards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-deep-space/70 p-6"
                >
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="preview" className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Limited Preview
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Demo mode for select partners.
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  RegisterStocks is currently in Private Beta. The application
                  is running with live registry workflows, but access is gated
                  for vetted partners only.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
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
                  <div className="rounded-2xl border border-white/20 bg-[#0b1220]/90 px-6 py-4 text-center shadow-2xl backdrop-blur">
                    <p className="text-sm font-semibold text-white">
                      Private Beta
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Request access to unlock the full demo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Contact Us
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Drop us a line.
                </h2>
                <p className="mt-4 text-base text-slate-300">
                  Schedule a full demo, secure your registry, and sign up for
                  updates. We will follow up within 48 hours.
                </p>
                <div className="mt-6 rounded-3xl border border-white/10 bg-deep-space/70 p-6">
                  <h3 className="text-sm font-semibold text-white">
                    Direct Line
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    contact@registerstocks.com
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    Private markets deserve better information.
                  </p>
                </div>
              </div>
              <form
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Name
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-deep-space/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-ice-blue/60 focus:outline-none"
                      placeholder="Jane Founder"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-deep-space/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-ice-blue/60 focus:outline-none"
                      placeholder="jane@firm.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Organization Type
                    </label>
                    <select className="mt-2 w-full rounded-2xl border border-white/10 bg-deep-space/70 px-4 py-3 text-sm text-white focus:border-ice-blue/60 focus:outline-none">
                      <option>Investor</option>
                      <option>Fund</option>
                      <option>Company</option>
                    </select>
                  </div>
                  <button className={primaryButton} type="submit">
                    Request Access
                  </button>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Sign up for our email list for updates, promotions, and more.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-white">RegisterStocks</p>
            <p className="mt-1 text-xs text-slate-500">
              Registry infrastructure for private markets.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <button onClick={() => setIsGateOpen(true)}>Log In</button>
            <button onClick={() => setIsGateOpen(true)}>Dashboard</button>
            <button onClick={() => setIsGateOpen(true)}>Search Registry</button>
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
    <div className="fixed inset-0 z-50 bg-[#05070d]/85 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-y-auto px-6 py-12">
        <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl items-center justify-center">
          <div className="relative w-full">
            <PreviewShell blurred className="rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-md rounded-3xl border border-white/20 bg-[#0b1220]/90 p-6 shadow-2xl backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ice-blue/80">
                      Limited Preview
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      RegisterStocks is currently in Private Beta for select
                      partners.
                    </h3>
                  </div>
                  <button
                    className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-white/40 hover:text-white"
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  Contact us to schedule a full demo and secure your registry.
                </p>
                <form
                  className="mt-6 grid gap-4"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-deep-space/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-ice-blue/60 focus:outline-none"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-deep-space/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-ice-blue/60 focus:outline-none"
                    placeholder="Email"
                    type="email"
                  />
                  <select className="w-full rounded-2xl border border-white/10 bg-deep-space/70 px-4 py-3 text-sm text-white focus:border-ice-blue/60 focus:outline-none">
                    <option>Investor</option>
                    <option>Fund</option>
                    <option>Company</option>
                  </select>
                  <button className={primaryButton} type="submit">
                    Request Access
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500">
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
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-deep-space/70 p-6 shadow-2xl ${className}`}
    >
      <div
        className={`space-y-6 ${blurred ? "blur-xl opacity-70" : ""}`}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5" />
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
          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {["Dashboard", "Registries", "Vault", "Liquidity", "Compliance"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2"
                >
                  <span className="text-xs text-slate-300">{item}</span>
                  <div className="h-2 w-6 rounded-full bg-white/10" />
                </div>
              )
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Registry Overview</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    $4.2B Verified Holdings
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Active", "Pending", "Audit Ready"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-deep-space/70 px-3 py-2"
                  >
                    <p className="text-xs text-slate-400">{label}</p>
                    <div className="mt-2 h-2 w-16 rounded-full bg-ice-blue/60" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Vault Activity", "Liquidity Readiness"].map((title) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs text-slate-400">{title}</p>
                  <div className="mt-3 h-20 rounded-xl border border-dashed border-white/10 bg-deep-space/70" />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-slate-400">Registry Search</p>
              <div className="mt-3 h-10 rounded-full border border-white/10 bg-deep-space/70" />
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

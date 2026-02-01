"use client";

import { useState } from "react";
import Link from "next/link";

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60";

const services = [
  {
    title: "Trading",
    description:
      "Access deep liquidity pools and sophisticated trading infrastructure for digital assets.",
    icon: ChartIcon,
  },
  {
    title: "Asset Management",
    description:
      "Professional portfolio management strategies for institutional and accredited investors.",
    icon: WalletIcon,
  },
  {
    title: "Investment Banking",
    description:
      "Strategic advisory and capital markets services for blockchain companies.",
    icon: BankIcon,
  },
  {
    title: "Mining",
    description:
      "Sustainable and efficient cryptocurrency mining operations powered by renewable energy.",
    icon: CubeIcon,
  },
];

const stats = [
  { label: "Assets Under Management", value: "$2.1B+" },
  { label: "Trading Volume", value: "$50B+" },
  { label: "Team Members", value: "300+" },
  { label: "Years in Crypto", value: "10+" },
];

export default function GalaxyPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10">
              <span className="text-lg font-bold text-purple-400">G</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Galaxy Digital</p>
              <p className="text-xs text-slate-500">Demo Integration</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              ← Back to Main
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-20 pt-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.1),transparent_70%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                Digital Asset Financial Services
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Institutional-Grade Digital Asset Solutions
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                A technology-driven financial services firm dedicated to the
                digital asset, cryptocurrency, and blockchain technology sector.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className={primaryButton}>
                  Get Started
                  <ArrowIcon className="h-4 w-4" />
                </button>
                <a className={secondaryButton} href="#services">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-white/5 bg-white/[0.02] py-12">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-purple-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Our Services
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Comprehensive Digital Asset Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
                Full-service platform providing trading, asset management,
                investment banking, and mining solutions.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/40 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  About
                </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  Building the Future of Finance
                </h2>
                <p className="mt-5 text-base text-slate-300">
                  This is a demo page showcasing how to integrate multiple apps
                  within a single Next.js project. The main RegisterStocks
                  landing page and this Galaxy-themed page coexist seamlessly.
                </p>
                <p className="mt-4 text-base text-slate-300">
                  Each app can have its own unique design language, color
                  scheme, and functionality while sharing the same codebase and
                  infrastructure.
                </p>
                <div className="mt-8">
                  <Link href="/" className={secondaryButton}>
                    View Main App
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
                <h3 className="text-lg font-semibold text-white">
                  Integration Notes
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>Separate route at /galaxy</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>Unique styling with purple accent colors</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>Shared layout and global styles</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>Easy navigation between apps</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-white/5 py-20">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Stay Updated
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Subscribe to Updates
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Get the latest news and insights delivered to your inbox.
              </p>
              <form
                className="mt-8 flex gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:outline-none"
                />
                <button className={primaryButton} type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10">
              <span className="text-sm font-bold text-purple-400">G</span>
            </div>
            <p className="text-sm text-slate-400">
              Galaxy Digital Demo • Part of RegisterStocks
            </p>
          </div>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            ← Return to RegisterStocks
          </Link>
        </div>
      </footer>
    </div>
  );
}

// Icon Components
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

function ChartIcon({ className = "" }: { className?: string }) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function WalletIcon({ className = "" }: { className?: string }) {
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
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}

function BankIcon({ className = "" }: { className?: string }) {
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
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M5 6 12 3l7 3" />
      <path d="M4 10v11" />
      <path d="M20 10v11" />
      <path d="M8 14v3" />
      <path d="M12 14v3" />
      <path d="M16 14v3" />
    </svg>
  );
}

function CubeIcon({ className = "" }: { className?: string }) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

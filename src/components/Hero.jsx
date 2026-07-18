import { quickFacts } from '../data/deadlines.js'
import { useReveal } from '../lib/useReveal.js'

function Sparkle({ className, delay = '0ms' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`animate-sparkle ${className}`}
      style={{ animationDelay: delay }}
    >
      <path d="M12 0l2.2 8.1L22 10l-7.8 1.9L12 20l-2.2-8.1L2 10l7.8-1.9L12 0z" />
    </svg>
  )
}

export default function Hero() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="top"
      ref={ref}
      className="blueprint-grid relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-amber/10 blur-3xl" />

      <Sparkle className="pointer-events-none absolute right-[18%] top-16 h-5 w-5 text-amber/70" delay="0ms" />
      <Sparkle className="pointer-events-none absolute right-[8%] top-40 h-3 w-3 text-teal/60" delay="600ms" />
      <Sparkle className="pointer-events-none absolute right-[28%] top-8 h-2.5 w-2.5 text-paper/40" delay="1200ms" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p
            className={`eyebrow mb-5 transition-all duration-700 ease-out ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            NED Admissions 2026 · Verified Guide
          </p>
          <h1
            className={`max-w-xl text-4xl font-semibold leading-[1.08] text-paper transition-all duration-700 ease-out sm:text-5xl ${
              visible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Every question a NED aspirant asks has already been answered.
            <span className="text-amber"> We centralized it.</span>
          </h1>
          <p
            className={`mt-6 max-w-lg text-base leading-relaxed text-slate-muted transition-all duration-700 ease-out ${
              visible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'
            }`}
          >
            Timelines, departments, merit cutoffs, and an AI guide that answers the
            same questions seniors field one-on-one, every cycle — instantly, and
            without an account.
          </p>
          <div
            className={`mt-9 flex flex-wrap gap-4 transition-all duration-700 ease-out ${
              visible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'
            }`}
          >
            <a
              href="#calculator"
              className="rounded-sm bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-navy transition hover:bg-amber-dim"
            >
              Calculate My Merit →
            </a>
            <a
              href="#recommend"
              className="rounded-sm border border-slate-muted/40 px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:border-amber hover:text-amber"
            >
              Find My Department
            </a>
          </div>

          <dl
            className={`mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 transition-all duration-700 ease-out sm:grid-cols-4 ${
              visible ? 'translate-y-0 opacity-100 delay-[400ms]' : 'translate-y-4 opacity-0'
            }`}
          >
            {quickFacts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-muted">
                  {f.label}
                </dt>
                <dd className="mt-1 font-display text-lg text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className={`reg-marks self-start rounded-sm border border-white/15 bg-navy-deep/60 p-6 transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="eyebrow mb-4"> Status</p>
          <ul className="space-y-4 font-mono text-sm text-slate-muted">
            <li className="flex items-center justify-between border-b border-dashed border-white/10 pb-3">
              <span>Phase I test</span>
              <span className="text-paper">12–15 Jun</span>
            </li>
            <li className="flex items-center justify-between border-b border-dashed border-white/10 pb-3">
              <span>Phase II test</span>
                <span className="text-paper">6–9 Jul</span>
            </li>
            <li className="flex items-center justify-between border-b border-dashed border-white/10 pb-3">
              <span>1st provisional list</span>
              <span className="text-amber">16 Jul</span>
            </li>
            <li className="flex items-center justify-between pb-1">
              <span>Formula</span>
              <span className="text-paper">60% Test + 40% HSC-I</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
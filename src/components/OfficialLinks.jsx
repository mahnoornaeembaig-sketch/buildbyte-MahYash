import { officialLinks } from '../data/deadlines.js'
import { useReveal } from '../lib/useReveal.js'

export default function OfficialLinks() {
  const [ref, visible] = useReveal()

  return (
    <section id="official-links" ref={ref} className="border-y border-white/10 bg-navy-deep/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="eyebrow mb-3">Verified Sources</p>
          <h2 className="mb-3 text-3xl font-semibold text-paper">Official links.</h2>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-muted">
            Every action that matters  registering, applying, checking the schedule  happens
            on the university's own site. We just point you straight there.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {officialLinks.map((l, i) => (
            <a
              key={l.title}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`reg-marks group flex flex-col justify-between rounded-sm border border-white/15 bg-navy p-6 transition-all duration-500 ease-out hover:border-amber/60 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${150 + i * 80}ms` : '0ms' }}
            >
              <div>
                <h3 className="font-display text-base text-paper">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-muted">{l.desc}</p>
              </div>
              <span className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber group-hover:underline">
                Visit official site
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
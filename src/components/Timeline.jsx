import { timeline } from '../data/deadlines.js'
import { useReveal } from '../lib/useReveal.js'

const statusStyle = {
  past: 'text-slate-muted border-slate-muted/30',
  current: 'text-amber border-amber',
  upcoming: 'text-paper border-white/25',
}

export default function Timeline() {
  const [ref, visible] = useReveal()

  return (
    <section id="timeline" ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div
        className={`mb-10 flex items-end justify-between gap-4 transition-all duration-700 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div>
          <p className="eyebrow mb-3">Admission Schedule</p>
          <h2 className="text-3xl font-semibold text-paper">The timeline, in order.</h2>
        </div>
        <a
          href="https://www.neduet.edu.pk/sites/default/files/Admissions-2026/ADMISSIONS_SCHEDULE_2026.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden font-mono text-xs uppercase tracking-wider text-amber hover:underline sm:inline"
        >
          Official schedule PDF ↗
        </a>
      </div>

      <ol className="relative border-l border-dashed border-white/15 pl-8">
        {timeline.map((t, i) => (
          <li
            key={i}
            className={`relative mb-10 last:mb-0 transition-all duration-500 ease-out ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: visible ? `${150 + i * 90}ms` : '0ms' }}
          >
            <span
              className={`absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 bg-navy ${statusStyle[t.status]}`}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-muted">
                {t.phase}
              </span>
              <h3 className="font-display text-lg text-paper">{t.label}</h3>
              <span className={`ml-auto font-mono text-sm ${statusStyle[t.status]}`}>{t.date}</span>
            </div>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-muted">{t.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
import { useMemo, useState } from 'react'
import { meritFormula } from '../data/deadlines.js'
import { useReveal } from '../lib/useReveal.js'

function clamp(n) {
  if (Number.isNaN(n)) return 0
  return Math.min(100, Math.max(0, n))
}

export default function MeritCalculator() {
  const [testScore, setTestScore] = useState('')
  const [academic, setAcademic] = useState('')
  const [ref, visible] = useReveal()

  const test = clamp(parseFloat(testScore))
  const acad = clamp(parseFloat(academic))
  const hasInput = testScore !== '' || academic !== ''

  const aggregate = useMemo(() => {
    return test * meritFormula.entryTestWeight + acad * meritFormula.academicWeight
  }, [test, acad])

  const dashOffset = useMemo(() => {
    const circumference = 2 * Math.PI * 54
    return circumference - (circumference * aggregate) / 100
  }, [aggregate])

  return (
    <section id="calculator" ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div
        className={`transition-all duration-700 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <p className="eyebrow mb-3">Instrument 01</p>
        <h2 className="mb-3 text-3xl font-semibold text-paper">Merit Calculator</h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-muted">
          {meritFormula.note}
        </p>
      </div>

      <div
        className={`reg-marks grid gap-10 rounded-sm border border-white/15 bg-navy-deep/60 p-8 transition-all duration-700 ease-out md:grid-cols-[1fr_auto] md:p-10 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ transitionDelay: visible ? '150ms' : '0ms' }}
      >
        <div className="space-y-7">
          <label className="block">
            <span className="mb-2 flex items-baseline justify-between font-mono text-xs uppercase tracking-wider text-slate-muted">
              Entry Test Score
              <span className="text-paper">{testScore === '' ? '' : `${test.toFixed(2)}%`}</span>
            </span>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={testScore}
              onChange={(e) => setTestScore(e.target.value)}
              placeholder="e.g. 78.50"
              className="w-full rounded-sm border border-white/15 bg-navy px-4 py-3 font-mono text-paper placeholder:text-slate-muted/50 focus:border-amber"
            />
            <input
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={testScore === '' ? 0 : test}
              onChange={(e) => setTestScore(e.target.value)}
              className="mt-3 w-full accent-amber"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-baseline justify-between font-mono text-xs uppercase tracking-wider text-slate-muted">
              HSC Part-I / Equivalency
              <span className="text-paper">{academic === '' ? '' : `${acad.toFixed(2)}%`}</span>
            </span>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={academic}
              onChange={(e) => setAcademic(e.target.value)}
              placeholder="e.g. 85.00"
              className="w-full rounded-sm border border-white/15 bg-navy px-4 py-3 font-mono text-paper placeholder:text-slate-muted/50 focus:border-amber"
            />
            <input
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={academic === '' ? 0 : acad}
              onChange={(e) => setAcademic(e.target.value)}
              className="mt-3 w-full accent-amber"
            />
          </label>

          <div className="flex gap-6 divide-x divide-white/10 border-t border-dashed border-white/10 pt-5 font-mono text-xs text-slate-muted">
            <span className="pr-6">Test weight × 0.60</span>
            <span className="pl-6">Academic weight × 0.40</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:w-64">
          <div className="relative h-40 w-40">
            <svg viewBox="0 0 120 120" className="h-40 w-40 -rotate-90">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#163C63" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke={hasInput ? '#F0A63B' : '#3E6E9E'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 54}
                strokeDashoffset={hasInput ? dashOffset : 2 * Math.PI * 54}
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl text-paper">
                {hasInput ? aggregate.toFixed(2) : ''}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-muted">
                Aggregate %
              </span>
            </div>
          </div>
          <p className="text-center font-mono text-[11px] text-slate-muted">
            Recent top departments closed near 75–85%. Compare against{' '}
            <a href="#merit-lists" className="text-amber hover:underline">
              past merit lists
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
import { useState } from 'react'
import { getRecommendation } from '../lib/recommend.js'

export default function BranchRecommendation() {
  const [percentage, setPercentage] = useState('')
  const [interests, setInterests] = useState('')
  const [goal, setGoal] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setResults(null)
    const picks = await getRecommendation({
      percentage: parseFloat(percentage) || 0,
      interests,
      goal,
    })
    setResults(picks)
    setLoading(false)
  }

  return (
    <section id="recommend" className="border-y border-white/10 bg-navy-deep/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">Instrument 02</p>
        <h2 className="mb-3 text-3xl font-semibold text-paper">Find your department.</h2>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-muted">
          A short form, an instant recommendation. Nothing is saved  the result appears
          right here, on this screen.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-sm border border-white/10 bg-navy p-7">
            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-muted">
                Expected aggregate (%)
              </span>
              <input
                type="number"
                min="0"
                max="100"
                required
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder="e.g. 82"
                className="w-full rounded-sm border border-white/15 bg-navy-deep px-4 py-3 font-mono text-paper placeholder:text-slate-muted/50 focus:border-amber"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-muted">
                Subjects / interests
              </span>
              <input
                type="text"
                required
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                placeholder="e.g. programming, electronics, design"
                className="w-full rounded-sm border border-white/15 bg-navy-deep px-4 py-3 text-paper placeholder:text-slate-muted/50 focus:border-amber"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-muted">
                Career goal
              </span>
              <input
                type="text"
                required
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. build software products"
                className="w-full rounded-sm border border-white/15 bg-navy-deep px-4 py-3 text-paper placeholder:text-slate-muted/50 focus:border-amber"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-sm bg-amber px-5 py-3 font-mono text-xs uppercase tracking-wider text-navy transition hover:bg-amber-dim disabled:opacity-60"
            >
              {loading ? 'Analyzing…' : 'Get My Recommendation →'}
            </button>
          </form>

          <div className="rounded-sm border border-dashed border-white/15 p-7">
            {!results && !loading && (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center text-center">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-muted">
                  Awaiting input
                </p>
                <p className="mt-2 max-w-xs text-sm text-slate-muted">
                  Fill in the form to see up to three recommended departments with reasoning.
                </p>
              </div>
            )}
            {loading && (
              <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-amber border-t-transparent" />
                <p className="font-mono text-xs uppercase tracking-wider text-slate-muted">
                  Matching your profile…
                </p>
              </div>
            )}
            {results && (
              <div className="space-y-5">
                <p className="eyebrow">Recommended for you</p>
                {results.map((r, i) => (
                  <div key={r.name} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-amber">0{i + 1}</span>
                      <h3 className="font-display text-lg text-paper">{r.name}</h3>
                    </div>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-muted">
                      {r.faculty}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-muted">{r.reason}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

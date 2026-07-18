export default function MeritListViewer() {
  return (
    <section id="merit-lists" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-3xl font-semibold text-paper">Previous cut-off</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="/merit.pdf"
          target="_blank"
          rel="noreferrer"
          className="reg-marks group flex flex-col justify-between rounded-sm border border-white/15 bg-navy-deep/60 p-6 transition hover:border-amber/60"
        >
          <div>
            <span className="font-mono text-xs text-amber">OFFICIAL DOCUMENT</span>
            <h3 className="mt-2 font-display text-base text-paper">Combined cut off of previous years</h3>
          </div>
          <span className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-muted group-hover:text-amber">
            View PDF
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}
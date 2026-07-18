export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          
          {/* Brand & Tagline Section */}
          <div>
            <h3 className="mb-2 font-display text-xl text-paper">NED Admission Assistant</h3>
            <p className="text-sm leading-relaxed text-slate-muted">
              Simplifying your journey to NED University. Built to help you navigate the admission process with clarity and confidence.
            </p>
          </div>

          {/* Disclaimer Section */}
          <div className="text-sm leading-relaxed text-slate-muted">
            <p>
              This is an independent, unofficial guide. It is not affiliated with NED
              University. Always confirm dates, eligibility, and figures on the{' '}
              <a
                href="https://www.neduet.edu.pk/admission"
                target="_blank"
                rel="noreferrer"
                className="text-amber hover:underline"
              >
                official admission portal
              </a>
              .
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
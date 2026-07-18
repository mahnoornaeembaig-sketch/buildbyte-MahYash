import { faculties } from '../data/departments.js'
import { useReveal } from '../lib/useReveal.js'

export default function Departments() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="departments"
      ref={ref}
      className="border-y border-white/10 bg-navy-deep/50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="eyebrow mb-3">Programme Directory</p>
          <h2 className="mb-3 text-3xl font-semibold text-paper">Six faculties, one decision.</h2>
          <p className="mb-12 max-w-2xl text-sm leading-relaxed text-slate-muted">
            Every official NED undergraduate department at a glance. Not sure which one fits? Jump to the
            AI branch recommendation below.
          </p>
        </div>

        <div className="space-y-14">
          {faculties.map((fac, facIndex) => (
            <div
              key={fac.code}
              className={`transition-all duration-700 ease-out ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: visible ? `${150 + facIndex * 100}ms` : '0ms' }}
            >
              <div className="mb-5 flex items-baseline gap-3 border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-amber">{fac.code}</span>
                <h3 className="font-display text-xl text-paper">{fac.name}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* This is the fix! It now correctly reads the strings instead of objects */}
                {fac.departments.map((deptName, deptIndex) => (
                  <div
                    key={deptName}
                    className={`flex items-center rounded-sm border border-white/10 bg-navy p-5 transition-all duration-500 ease-out hover:border-amber/50 ${
                      visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                    style={{
                      transitionDelay: visible
                        ? `${150 + facIndex * 100 + deptIndex * 40}ms`
                        : '0ms',
                    }}
                  >
                    <h4 className="font-display text-base text-paper">{deptName}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
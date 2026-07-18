import { allDepartments } from '../data/departments.js'

// This function scores departments locally against the student's stated
// interests and goal so the demo works with zero backend dependency.
//
// To wire this to the real AI call described in the PRD (6.3), replace
// the body of `getRecommendation` with a fetch to your Supabase Edge
// Function / API route, e.g.:
//
//   export async function getRecommendation(input) {
//     const res = await fetch('/api/recommend', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(input),
//     })
//     return res.json() // { picks: [{ name, faculty, reason }] }
//   }
//
// Keep the input/output shape the same and every component that calls
// this stays untouched.

export async function getRecommendation({ percentage, interests, goal }) {
  const interestText = interests.toLowerCase()
  const goalText = goal.toLowerCase()

  const scored = allDepartments.map((d) => {
    let score = 0
    const reasons = []

    d.interests.forEach((tag) => {
      if (interestText.includes(tag)) {
        score += 3
        reasons.push(`matches your interest in ${tag}`)
      }
    })

    d.interests.forEach((tag) => {
      const words = tag.split(' ')
      if (words.some((w) => w.length > 3 && goalText.includes(w))) {
        score += 2
        reasons.push(`aligns with your goal of "${goal.trim()}"`)
      }
    })

    if (percentage >= 80 && ['Electronic Engineering', 'Computer & Information Systems Engineering', 'BS Computer Science', 'Civil Engineering', 'Electrical Engineering'].includes(d.name)) {
      score += 1
    }

    return { ...d, score, reasons: [...new Set(reasons)] }
  })

  const ranked = scored.sort((a, b) => b.score - a.score)
  const withSignal = ranked.filter((d) => d.score > 0).slice(0, 3)
  const picks = withSignal.length > 0 ? withSignal : ranked.slice(0, 3)

  // simulate a brief AI-call latency so the UI's loading state is real
  await new Promise((r) => setTimeout(r, 550))

  return picks.map((p) => ({
    name: p.name,
    faculty: p.faculty,
    reason:
      p.reasons.length > 0
        ? `Recommended because it ${p.reasons.join(' and it ')}.`
        : `A strong general fit at your merit range — ${p.blurb}`,
  }))
}

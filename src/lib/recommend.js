import { allDepartments } from '../data/departments.js'

// This function scores departments locally against the student's stated
// interests and goal so the demo works with zero backend dependency.
//
// To wire this to a real backend later, replace the body of
// getRecommendation with a fetch to your API/Edge Function, keeping the
// same input/output shape so no component changes are needed.

const STOP_WORDS = new Set([
  'and', 'the', 'a', 'an', 'to', 'of', 'in', 'for', 'with', 'my', 'i', 'want',
  'like', 'love', 'be', 'become', 'work', 'working', 'build', 'building',
])

function tokenize(text) {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w))
}

export async function getRecommendation({ percentage, interests, goal }) {
  const interestText = interests.toLowerCase()
  const goalText = goal.toLowerCase()
  const combinedText = `${interestText} ${goalText}`
  const combinedTokens = new Set([...tokenize(interestText), ...tokenize(goalText)])

  const scored = allDepartments.map((d) => {
    let score = 0
    const reasons = new Set()

    d.interests.forEach((tag) => {
      const tagLower = tag.toLowerCase()

      // Full-phrase match (e.g. "computer science" appears verbatim)
      if (combinedText.includes(tagLower)) {
        score += 3
        reasons.add(`matches your interest in ${tag}`)
        return
      }

      // Word-level match: any significant word in the tag appears in
      // what the student typed (e.g. tag "programming" matches "I love
      // programming apps")
      const tagWords = tagLower.split(' ').filter((w) => w.length > 3)
      const hit = tagWords.some((w) => combinedTokens.has(w))
      if (hit) {
        score += 2
        reasons.add(`relates to your interest in ${tag}`)
      }
    })

    if (
      percentage >= 80 &&
      [
        'Electronic Engineering',
        'Computer and Information Systems Engineering',
        'Computer Science & Information Technology',
        'Civil Engineering',
        'Electrical Engineering',
      ].includes(d.name)
    ) {
      score += 1
    }

    return { ...d, score, reasons: [...reasons] }
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
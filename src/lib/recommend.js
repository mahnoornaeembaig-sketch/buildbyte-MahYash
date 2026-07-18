import { fetchAllDepartments } from '../data/departments.js'

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
  const allDepartments = await fetchAllDepartments()

  const interestText = interests.toLowerCase()
  const goalText = goal.toLowerCase()
  const combinedText = `${interestText} ${goalText}`
  const combinedTokens = new Set([...tokenize(interestText), ...tokenize(goalText)])

  const scored = allDepartments.map((d) => {
    let score = 0
    const reasons = new Set()

    ;(d.interests || []).forEach((tag) => {
      const tagLower = tag.toLowerCase()
      if (combinedText.includes(tagLower)) {
        score += 3
        reasons.add(`matches your interest in ${tag}`)
        return
      }
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
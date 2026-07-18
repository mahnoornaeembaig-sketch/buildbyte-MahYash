import { useEffect, useRef, useState } from 'react'
import { faqs, fallbackAnswer } from '../data/faq.js'

const greetings = ['hi', 'hello', 'hey', 'salam', 'assalam', 'greetings']
const greetingReply =
  "Hello! I'm the NED Admission Assistant. I can help with merit calculations, entry test details, fees, deadlines, and eligibility. What would you like to know?"

// Escapes regex special characters so keywords like '60%' or '60/40'
// don't break the RegExp constructor.
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Word-boundary match: 'be' won't match inside 'before', but will match
// 'BE programme'. Falls back to plain includes() for keywords that aren't
// pure word characters (e.g. '60%', '60/40') since \b doesn't work well there.
function keywordMatches(text, keyword) {
  const isWordy = /^[\w\s]+$/.test(keyword)
  if (!isWordy) return text.includes(keyword)
  const pattern = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'i')
  return pattern.test(text)
}

function isGreeting(text) {
  return greetings.some((g) => keywordMatches(text, g))
}

function findAnswer(question) {
  const q = question.toLowerCase()

  if (isGreeting(q)) {
    return greetingReply
  }

  let best = null
  let bestScore = 0
  faqs.forEach((f) => {
    let score = 0
    f.keywords.forEach((k) => {
      if (keywordMatches(q, k.toLowerCase())) score += 1
    })
    if (score > bestScore) {
      bestScore = score
      best = f
    }
  })
  return bestScore > 0 ? best.a : fallbackAnswer
}

// Placeholder async call. Today this resolves against the local FAQ
// index so the widget works with zero backend dependency. Once a real
// backend exists, swap the body for:
//
//   const res = await fetch('/api/chat', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message: question }),
//   })
//   const data = await res.json()
//   return data.reply
//
// The input/output shape (string in, string out) stays the same, so
// nothing else in this component needs to change.
async function fetchChatReply(question) {
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 400))
  return findAnswer(question)
}

const starterQuestions = [
  'How is NED merit calculated?',
  'When is the entry test?',
  'What documents do I need?',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm the NED Admission Assistant. Ask me about deadlines, merit, eligibility, or departments.",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open, typing])

  function toggleOpen() {
    if (open) {
      setClosing(true)
      setTimeout(() => {
        setOpen(false)
        setClosing(false)
      }, 150)
    } else {
      setOpen(true)
    }
  }

  async function send(text) {
    const question = text.trim()
    if (!question || typing) return
    setMessages((m) => [...m, { role: 'user', text: question }])
    setInput('')
    setTyping(true)
    try {
      const answer = await fetchChatReply(question)
      setMessages((m) => [...m, { role: 'assistant', text: answer }])
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: "Sorry, I couldn't reach the assistant. Please try again." },
      ])
    } finally {
      setTyping(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div
          className={`mb-3 flex h-[440px] w-[320px] flex-col overflow-hidden rounded-sm border border-white/15 bg-navy-deep shadow-2xl sm:w-[360px] ${
            closing ? 'animate-panel-out' : 'animate-panel-in'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-navy px-4 py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-paper">
              FAQ Assistant
            </span>
            <button
              onClick={toggleOpen}
              aria-label="Close chat"
              className="text-slate-muted transition hover:text-amber"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] animate-message-in rounded-sm px-3 py-2 text-sm leading-relaxed ${
                  m.role === 'assistant'
                    ? 'bg-navy text-paper'
                    : 'ml-auto bg-amber text-navy'
                }`}
              >
                {m.text}
              </div>
            ))}
            {messages.length === 1 && !typing && (
              <div className="space-y-2 pt-2">
                {starterQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full rounded-sm border border-white/10 px-3 py-2 text-left text-xs text-slate-muted transition hover:border-amber hover:text-amber"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            {typing && (
              <div className="flex max-w-[85%] items-center gap-1 rounded-sm bg-navy px-3 py-2.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-muted [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-muted [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-muted" />
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              disabled={typing}
              className="flex-1 rounded-sm border border-white/15 bg-navy px-3 py-2 text-sm text-paper placeholder:text-slate-muted/50 focus:border-amber disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={typing}
              className="rounded-sm bg-amber px-3 py-2 font-mono text-xs uppercase tracking-wider text-navy transition hover:bg-amber-dim disabled:cursor-not-allowed disabled:opacity-60"
            >
              {typing ? '…' : 'Send'}
            </button>
          </form>
        </div>
      )}

      <button
        onClick={toggleOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-navy shadow-lg transition hover:bg-amber-dim"
        aria-label="Toggle chat assistant"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}
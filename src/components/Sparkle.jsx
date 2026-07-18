function Sparkle({ className, delay = '0ms' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`animate-sparkle drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] ${className}`}
      style={{ animationDelay: delay }}
    >
      <path d="M12 0l2.2 8.1L22 10l-7.8 1.9L12 20l-2.2-8.1L2 10l7.8-1.9L12 0z" />
    </svg>
  )
}
export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h3 className="text-amber-500 font-bold text-xl tracking-tighter">NED Admission Assistant</h3>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Your verified guide to NED 2026 admissions. Built with passion by MahYash Coders.
          </p>
        </div>

        {/* Links / Contact */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="https://www.neduet.edu.pk" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-amber-500 transition-colors text-sm">Official Portal</a>
          <span className="text-gray-60 text-xs">© 2026 MahYash Coders</span>
        </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="mt-8 text-center">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <p className="text-gray-600 text-[10px] mt-4 uppercase tracking-widest">
          BuildByte Hackathon 2026 • IEEE NEDUET Student Branch
        </p>
      </div>
    </footer>
  )
}
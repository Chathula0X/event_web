import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-purple-100/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mr-2 shadow-lg">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">EventWeb</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Discover, create, and join amazing events around you. Build connections and make memories.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.162 5.656a8.38 8.38 0 0 1-2.4.658 4.187 4.187 0 0 0 1.837-2.31 8.39 8.39 0 0 1-2.658 1.016A4.178 4.178 0 0 0 12 8.13c0 .327.037.646.108.952a11.86 11.86 0 0 1-8.605-4.364 4.176 4.176 0 0 0 1.293 5.579 4.155 4.155 0 0 1-1.893-.523v.053a4.179 4.179 0 0 0 3.353 4.096 4.196 4.196 0 0 1-1.888.072 4.18 4.18 0 0 0 3.903 2.901A8.382 8.382 0 0 1 2 18.407a11.829 11.829 0 0 0 6.407 1.878c7.688 0 11.89-6.37 11.89-11.889 0-.182-.004-.362-.012-.541a8.49 8.49 0 0 0 2.077-2.199z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm12 3a1.5 1.5 0 1 1-.001 2.999A1.5 1.5 0 0 1 19.5 5zM12 7a5 5 0 1 1 .001 10.001A5 5 0 0 1 12 7z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17 5.66 21.12 10.44 22v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.91h-2.3V22C18.34 21.12 22 17 22 12.07z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 6.5A1.94 1.94 0 1 1 3.06 6.5 1.94 1.94 0 0 1 6.94 6.5zM2.5 8.75h4.88V21.5H2.5zM9 8.75h4.67v1.75h.07c.65-1.24 2.24-2.55 4.6-2.55 4.92 0 5.83 3.24 5.83 7.45V21.5h-4.88v-6.34c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.43 1.65-2.43 3.35V21.5H9z"/></svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#events" className="hover:text-white transition">Events</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* For Organizers */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">For Organizers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#create" className="hover:text-white transition">Create Event</a></li>
              <li><a href="#dashboard" className="hover:text-white transition">Dashboard</a></li>
              <li><a href="#guide" className="hover:text-white transition">Organizer Guide</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">Stay in the loop</h4>
            <p className="text-sm text-slate-400 mb-4">Get updates on new events and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-xl px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-r-xl hover:from-purple-700 hover:to-indigo-700 transition shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} EventWeb. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs">
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
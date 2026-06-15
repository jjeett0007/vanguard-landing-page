import { useState } from 'react'
import { ArrowUpRight, Award, Crown, X } from 'lucide-react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire']

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Navbar */}
      <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        {/* Brand Name */}
        <a href="#" className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
          VANGUARD
        </a>

        {/* Center Nav Links (md+ only) */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-inter text-sm font-medium uppercase tracking-widest text-white/80 transition-colors duration-200 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right CTA (md+ only) */}
        <a
          href="#"
          className="hidden items-center border border-white/30 px-6 py-3 font-inter text-xs font-medium uppercase tracking-widest text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 md:flex"
        >
          GET IN TOUCH
          <ArrowUpRight className="ml-2 h-3 w-3" />
        </a>

        {/* Hamburger (below md) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-end space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-4 bg-white" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white transition-colors duration-200 hover:text-white/70"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`font-podium text-4xl font-bold uppercase text-white transition-all duration-400 ease-out sm:text-5xl ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80 + 100}ms` : '0ms' }}
            >
              {link}
            </a>
          ))}

          {/* Mobile Menu CTA */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`mt-4 items-center border border-white/30 px-6 py-3 font-inter text-xs font-semibold uppercase tracking-widest text-white transition-all duration-400 ease-out hover:border-white/60 hover:bg-white/10 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 100}ms` : '0ms' }}
          >
            GET IN TOUCH
            <ArrowUpRight className="ml-2 inline h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
            <Crown className="h-4 w-4 text-white/70" />
            <span className="font-inter text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              World-Class Digital Collective
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-podium animate-fade-up-delay-1 font-bold uppercase leading-[0.92] tracking-tight text-white opacity-0">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
          </h1>

          {/* Subtext */}
          <p className="font-inter animate-fade-up-delay-2 mt-6 max-w-md text-sm leading-relaxed text-white/70 opacity-0 lg:mt-8 sm:text-base">
            We build fierce brand identities
            <br />
            that don&apos;t just turn heads —
            <br />
            <span className="font-bold text-white">they lead.</span>
          </p>

          {/* CTA Row */}
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 opacity-0 lg:mt-10 sm:gap-6">
            <a
              href="#"
              className="group inline-flex items-center bg-black px-5 py-3 font-inter text-[11px] font-semibold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
            >
              SEE OUR WORK
              <ArrowUpRight className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Award Badge (hidden on mobile) */}
            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-white/50" />
              <div className="font-inter">
                <div className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Top-Rated
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Brand Studio
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 opacity-0 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            <div>
              <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                250+
              </div>
              <div className="mt-1 font-inter text-[9px] font-medium uppercase tracking-widest text-white/50 sm:text-xs">
                Brands Transformed
              </div>
            </div>
            <div>
              <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                95%
              </div>
              <div className="mt-1 font-inter text-[9px] font-medium uppercase tracking-widest text-white/50 sm:text-xs">
                Client Retention
              </div>
            </div>
            <div>
              <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                10+
              </div>
              <div className="mt-1 font-inter text-[9px] font-medium uppercase tracking-widest text-white/50 sm:text-xs">
                Years in the Game
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { BRAND, CONTACT, PAGES, page } from '../site'
import { Button, Container, Eyebrow, Icon, Lead } from './ui'

const NAV = PAGES.filter((p) => !['/contact', '/privacy-policy'].includes(p.path))

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 font-logo text-[22px] font-bold whitespace-nowrap tracking-[-0.02em] text-ivory md:text-[26px]">
    <img src="/images/logo-mark.png" alt="" width="40" height="48" className="h-10 w-auto md:h-12" />
    {BRAND}
  </Link>
)

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-2 top-2 z-30">
      <Container className={`flex items-center justify-between gap-4 rounded-full transition-[padding,background-color] duration-300 ${scrolled ? 'bg-charcoal/85 py-2 shadow-lg backdrop-blur-md' : 'py-5 md:py-6'}`}>
        <Logo />
        <nav aria-label="Main" className="hidden rounded-full border border-ivory/25 bg-ivory/10 p-1 backdrop-blur-md min-[1360px]:block">
          <ul className="flex">
            {NAV.map((p) => (
              <li key={p.path}>
                <NavLink
                  to={p.path}
                  end
                  className={({ isActive }) =>
                    `block rounded-full border px-3.5 py-1.5 text-[15px] whitespace-nowrap text-ivory/90 transition-colors hover:text-ivory ${
                      isActive ? 'border-ivory/25 bg-ivory/15' : 'border-transparent'
                    }`
                  }
                >
                  {p.nav}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block"><Button to="/contact">Contact Us</Button></div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center rounded-full text-ivory min-[1360px]:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="size-7" />
          </button>
        </div>
      </Container>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="px-3 min-[1360px]:hidden">
          <ul className="max-h-[calc(100svh-100px)] overflow-y-auto rounded-2xl border border-ivory/15 bg-charcoal p-3 shadow-2xl">
            {PAGES.map((p) => (
              <li key={p.path}>
                <NavLink
                  to={p.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-lg font-bold text-ivory ${isActive ? 'bg-ivory/10' : 'hover:bg-ivory/5'}`
                  }
                >
                  {p.nav}
                  <Icon name="arrow" className="size-4 text-gold" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

// Full-bleed inset hero used on every page. `children` = actions under the intro; `bottom` = optional row under the divider.
export function PageHero({ eyebrow, title, intro, image, tall, children, bottom }) {
  return (
    <section className="dark-panel relative mx-2 mt-2 overflow-hidden rounded-2xl bg-charcoal text-ivory">
      <img src={image} alt="" className="hero-zoom absolute inset-0 size-full object-cover" fetchPriority="high" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/35" />
      <Container className={`relative flex flex-col justify-end pt-36 pb-8 md:pb-10 ${tall ? 'min-h-[max(640px,calc(100svh-16px))]' : 'min-h-[560px] md:min-h-[600px]'}`}>
        <div className="grid gap-6 border-b border-ivory/25 pb-8 md:grid-cols-2 md:items-end md:pb-10">
          <div className="hero-rise">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="text-[40px] leading-[1.1] font-bold tracking-[-0.03em] text-balance md:text-[56px] lg:text-[64px]">{title}</h1>
          </div>
          {(intro || children) && (
            <div className="hero-rise max-w-[540px] md:justify-self-end" style={{ '--d': '0.15s' }}>
              {intro && <p className="leading-6 text-ivory/90">{intro}</p>}
              {children && <div className="mt-5 flex flex-wrap gap-3">{children}</div>}
            </div>
          )}
        </div>
        {bottom && <div className="hero-rise pt-6 md:pt-8" style={{ '--d': '0.3s' }}>{bottom}</div>}
      </Container>
    </section>
  )
}

function CtaBand() {
  return (
    <Container className="relative z-10">
      <div data-reveal className="grid gap-6 rounded-2xl bg-gold p-8 md:grid-cols-2 md:items-center md:p-12">
        <div>
          <p className="mb-4 text-sm font-bold">// Let's Begin</p>
          <h2 className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] md:text-5xl">Let's build something that lasts.</h2>
        </div>
        <div>
          <p className="leading-6">Investor, lender, agent or seller: if you have a deal or want access to ours, we'd like to talk.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/partner-with-us" variant="dark">Partner With GBV</Button>
            <Button to="/buyers-list" variant="outline-dark">Join the Buyers List</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const FOOTER_COLS = [
  ['Company', ['/', '/about', '/track-record', '/case-studies', '/investment-approach']],
  ['Work With Us', ['/what-we-do', '/partner-with-us', '/buyers-list', '/contact']],
]

function Footer() {
  return (
    <footer className="dark-panel mx-2 -mt-24 mb-2 rounded-2xl bg-charcoal pt-40 pb-8 text-ivory">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/"><img src="/images/logo.png" alt={BRAND} width="160" height="169" className="h-auto w-40" /></Link>
            <Lead className="mt-4 max-w-xs">Real estate investment based in Jacksonville, FL. Building wealth, creating opportunity, leaving a legacy.</Lead>
          </div>
          {FOOTER_COLS.map(([title, paths]) => (
            <div key={title}>
              <h2 className="mb-4 font-bold">{title}</h2>
              <ul className="space-y-2">
                {paths.map((p) => (
                  <li key={p}>
                    <Link to={p} className="text-ivory/75 hover:text-ivory">{page(p).nav}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="mb-4 font-bold">Get in Touch</h2>
            <ul className="space-y-2 text-ivory/75">
              <li><a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, '')}`} className="hover:text-ivory">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-ivory">{CONTACT.email}</a></li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-sm text-ivory/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-ivory">Privacy Policy</Link>
            <Link to="/privacy-policy#terms" className="hover:text-ivory">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

// Head tags on client navigation; the build also bakes them into per-route HTML (vite.config.js).
function useHeadTags(pathname) {
  useEffect(() => {
    const p = page(pathname) ?? { title: `Page not found | ${BRAND}`, description: '' }
    document.title = p.title
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', p.title)
    for (const sel of ['meta[name="description"]', 'meta[property="og:description"]'])
      document.querySelector(sel)?.setAttribute('content', p.description)
  }, [pathname])
}

// Scroll reveal: flag [data-reveal] elements as they enter the viewport (CSS in index.css does the motion).
// Uses a data attribute, not a class, so React re-renders never strip it.
function useReveal(pathname) {
  useEffect(() => {
    const show = (el) => (el.setAttribute('data-shown', ''), io.unobserve(el))
    const pending = () => document.querySelectorAll('[data-reveal]:not([data-shown])')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && show(e.target))
        // Fast scrolls can jump over an element without it ever "intersecting": show anything already passed.
        pending().forEach((el) => el.getBoundingClientRect().top < innerHeight && show(el))
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    pending().forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useHeadTags(pathname)
  useReveal(pathname)
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a href="#main" className="sr-only z-50 rounded-full bg-ivory px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <div className="mt-10 md:mt-16">
        <CtaBand />
        <Footer />
      </div>
    </>
  )
}

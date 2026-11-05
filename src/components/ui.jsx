import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Lucide-style 24px stroke icons, inlined so we don't ship an icon library.
const ICONS = {
  arrow: 'M7 17 17 7M7 7h10v10',
  phone:
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 6L2 7',
  pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2',
  check: 'M20 6 9 17l-5-5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M18 6 6 18M6 6l12 12',
  plus: 'M12 5v14M5 12h14',
  home: 'M3 10.5 12 3l9 7.5V21H3zM9 21v-6h6v6',
  users:
    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  chart: 'M22 7 13.5 15.5 8.5 10.5 2 17M16 7h6v6',
  tag: 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42zM7.5 7.5h.01',
  shield:
    'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  bank: 'M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z',
  briefcase:
    'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
  doc: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  image: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM21 15l-5-5L5 21',
  wrench:
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z',
  target:
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  alert: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01',
}

export function Icon({ name, className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  )
}

export const Container = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-[60px] ${className}`}>{children}</div>
)

// Light sections sit on the ivory page; dark ones are the inset rounded charcoal panels.
// `.dark-panel` lets children (Eyebrow, Lead, Ph) switch to their on-dark colors via `in-[.dark-panel]:`.
export function Section({ dark, className = '', id, children }) {
  return dark ? (
    <section id={id} className={`dark-panel mx-2 rounded-2xl bg-charcoal py-20 text-ivory md:py-[100px] ${className}`}>
      <Container>{children}</Container>
    </section>
  ) : (
    <section id={id} className={`py-20 md:py-[100px] ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export const Eyebrow = ({ children, className = '' }) => (
  <p className={`mb-4 text-sm font-bold text-slate in-[.dark-panel]:text-ivory/70 ${className}`}>// {children}</p>
)

export const H2 = ({ children, className = '' }) => (
  <h2 className={`text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-balance md:text-5xl ${className}`}>{children}</h2>
)

export const Lead = ({ children, className = '' }) => (
  <p className={`text-base leading-6 text-slate in-[.dark-panel]:text-ivory/75 ${className}`}>{children}</p>
)

export function SectionHead({ eyebrow, title, intro, action, center }) {
  if (center)
    return (
      <div data-reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <H2>{title}</H2>
        {intro && <Lead className="mx-auto mt-5 max-w-xl">{intro}</Lead>}
        {action && <div className="mt-6">{action}</div>}
      </div>
    )
  return (
    <div data-reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <H2 className="max-w-xl">{title}</H2>
      </div>
      {(intro || action) && (
        <div className="max-w-md md:justify-self-end">
          {intro && <Lead>{intro}</Lead>}
          {action && <div className="mt-5">{action}</div>}
        </div>
      )}
    </div>
  )
}

const BTN = {
  light: ['bg-ivory text-charcoal', 'bg-charcoal text-ivory'],
  dark: ['bg-charcoal text-ivory', 'bg-ivory text-charcoal'],
}

// The site's pill button: label + round dot with arrow. `outline` is the secondary ghost pill.
export function Button({ to, href, variant = 'light', type = 'button', className = '', children, ...rest }) {
  const outline = variant === 'outline' || variant === 'outline-dark'
  const cls = outline
    ? `inline-flex items-center rounded-full border px-4 py-2 font-bold transition-colors ${
        variant === 'outline' ? 'border-ivory/70 text-ivory hover:bg-ivory/10' : 'border-charcoal/30 text-charcoal hover:bg-charcoal/5'
      } ${className}`
    : `group inline-flex items-center gap-3 rounded-full p-1 pl-4 font-bold whitespace-nowrap transition-transform hover:-translate-y-0.5 ${BTN[variant][0]} ${className}`
  const inner = outline ? (
    children
  ) : (
    <>
      <span>{children}</span>
      <span className={`grid size-8 place-items-center rounded-full ${BTN[variant][1]}`}>
        <Icon name="arrow" className="size-4 transition-transform group-hover:rotate-45" />
      </span>
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button type={type} className={cls} {...rest}>{inner}</button>
}

export const Card = ({ className = '', children }) => (
  <div data-reveal className={`rounded-2xl bg-white p-4 shadow-[0_2px_14px_rgba(28,28,30,0.06)] ${className}`}>{children}</div>
)

export const Tag = ({ children, className = '' }) => (
  <span className={`inline-block rounded-full bg-gold px-2.5 py-1 text-xs font-bold tracking-normal text-charcoal ${className}`}>{children}</span>
)

export function IconBox({ name, className = '' }) {
  return (
    <span className={`grid size-11 shrink-0 place-items-center rounded-lg bg-charcoal text-gold in-[.dark-panel]:bg-gold in-[.dark-panel]:text-charcoal ${className}`}>
      <Icon name={name} />
    </span>
  )
}

// Visibly marked placeholder for a fact we must not invent (used on the legal page).
export const Ph = ({ children }) => (
  <span
    title="Placeholder: replace before launch"
    className="rounded bg-gold/25 px-1.5 text-charcoal outline-1 outline-gold outline-dashed in-[.dark-panel]:text-ivory"
  >
    [{children}]
  </span>
)

// Small corner tag on stock photos standing in for real deal photos (see `sample` in src/data.js).
export const SampleTag = () => (
  <span className="pointer-events-none absolute right-3 bottom-3 z-10 rounded-full bg-charcoal/75 px-2.5 py-1 text-[11px] font-bold tracking-normal text-ivory backdrop-blur-sm">
    Sample image
  </span>
)

// Rounded photo that zooms slightly when its `group` parent is hovered (the old site's card behaviour).
export function Photo({ src, alt, sample, className = 'aspect-[4/3]', children }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-charcoal/10 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      {sample && <SampleTag />}
      {children}
    </div>
  )
}

// Before/after drag slider. A transparent native range input on top does the dragging, keyboard and a11y.
export function BeforeAfter({ before, after, alt, sample, className = 'aspect-[4/3]' }) {
  const [pos, setPos] = useState(50)
  return (
    <div className={`relative overflow-hidden rounded-xl bg-charcoal/10 select-none ${className}`}>
      <img src={after} alt={`${alt}, after`} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <img src={before} alt={`${alt}, before`} loading="lazy" className="absolute inset-0 size-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <span className="absolute top-3 left-3 rounded-full bg-charcoal/75 px-3 py-1 text-xs font-bold tracking-normal text-ivory backdrop-blur-sm">Before</span>
      <span className="absolute top-3 right-3 rounded-full bg-ivory/80 px-3 py-1 text-xs font-bold tracking-normal text-charcoal backdrop-blur-sm">After</span>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ivory" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-10 -translate-1/2 place-items-center rounded-full bg-ivory text-charcoal shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(+e.target.value)}
        aria-label={`${alt}: drag to compare before and after`}
        className="absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
      {sample && <SampleTag />}
    </div>
  )
}

// Counts "$25M+" up from 0 when scrolled into view. Non-numeric values render as-is.
export function CountUp({ value }) {
  const m = /^([^\d]*)([\d,.]+)(.*)$/.exec(value)
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!m) return
    const target = parseFloat(m[2].replace(/,/g, ''))
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(target)
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1600)
        setN(target * (1 - Math.pow(1 - k, 3)))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => (io.disconnect(), cancelAnimationFrame(raf))
  }, [value])
  if (!m) return value
  const decimals = (m[2].split('.')[1] || '').length
  const shown = m[2].includes(',') ? n.toLocaleString('en-US', { maximumFractionDigits: decimals }) : n.toFixed(decimals)
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">{m[1]}{shown}{m[3]}</span>
    </span>
  )
}

export function Stat({ value, label }) {
  return (
    <div data-reveal className="border-t border-charcoal/15 pt-5 in-[.dark-panel]:border-ivory/20">
      <p className="text-4xl font-bold tracking-[-0.03em] tabular-nums md:text-5xl"><CountUp value={value} /></p>
      <p className="mt-2 text-slate in-[.dark-panel]:text-ivory/70">{label}</p>
    </div>
  )
}

export function Feature({ icon, title, children }) {
  return (
    <Card className="flex h-full flex-col gap-10 p-6">
      <IconBox name={icon} />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <Lead className="mt-2">{children}</Lead>
      </div>
    </Card>
  )
}

// Numbered process steps (the "Simple, start to finish" pattern); steps fade in one after another.
export function Steps({ steps }) {
  return (
    <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map(([title, text], i) => (
        <li key={title} data-reveal className="relative">
          <span className="relative z-10 inline-block rounded-full bg-gold px-3.5 py-2 text-xs font-bold tracking-normal text-charcoal">
            STEP {String(i + 1).padStart(2, '0')}
          </span>
          {i < steps.length - 1 && <span aria-hidden="true" className="absolute top-4 left-24 hidden h-px w-[calc(100%-4rem)] bg-ivory/20 lg:block" />}
          <h3 className="mt-8 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-ivory/75">{text}</p>
        </li>
      ))}
    </ol>
  )
}

export function CheckList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-charcoal text-ivory in-[.dark-panel]:bg-gold in-[.dark-panel]:text-charcoal">
            <Icon name="check" className="size-3" />
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

// FAQ accordion on native <details>: keyboard + screen reader support for free.
export function Faq({ items }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map(([q, a]) => (
        <details key={q} data-reveal className="group rounded-xl bg-white shadow-[0_2px_14px_rgba(28,28,30,0.06)] open:bg-charcoal open:text-ivory">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold [&::-webkit-details-marker]:hidden">
            {q}
            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-charcoal text-ivory group-open:bg-gold group-open:text-charcoal">
              <Icon name="plus" className="size-4 transition-transform group-open:rotate-45" />
            </span>
          </summary>
          <div className="px-5 pb-5 text-ivory/80">{a}</div>
        </details>
      ))}
    </div>
  )
}

import { PageHero } from '../components/Layout'
import { Button, Card, CheckList, Eyebrow, H2, IconBox, Lead, Photo, Section, SectionHead } from '../components/ui'

const BLOCKS = [
  {
    icon: 'home',
    title: 'Buying',
    text: 'We buy residential property in and around Jacksonville. Selling a property that needs work, or need a fast, certain close? We would like to hear about it.',
    points: ['Off-market and listed properties', 'Properties that need renovation', 'Clear offers and a straightforward close'],
    cta: ['/contact', 'Tell Us About a Property'],
    photo: '/images/photos/buying.jpg',
  },
  {
    icon: 'tag',
    title: 'Selling',
    text: 'We bring renovated and stabilized properties to market. Investors on our buyers list hear about new deals first.',
    points: ['Renovated homes for owner-occupants', 'Investment properties for buy-and-hold investors', 'Early access for buyers list members'],
    cta: ['/buyers-list', 'Join the Buyers List'],
    photo: '/images/photos/selling.jpg',
  },
  {
    icon: 'users',
    title: 'Partnering',
    text: 'Some deals are better together. We partner with investors, lenders and agents where shared capital and expertise create more value for everyone.',
    points: ['Co-investment with private investors', 'Deal funding with private and institutional lenders', 'Deal flow with agents and wholesalers'],
    cta: ['/partner-with-us', 'Partner With GBV'],
    photo: '/images/hero-handshake.jpg',
  },
]

export default function WhatWeDo() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Buying, selling and partnering."
        intro="Three ways we create opportunity in real estate, all built on the same disciplined approach."
        image="/images/hero-what-we-do.jpg"
      >
        <Button to="/investment-approach">Our Investment Approach</Button>
      </PageHero>

      <Section>
        <div className="space-y-6">
          {BLOCKS.map((b, i) => (
            <div key={b.title} className="group">
              <Card className="grid gap-8 p-4 md:grid-cols-2 md:items-center md:p-5">
                <Photo src={b.photo} alt={b.title} className={`aspect-[4/3] ${i % 2 ? 'md:order-2' : ''}`} />
                <div className="p-2 md:p-6">
                  <div className="flex items-center gap-4">
                    <IconBox name={b.icon} />
                    <Eyebrow className="mb-0">{String(i + 1).padStart(2, '0')}</Eyebrow>
                  </div>
                  <H2 className="mt-6">{b.title}</H2>
                  <Lead className="mt-4 max-w-md">{b.text}</Lead>
                  <CheckList items={b.points} className="mt-6" />
                  <div className="mt-8"><Button to={b.cta[0]} variant="dark">{b.cta[1]}</Button></div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHead eyebrow="What We Look For" title="Our buy box." intro="The criteria we use to decide whether a deal is worth a closer look." />
        {/* SAMPLE criteria: replace with GBV's real buy box. */}
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Markets', 'Jacksonville & Northeast Florida'],
            ['Property types', 'Single-family & small multifamily'],
            ['Price range', '$100k – $750k'],
            ['Condition', 'Light to heavy rehab'],
          ].map(([k, v]) => (
            <div key={k} data-reveal className="rounded-2xl border border-ivory/15 p-6 transition-colors hover:border-gold/60">
              <dt className="text-sm font-bold text-ivory/70">{k}</dt>
              <dd className="mt-3 text-xl font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}

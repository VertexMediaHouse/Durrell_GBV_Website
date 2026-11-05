import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'
import { Button, Card, Icon, IconBox, Lead, Section, SectionHead, Stat, Steps } from '../components/ui'
import { STATS } from '../site'
import { DEALS } from '../data'
import { DealCard } from './TrackRecord'

export const SERVICES = [
  ['home', 'Buying', 'We acquire residential properties in and around Jacksonville, from off-market leads to listed homes, and close with certainty.'],
  ['tag', 'Selling', 'We bring renovated and stabilized properties to market, and offer investors on our buyers list first look at new deals.'],
  ['users', 'Partnering', 'We work alongside investors, lenders and agents on deals where shared capital and expertise create more value.'],
]

export const APPROACH_STEPS = [
  ['Source', 'Find opportunities through local relationships, agents and direct outreach.'],
  ['Underwrite', 'Stress-test every number before we commit: price, scope, timeline and exit.'],
  ['Execute', 'Manage the scope, budget and schedule with the same discipline we underwrote.'],
  ['Exit', 'Sell, refinance or hold, whichever creates the most long-term value.'],
]

export default function Home() {
  return (
    <>
      <PageHero
        tall
        title="Building Wealth. Creating Opportunity. Leaving a Legacy."
        intro="GBV Legacy Group is a real estate investment company based in Jacksonville, FL. We buy, sell and partner on deals built to create lasting value."
        image="/images/hero-home.jpg"
        bottom={
          <div className="flex flex-wrap gap-3">
            <Button to="/what-we-do">Explore Investment Opportunities</Button>
            <Button to="/partner-with-us" variant="outline">Partner With GBV</Button>
          </div>
        }
      />

      <Section>
        <SectionHead eyebrow="By the Numbers" title="Results we can stand behind." intro="Figures are updated as deals close." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={STATS.deals} label="Deals completed" />
          <Stat value={STATS.volume} label="Total transaction volume" />
          <Stat value={STATS.years} label="Years of experience" />
          <Stat value={STATS.partners} label="Investor and lending partners" />
        </div>
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="What We Do"
          title="Buying, selling and partnering."
          intro="Three ways we create opportunity in real estate, all built on the same disciplined approach."
          action={<Button to="/what-we-do">What We Do</Button>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map(([icon, title, text]) => (
            <div key={title} data-reveal className="flex flex-col gap-10 rounded-2xl border border-ivory/15 p-6 transition-colors hover:border-gold/60">
              <IconBox name={icon} />
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <Lead className="mt-2">{text}</Lead>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Track Record"
          title="Recent deals."
          intro="Each deal lists GBV's actual role, so you know exactly how we were involved."
          action={<Button to="/track-record" variant="dark">View Track Record</Button>}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEALS.slice(0, 3).map((d) => <DealCard key={d.name} deal={d} />)}
        </div>
      </Section>

      <Section dark>
        <SectionHead
          eyebrow="Our Investment Approach"
          title="Disciplined from first look to final exit."
          action={<Button to="/investment-approach">Our Approach</Button>}
        />
        <Steps steps={APPROACH_STEPS} />
      </Section>

      <Section>
        <SectionHead eyebrow="Who We Work With" title="Partners who share the long view." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['chart', 'Investors', 'Get first look at vetted deals through our buyers list, or co-invest alongside us.', '/buyers-list', 'Join the Buyers List'],
            ['bank', 'Lenders', 'Fund deals with a clear plan, a defined scope and an experienced operator.', '/partner-with-us', 'Lend With GBV'],
            ['briefcase', 'Agents', 'Bring us listings and off-market opportunities. We move quickly and close.', '/partner-with-us', 'Work With GBV'],
          ].map(([icon, title, text, to, cta]) => (
            <Link key={title} to={to} className="group block h-full transition-transform duration-300 hover:-translate-y-1">
              <Card className="flex h-full flex-col gap-10 p-6">
                <IconBox name={icon} />
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <Lead className="mt-2">{text}</Lead>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold">
                    {cta}
                    <span className="grid size-7 place-items-center rounded-full bg-charcoal text-ivory">
                      <Icon name="arrow" className="size-3.5 transition-transform group-hover:rotate-45" />
                    </span>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}

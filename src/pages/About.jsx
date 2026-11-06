import { PageHero } from '../components/Layout'
import { Button, Card, Eyebrow, Feature, H2, Lead, Photo, Section, SectionHead, Stat } from '../components/ui'
import { STATS } from '../site'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Experience you can build on."
        intro="GBV Legacy Group is a real estate investment company based in Jacksonville, FL, focused on deals that build wealth for the long term."
        image="/images/hero-about.jpg"
      >
        <Button to="/track-record">See Our Track Record</Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>Our Story</Eyebrow>
            <H2>How it started.</H2>
            {/* SAMPLE COPY: replace with the founder's real story before launch. */}
            <div className="mt-8 space-y-5 text-slate">
              <p>GBV Legacy Group was founded on a simple idea: real estate, done with discipline and integrity, can build wealth that lasts for generations.</p>
              <p>We started in Jacksonville, where we live and invest. One property at a time, we built a business on buying right, managing every project closely and treating partners the way we'd want to be treated.</p>
              <p>Today we buy, sell and partner on residential deals across Northeast Florida. The name says what matters most to us: <strong className="text-charcoal">building a legacy</strong>, not just closing deals.</p>
            </div>
          </div>
          <Card className="grid gap-6 p-4 sm:grid-cols-[minmax(0,240px)_1fr]">
            <Photo src="/images/photos/founder.jpg" alt="Founder portrait" sample className="aspect-[3/4]" />
            <div className="flex flex-col p-2">
              <h3 className="text-xl font-bold">Founder & Principal</h3>
              <p className="mt-1 text-slate">GBV Legacy Group</p>
              {/* SAMPLE COPY: replace with the founder's name and bio. */}
              <Lead className="mt-4">"Every deal we do should leave the property, the neighborhood and our partners better off than we found them."</Lead>
              <div className="mt-auto grid grid-cols-2 gap-4 pt-6">
                <Stat value={STATS.years} label="Years in real estate" />
                <Stat value={STATS.deals} label="Deals completed" />
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section dark>
        <SectionHead center eyebrow="Experience" title="Where we've worked." intro="Jacksonville is our home base." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="Jacksonville" label="Primary market" />
          <Stat value="NE Florida" label="Wider market" />
          <Stat value="Residential" label="Focus" />
          <Stat value={STATS.volume} label="Total transaction volume" />
        </div>
        <div data-reveal className="mt-12">
          <Photo src="/images/photos/aerial.jpg" alt="Aerial view of a riverside neighborhood" className="aspect-[16/9] md:aspect-[21/9]" />
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="What We Stand For"
          title="The principles behind every deal."
          intro="How we work matters as much as what we buy."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon="eye" title="Transparency">Clear numbers and honest expectations with every partner, on every deal.</Feature>
          <Feature icon="shield" title="Discipline">We underwrite conservatively and walk away from deals that don't hold up.</Feature>
          <Feature icon="chart" title="Long-term thinking">We make decisions for lasting value, not quick wins.</Feature>
          <Feature icon="users" title="Community">We invest where we live and care about the neighborhoods we work in.</Feature>
        </div>
      </Section>
    </>
  )
}

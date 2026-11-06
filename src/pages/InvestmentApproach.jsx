import { PageHero } from '../components/Layout'
import { Button, Card, CheckList, Eyebrow, Faq, Feature, H2, Lead, Photo, Section, SectionHead, Steps } from '../components/ui'
import { APPROACH_STEPS } from './Home'

export default function InvestmentApproach() {
  return (
    <>
      <PageHero
        eyebrow="Our Investment Approach"
        title="Disciplined from first look to final exit."
        intro="How we find, evaluate and manage every deal, and how we protect the capital of the people we work with."
        image="/images/hero-interior.jpg"
      >
        <Button to="/partner-with-us">Partner With GBV</Button>
      </PageHero>

      <Section>
        <SectionHead eyebrow="Principles" title="What guides every decision." intro="Four rules we hold ourselves to on every deal." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon="search" title="Buy right">The return is made at purchase. We only pay what the numbers support.</Feature>
          <Feature icon="shield" title="Protect the downside">We plan for delays and overruns before they happen, not after.</Feature>
          <Feature icon="eye" title="Stay transparent">Partners see the same numbers we do, from underwriting to exit.</Feature>
          <Feature icon="chart" title="Think long term">We choose the exit that builds lasting value, not just the fastest one.</Feature>
        </div>
      </Section>

      <Section dark>
        <SectionHead eyebrow="Our Process" title="Four steps, every deal." intro="The same process whether we're buying, selling or partnering." />
        <Steps steps={APPROACH_STEPS} />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div data-reveal>
            <Eyebrow>Underwriting</Eyebrow>
            <H2>What we check before we commit.</H2>
            <Lead className="mt-5 max-w-md">Every deal is reviewed against the same checklist. If it doesn't pass, we don't buy it.</Lead>
            <Photo src="/images/photos/approach.jpg" alt="Modern home at dusk" className="mt-8 aspect-[16/10]" />
          </div>
          <div className="flex flex-col gap-5">
          <Card className="p-6 md:p-8">
            <CheckList
              items={[
                'Purchase price against recent comparable sales',
                'Full scope of work, budget and contingency',
                'Realistic timeline, including permits',
                'At least one fallback exit if the first plan changes',
                'Financing terms and carrying costs',
                'Neighborhood and market conditions',
              ]}
            />
          </Card>
          <div data-reveal className="dark-panel flex flex-1 flex-col justify-between gap-8 rounded-2xl bg-charcoal p-6 text-ivory md:p-8">
            <div>
              <Eyebrow>Our Rule</Eyebrow>
              <p className="text-2xl leading-tight font-bold md:text-3xl">One failed check is enough to walk away.</p>
              <Lead className="mt-4 max-w-md">We pass on far more deals than we buy. That discipline is what protects our partners' capital.</Lead>
            </div>
            <div><Button to="/partner-with-us">Partner With GBV</Button></div>
          </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <SectionHead center eyebrow="FAQ" title="Questions, answered." />
        <Faq
          items={[
            ['What kinds of deals does GBV pursue?', 'Residential real estate in and around Jacksonville, FL, where we can buy at the right price and add value. See What We Do for our current buy box.'],
            ['How do I invest alongside GBV?', 'Start with the buyers list to hear about new deals, or reach out through Partner With Us to discuss co-investing.'],
            ['Do you work with lenders?', 'Yes. We work with private and institutional lenders on individual deals. Reach out through Partner With Us.'],
            ['Where can I see past results?', 'Our Track Record lists completed deals with our role in each, and the Case Studies break down selected deals in detail.'],
          ]}
        />
      </Section>
    </>
  )
}

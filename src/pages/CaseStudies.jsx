import { PageHero } from '../components/Layout'
import { BeforeAfter, Button, Card, Eyebrow, IconBox, Section, SectionHead } from '../components/ui'
import { CASE_STUDIES } from '../data'

const PARTS = [
  ['purchase', 'The Purchase', 'doc'],
  ['scope', 'The Scope', 'wrench'],
  ['outcome', 'The Outcome', 'target'],
]

function CaseStudy({ cs, n }) {
  return (
    <Card className="p-4 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_7fr]">
        <BeforeAfter before={cs.before} after={cs.after} alt={cs.name} sample={cs.sample} className="aspect-[4/3] lg:aspect-auto lg:min-h-full" />
        <div className="flex flex-col">
          <Eyebrow className="mb-2">Case Study {String(n).padStart(2, '0')}</Eyebrow>
          <h3 className="text-2xl font-bold md:text-3xl">{cs.name}</h3>
          <p className="mt-2 text-slate">{cs.market} · GBV role: {cs.role}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PARTS.map(([key, title, icon]) => (
              <div key={key} className="rounded-xl border border-charcoal/10 p-4 transition-colors hover:border-charcoal/30">
                <div className="mb-4 flex items-center gap-3">
                  <IconBox name={icon} className="size-9" />
                  <h4 className="font-bold">{title}</h4>
                </div>
                <dl className="space-y-3 text-sm">
                  {cs[key].map(([label, v]) => (
                    <div key={label}>
                      <dt className="text-slate">{label}</dt>
                      <dd className="mt-0.5 font-bold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Our best deals, broken down."
        intro="How each deal came together: what we bought, what we did, and how it turned out."
        image="/images/hero-living.jpg"
      >
        <Button to="/track-record">All Completed Deals</Button>
      </PageHero>

      <Section>
        <SectionHead eyebrow="Deal Breakdowns" title="Purchase. Scope. Outcome." intro="Drag each slider to see the property before and after. Every deal is shown the same way." />
        <div className="space-y-6">
          {CASE_STUDIES.map((cs, i) => <CaseStudy key={cs.name} cs={cs} n={i + 1} />)}
        </div>
      </Section>
    </>
  )
}

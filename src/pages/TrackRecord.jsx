import { PageHero } from '../components/Layout'
import { Button, Card, Lead, Photo, Section, SectionHead, Tag } from '../components/ui'
import { DEALS } from '../data'
import { STATS } from '../site'

export function DealCard({ deal }) {
  return (
    <div className="group h-full">
      <Card className="flex h-full flex-col transition-shadow duration-300 group-hover:shadow-[0_12px_32px_rgba(28,28,30,0.12)]">
        <Photo src={deal.photo} alt={deal.name} sample={deal.sample}>
          <span className="absolute top-3 left-3 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-bold tracking-normal text-ivory backdrop-blur-sm">
            GBV role: {deal.role}
          </span>
        </Photo>
        <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold">{deal.name}</h3>
            <Tag className="shrink-0">{deal.type}</Tag>
          </div>
          <Lead className="mt-2">{deal.summary}</Lead>
          <p className="mt-auto pt-4 text-sm text-slate">{deal.market} · {deal.year}</p>
        </div>
      </Card>
    </div>
  )
}

export default function TrackRecord() {
  return (
    <>
      <PageHero
        eyebrow="Track Record"
        title="Completed deals. Clear roles."
        intro="Every deal below states GBV's actual role: buyer, seller, lender or partner."
        image="/images/hero-interior.jpg"
      >
        <Button to="/case-studies">See the Case Studies</Button>
      </PageHero>

      <Section>
        <SectionHead
          eyebrow="Completed Deals"
          title="What we've closed."
          intro={`${STATS.deals} deals completed to date. Want a deeper look? The case studies break down the purchase, scope and outcome.`}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEALS.map((d) => <DealCard key={d.name} deal={d} />)}
        </div>
      </Section>
    </>
  )
}

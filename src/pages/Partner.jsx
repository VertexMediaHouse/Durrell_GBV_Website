import { PageHero } from '../components/Layout'
import Form from '../components/Form'
import { Card, CheckList, Eyebrow, H2, IconBox, Lead, Photo, Section, SectionHead } from '../components/ui'

const AUDIENCES = [
  ['chart', 'Investors', 'Co-invest on vetted deals with a clear plan and transparent reporting.', ['Early access to new deals', 'Underwriting shared up front', 'Regular updates through to exit']],
  ['bank', 'Lenders', 'Fund deals run by an operator who underwrites conservatively and communicates clearly.', ['Defined scope, budget and timeline', 'Clear exit plan on every loan', 'Updates at each milestone']],
  ['briefcase', 'Agents', 'Bring us listings and off-market opportunities. We review quickly and close.', ['Fast, clear answers on deals', 'Repeat business when deals fit', 'Listing opportunities when we sell']],
]

const FIELDS = [
  { name: 'name', label: 'Full name', required: true, half: true, autoComplete: 'name' },
  { name: 'company', label: 'Company', half: true, autoComplete: 'organization' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, autoComplete: 'tel' },
  { name: 'partnerType', label: 'I am a', type: 'chips', required: true, options: ['Investor', 'Lender', 'Agent', 'Other'] },
  { name: 'message', label: 'How would you like to work together?', type: 'textarea', required: true },
]

export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Better deals, built together."
        intro="We partner with investors, lenders and agents who share our long-term view."
        image="/images/hero-handshake.jpg"
      />

      <Section>
        <SectionHead eyebrow="Who We Partner With" title="Investors, lenders and agents." />
        <div className="grid gap-5 md:grid-cols-3">
          {AUDIENCES.map(([icon, title, text, points]) => (
            <Card key={title} className="flex flex-col gap-8 p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(28,28,30,0.12)]">
              <IconBox name={icon} />
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <Lead className="mt-2">{text}</Lead>
              </div>
              <CheckList items={points} className="mt-auto border-t border-charcoal/10 pt-6" />
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0 md:pt-0" id="form">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div data-reveal>
            <Eyebrow>Start a Conversation</Eyebrow>
            <H2>Tell us about yourself.</H2>
            <Lead className="mt-5 max-w-md">Share a little about who you are and what you're looking for. We'll follow up to talk through fit.</Lead>
            <Photo src="/images/handshake-home.jpg" alt="Handshake in front of a home" className="mt-8 aspect-[2/1]" />
          </div>
          <Card className="p-6 md:p-8">
            <Form
              name="partner"
              fields={FIELDS}
              submitLabel="Send Partner Inquiry"
              successText="Thanks for reaching out. We'll review your details and be in touch."
            />
          </Card>
        </div>
      </Section>
    </>
  )
}

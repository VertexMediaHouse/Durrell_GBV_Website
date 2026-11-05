import { PageHero } from '../components/Layout'
import Form from '../components/Form'
import { Card, CheckList, Eyebrow, H2, Lead, Photo, Section } from '../components/ui'

const FIELDS = [
  { name: 'name', label: 'Full name', required: true, half: true, autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, half: true, autoComplete: 'tel' },
  { name: 'company', label: 'Company / LLC', half: true, autoComplete: 'organization' },
  { name: 'markets', label: 'Markets of interest', type: 'chips', required: true, options: ['Jacksonville, FL', 'Other Florida markets', 'Outside Florida'] },
  { name: 'propertyTypes', label: 'Property types', type: 'chips', required: true, options: ['Single-family', 'Multifamily (2–4)', 'Multifamily (5+)', 'Land', 'Commercial'] },
  { name: 'strategy', label: 'Strategy', type: 'chips', options: ['Buy and hold', 'Fix and flip', 'Short-term rental', 'Owner-occupant'] },
  { name: 'priceRange', label: 'Price range', type: 'select', required: true, half: true, options: ['Under $150k', '$150k – $300k', '$300k – $500k', '$500k – $1M', '$1M+'] },
  { name: 'funding', label: 'How will you fund purchases?', type: 'select', half: true, options: ['Cash', 'Private / hard money', 'Conventional loan', 'Other'] },
  { name: 'notes', label: 'Anything else we should know?', type: 'textarea' },
  { name: 'consent', label: 'I agree to receive emails and calls from GBV Legacy Group about investment opportunities. I can unsubscribe at any time.', type: 'checkbox', required: true },
]

export default function BuyersList() {
  return (
    <>
      <PageHero
        eyebrow="Buyers List"
        title="Hear about new deals first."
        intro="Join the GBV Legacy Group buyers list. Tell us what you buy, and we'll send you deals that match."
        image="/images/hero-handshake.jpg"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div data-reveal>
            <Eyebrow>Why Join</Eyebrow>
            <H2>Deals that fit what you buy.</H2>
            <Lead className="mt-5 max-w-md">We share new opportunities with buyers list members before anywhere else.</Lead>
            <CheckList
              className="mt-8"
              items={['Early access to new deals', 'Only deals that match your criteria', 'Free to join, no obligation to buy', 'Unsubscribe at any time']}
            />
            <Photo src="/images/photos/deal-4.jpg" alt="Renovated two-story home" className="mt-10 aspect-[4/3]" />
          </div>
          <Card className="p-6 md:p-8">
            <Form
              name="buyers-list"
              fields={FIELDS}
              submitLabel="Join the Buyers List"
              successTitle="You're on the list."
              successText="We'll be in touch when a deal matches your criteria."
            />
          </Card>
        </div>
      </Section>
    </>
  )
}

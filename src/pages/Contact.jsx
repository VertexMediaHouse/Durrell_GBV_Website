import { PageHero } from '../components/Layout'
import Form from '../components/Form'
import { Card, Eyebrow, H2, IconBox, Lead, Section } from '../components/ui'
import { CONTACT } from '../site'

const FIELDS = [
  { name: 'topic', label: 'What is this about?', type: 'chips', required: true, options: ['Selling a property', 'Investing', 'Lending', 'Agent referral', 'Other'] },
  { name: 'name', label: 'Full name', required: true, half: true, autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, autoComplete: 'tel' },
  { name: 'address', label: 'Property address (if selling)', half: true, autoComplete: 'street-address' },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
]

export default function Contact() {
  const rows = [
    ['phone', 'Call us', CONTACT.phone, `tel:${CONTACT.phone.replace(/[^\d+]/g, '')}`],
    ['mail', 'Email', CONTACT.email, `mailto:${CONTACT.email}`],
    ['pin', 'Based in', CONTACT.location],
    ['clock', 'Hours', CONTACT.hours],
  ]
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next deal."
        intro="Selling a property, looking to invest, or interested in partnering? Send us a message."
        image="/images/hero-contact.jpg"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col gap-10">
            <div data-reveal>
              <Eyebrow>Get in Touch</Eyebrow>
              <H2>Send us a message.</H2>
              <Lead className="mt-5 max-w-md">Fields marked * are required.</Lead>
            </div>
            <Card className="p-6">
              <h3 className="mb-2 text-2xl font-bold">Prefer to talk?</h3>
              <ul className="divide-y divide-charcoal/10">
                {rows.map(([icon, label, item, href]) => (
                  <li key={label} className="flex items-center gap-4 py-4">
                    <IconBox name={icon} className="size-10" />
                    <div>
                      <p className="text-sm text-slate">{label}</p>
                      {href ? <a href={href} className="font-bold hover:underline">{item}</a> : <p className="font-bold">{item}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Card className="p-6 md:p-8">
            <Form name="contact" fields={FIELDS} submitLabel="Send Message" successText="Thanks for your message. We'll get back to you soon." />
          </Card>
        </div>
      </Section>
    </>
  )
}

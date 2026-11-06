import { PageHero } from '../components/Layout'
import { Container, Icon, Ph } from '../components/ui'
import { CONTACT } from '../site'

const Email = () => <a href={`mailto:${CONTACT.email}`} className="font-bold text-charcoal underline">{CONTACT.email}</a>

// Standard template text. MUST be reviewed by a licensed attorney before launch (see notice on page).
const PRIVACY = [
  ['Information we collect', <>When you fill out a form on this site (contact, buyers list or partner inquiry), we collect the details you provide, such as your name, email, phone number, company, investment preferences and message. Like most websites, we and our hosting provider may also collect basic technical data such as your IP address, browser type and pages visited.</>],
  ['How we use your information', <>We use your information to respond to your inquiries, send you investment opportunities you asked to receive, discuss potential partnerships, improve this website, and comply with legal obligations.</>],
  ['How we share your information', <>We do not sell your personal information. We may share it with service providers who help us run this website and our business (for example, form processing and email providers), with professional advisers, or when required by law.</>],
  ['Your choices', <>You can unsubscribe from our emails at any time using the link in the email or by contacting us. You can ask us to access, correct or delete the personal information we hold about you by emailing <Email />.</>],
  ['Data security and retention', <>We take reasonable measures to protect your information. No method of transmission over the internet is completely secure. We keep personal information only as long as needed for the purposes described in this policy or as required by law.</>],
  ['Cookies and analytics', <><Ph>Describe any cookies, analytics or tracking tools used on the site, or state that none are used.</Ph></>],
  ["Children's privacy", <>This website is not intended for children under 13, and we do not knowingly collect their personal information.</>],
  ['Changes to this policy', <>We may update this policy from time to time. The effective date at the top of this page shows when it was last changed.</>],
]

const TERMS = [
  ['Acceptance of terms', <>By using this website, you agree to these terms. If you do not agree, please do not use the site.</>],
  ['No offer or investment advice', <>Content on this website is for general information only. Nothing on this site is an offer to sell, or a solicitation of an offer to buy, any security or investment, and nothing here is financial, legal or tax advice. Any investment opportunity is offered only through definitive documents, and only where permitted by law.</>],
  ['No guarantee of results', <>Past deals and results described on this site do not guarantee future results. Real estate investments involve risk, including the possible loss of capital.</>],
  ['Accuracy of information', <>We try to keep information on this site accurate and current, but we make no warranties about its completeness or accuracy, and it may change without notice.</>],
  ['Intellectual property', <>The content, branding and design of this website belong to GBV Legacy Group or its licensors and may not be copied or reused without written permission.</>],
  ['Third-party links', <>This site may link to third-party websites. We are not responsible for their content or practices.</>],
  ['Limitation of liability', <>To the fullest extent permitted by law, GBV Legacy Group is not liable for any damages arising from your use of this website.</>],
  ['Governing law', <>These terms are governed by the laws of the State of Florida, without regard to its conflict of law rules.</>],
  ['Contact', <>Questions about these terms or our privacy policy? Email <Email />.</>],
]

function Block({ id, title, items }) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] md:text-5xl">{title}</h2>
      <p className="mt-4 text-slate">Effective date: <Ph>Month DD, YYYY</Ph> · Operated by <Ph>legal entity name, state</Ph></p>
      <div className="mt-10 space-y-10">
        {items.map(([h, body], i) => (
          <div key={h}>
            <h3 className="text-2xl font-bold">{i + 1}. {h}</h3>
            <p className="mt-3 leading-7 text-slate">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Legal() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy & Terms"
        title="Your trust, our commitment."
        intro="How we handle your information, and the terms for using this website."
        image="/images/hero-legal.jpg"
      >
        <a href="#privacy" className="rounded-full border border-ivory/70 px-4 py-2 font-bold hover:bg-ivory/10">Privacy Policy</a>
        <a href="#terms" className="rounded-full border border-ivory/70 px-4 py-2 font-bold hover:bg-ivory/10">Terms of Use</a>
      </PageHero>

      <Container className="max-w-[960px] py-20 md:py-[100px]">
        <div role="note" className="mb-16 flex gap-4 rounded-2xl border-2 border-dashed border-gold bg-gold/15 p-6">
          <Icon name="alert" className="mt-0.5 size-6 shrink-0" />
          <p>
            <strong>Legal review required.</strong> This is a standard template, not legal advice. Have a licensed attorney review and adapt it
            for GBV Legacy Group, including securities and real estate disclosures, before this site goes live.
          </p>
        </div>
        <div className="space-y-24">
          <Block id="privacy" title="Privacy Policy" items={PRIVACY} />
          <Block id="terms" title="Terms of Use" items={TERMS} />
        </div>
      </Container>
    </>
  )
}

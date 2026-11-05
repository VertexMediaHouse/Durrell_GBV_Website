import { PageHero } from '../components/Layout'
import { Button } from '../components/ui'

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page not found." intro="The page you're looking for doesn't exist or has moved." image="/images/hero-interior.jpg">
      <Button to="/">Back to Home</Button>
    </PageHero>
  )
}

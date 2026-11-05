// Single source of truth for pages, nav and contact details.
// Imported by the app AND vite.config.js (build writes per-route HTML with these titles/descriptions).

export const BRAND = 'GBV Legacy Group'

// SAMPLE values (except location): replace with real details before launch.
// 555-01xx numbers are reserved for fiction, so the sample phone can't reach a real person.
export const CONTACT = {
  phone: '(904) 555-0100',
  email: 'info@gbvlegacygroup.com',
  location: 'Jacksonville, FL',
  hours: 'Mon – Fri, 9am – 5pm',
}

// SAMPLE figures: replace with real numbers before launch. Format "prefix + number + suffix" animates as a count-up.
export const STATS = {
  deals: '120+',
  volume: '$25M+',
  years: '15+',
  partners: '40+',
}

export const PAGES = [
  {
    path: '/',
    nav: 'Home',
    title: 'GBV Legacy Group | Building Wealth. Creating Opportunity. Leaving a Legacy.',
    description:
      'GBV Legacy Group is a Jacksonville-based real estate investment company buying, selling and partnering on residential deals.',
  },
  {
    path: '/about',
    nav: 'About',
    title: 'About | GBV Legacy Group',
    description: 'The story, experience and principles behind GBV Legacy Group, a Jacksonville real estate investment company.',
  },
  {
    path: '/track-record',
    nav: 'Track Record',
    title: 'Track Record | GBV Legacy Group',
    description: "Completed GBV Legacy Group deals, with GBV's role in each one: buyer, seller, lender or partner.",
  },
  {
    path: '/case-studies',
    nav: 'Case Studies',
    title: 'Case Studies | GBV Legacy Group',
    description: 'Deal breakdowns from GBV Legacy Group: the purchase, the scope of work and the outcome.',
  },
  {
    path: '/what-we-do',
    nav: 'What We Do',
    title: 'What We Do | GBV Legacy Group',
    description: 'GBV Legacy Group buys, sells and partners on real estate deals in Jacksonville and beyond.',
  },
  {
    path: '/investment-approach',
    nav: 'Our Approach',
    title: 'Our Investment Approach | GBV Legacy Group',
    description: 'How GBV Legacy Group sources, underwrites, executes and exits real estate investments.',
  },
  {
    path: '/partner-with-us',
    nav: 'Partner',
    title: 'Partner With Us | GBV Legacy Group',
    description: 'Investors, lenders and agents: partner with GBV Legacy Group on Jacksonville real estate deals.',
  },
  {
    path: '/buyers-list',
    nav: 'Buyers List',
    title: 'Join the Buyers List | GBV Legacy Group',
    description: 'Join the GBV Legacy Group buyers list to hear about new investment deals that match your criteria.',
  },
  {
    path: '/contact',
    nav: 'Contact',
    title: 'Contact | GBV Legacy Group',
    description: 'Contact GBV Legacy Group by form, phone or email.',
  },
  {
    path: '/privacy-policy',
    nav: 'Privacy & Terms',
    title: 'Privacy Policy & Terms | GBV Legacy Group',
    description: 'Privacy policy and terms of use for the GBV Legacy Group website.',
  },
]

export const page = (path) => PAGES.find((p) => p.path === path)

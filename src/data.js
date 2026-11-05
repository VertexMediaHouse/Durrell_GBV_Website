// SAMPLE deal data and stock photos: replace with real, verified deals before launch.
// While `sample: true`, photos show a small "Sample image" tag. Set it to false (or delete it) for real deals.
// `role` must be GBV's actual role on that deal: 'Buyer' | 'Seller' | 'Lender' | 'Partner'.

export const DEALS = [
  { name: 'Riverside Craftsman', market: 'Riverside, Jacksonville', role: 'Buyer', type: 'Single-family', year: 2025, summary: 'Acquired off-market and renovated for resale.', photo: '/images/photos/deal-1.jpg', sample: true },
  { name: 'San Marco Two-Story', market: 'San Marco, Jacksonville', role: 'Seller', type: 'Single-family', year: 2025, summary: 'Renovated and sold to an owner-occupant.', photo: '/images/photos/deal-2.jpg', sample: true },
  { name: 'Mandarin Family Home', market: 'Mandarin, Jacksonville', role: 'Partner', type: 'Single-family', year: 2024, summary: 'Joint venture with a private investor.', photo: '/images/photos/deal-3.jpg', sample: true },
  { name: 'Arlington Duplex', market: 'Arlington, Jacksonville', role: 'Lender', type: 'Multifamily (2)', year: 2024, summary: 'Short-term loan funding a value-add renovation.', photo: '/images/photos/deal-4.jpg', sample: true },
  { name: 'Southside Ranch', market: 'Southside, Jacksonville', role: 'Buyer', type: 'Single-family', year: 2024, summary: 'Purchased as a long-term rental.', photo: '/images/photos/deal-5.jpg', sample: true },
  { name: 'Orange Park Modern', market: 'Orange Park, FL', role: 'Partner', type: 'Single-family', year: 2023, summary: 'Co-invested with a local operator on a full rehab.', photo: '/images/photos/deal-6.jpg', sample: true },
]

export const CASE_STUDIES = [
  {
    name: 'Riverside Bath & Interior Remodel',
    market: 'Riverside, Jacksonville',
    role: 'Buyer',
    before: '/images/photos/cs1-before.jpg',
    after: '/images/photos/cs1-after.jpg',
    sample: true,
    purchase: [['Purchase price', '$185,000'], ['Acquired', 'March 2024'], ['Property type', 'Single-family'], ['How it was sourced', 'Off-market, direct to seller']],
    scope: [['Scope of work', 'Full interior renovation'], ['Budget', '$62,000'], ['Timeline', '14 weeks']],
    outcome: [['Exit / result', 'Sold to owner-occupant'], ['Sale price', '$329,000'], ['Return', '22% ROI']],
  },
  {
    name: 'Westside Exterior Restoration',
    market: 'Westside, Jacksonville',
    role: 'Partner',
    before: '/images/photos/cs2-before.jpg',
    after: '/images/photos/cs2-after.jpg',
    sample: true,
    purchase: [['Purchase price', '$142,000'], ['Acquired', 'June 2024'], ['Property type', 'Single-family'], ['How it was sourced', 'Agent referral']],
    scope: [['Scope of work', 'Roof, siding, windows, landscaping'], ['Budget', '$48,000'], ['Timeline', '10 weeks']],
    outcome: [['Exit / result', 'Refinanced and held as rental'], ['Appraised value', '$265,000'], ['Return', '$1,950 / month rent']],
  },
  {
    name: 'Mandarin Kitchen Value-Add',
    market: 'Mandarin, Jacksonville',
    role: 'Seller',
    before: '/images/photos/cs3-before.jpg',
    after: '/images/photos/cs3-after.jpg',
    sample: true,
    purchase: [['Purchase price', '$210,000'], ['Acquired', 'January 2025'], ['Property type', 'Single-family'], ['How it was sourced', 'Listed (MLS)']],
    scope: [['Scope of work', 'Kitchen, flooring, paint'], ['Budget', '$38,000'], ['Timeline', '8 weeks']],
    outcome: [['Exit / result', 'Sold to buyers list investor'], ['Sale price', '$305,000'], ['Return', '18% ROI']],
  },
]

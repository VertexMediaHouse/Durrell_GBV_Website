import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import TrackRecord from './pages/TrackRecord'
import CaseStudies from './pages/CaseStudies'
import WhatWeDo from './pages/WhatWeDo'
import InvestmentApproach from './pages/InvestmentApproach'
import Partner from './pages/Partner'
import BuyersList from './pages/BuyersList'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="track-record" element={<TrackRecord />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="investment-approach" element={<InvestmentApproach />} />
          <Route path="partner-with-us" element={<Partner />} />
          <Route path="buyers-list" element={<BuyersList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Legal />} />
          {/* old Framer URLs */}
          <Route path="contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="terms-conditions" element={<Navigate to="/privacy-policy#terms" replace />} />
          <Route path="project/*" element={<Navigate to="/track-record" replace />} />
          <Route path="services/*" element={<Navigate to="/what-we-do" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

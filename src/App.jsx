import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTearLoader } from './components/PageTearLoader';

import { SmoothScroll } from './components/SmoothScroll';

// Pages
import { HomePage } from './pages/HomePage';
import { ApproachPage } from './pages/ApproachPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import { FounderOwnerPage } from './pages/FounderOwnerPage';
import { ServicesPage } from './pages/ServicesPage';
import { JournalPage } from './pages/JournalPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { ScorecardPage } from './pages/ScorecardPage';

export function App() {
  return (
    <Router>
      <PageTearLoader />
      <ScrollToTop />
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-[#06070A] text-[#F8F6F0] selection:bg-amber-400 selection:text-black font-sans antialiased">
          {/* Navigation */}
          <Navbar />

          {/* Dynamic Multi-Page Router Outlet */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/approach" element={<ApproachPage />} />
              <Route path="/architecture" element={<ArchitecturePage />} />
              <Route path="/organizations" element={<OrganizationsPage />} />
              <Route path="/sectors" element={<OrganizationsPage />} />
              <Route path="/founder-owner" element={<FounderOwnerPage />} />
              <Route path="/founder-to-owner" element={<FounderOwnerPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/insights" element={<JournalPage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/diagnostic" element={<AssessmentPage />} />
              <Route path="/scorecard" element={<ScorecardPage />} />
              <Route path="/bottleneck-scorecard" element={<ScorecardPage />} />
            </Routes>
          </main>

          {/* Global Luxury Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;

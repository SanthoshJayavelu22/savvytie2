// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PropertyAssistants from './pages/ServiceDetail/PropertyAssistants';
import PersonalAssistants from './pages/ServiceDetail/PersonalAssistants';
import SocialMediaManagement from './pages/ServiceDetail/SocialMediaManagement';
import CallCentre from './pages/ServiceDetail/CallCentre';
import LiveChatSupport from './pages/ServiceDetail/LiveChatSupport';
import Telesales from './pages/ServiceDetail/Telesales';
import DataEntryServices from './pages/ServiceDetail/DataEntryServices';
import DebtCollection from './pages/ServiceDetail/DebtCollection';
import ITOutsourcing from './pages/ServiceDetail/ITOutsourcing';
import SalesAssistants from './pages/ServiceDetail/SalesAssistants';
import LegalAssistants from './pages/ServiceDetail/LegalAssistants';
import ContactUs from './pages/ContactUs';
import HireNow from './pages/HireNow';
import Jobs from './pages/Jobs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';

// Admin Pages
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CandidatesManagement from './pages/Admin/CandidatesManagement';
import EmployersManagement from './pages/Admin/EmployersManagement';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Header/Footer */}
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <Header />
              <Home />
              <Footer />
            </div>
          } />
          <Route path="/about-us" element={
            <div className="min-h-screen bg-white">
              <Header />
              <AboutUs />
              <Footer />
            </div>
          } />
          <Route path="/services" element={
            <div className="min-h-screen bg-white">
              <Header />
              <Services />
              <Footer />
            </div>
          } />
          <Route path="/services/property-assistants" element={
            <div className="min-h-screen bg-white">
              <Header />
              <PropertyAssistants />
              <Footer />
            </div>
          } />
          <Route path="/services/personal-assistants" element={
            <div className="min-h-screen bg-white">
              <Header />
              <PersonalAssistants />
              <Footer />
            </div>
          } />
          <Route path="/services/social-media-management" element={
            <div className="min-h-screen bg-white">
              <Header />
              <SocialMediaManagement />
              <Footer />
            </div>
          } />
          <Route path="/services/call-centre" element={
            <div className="min-h-screen bg-white">
              <Header />
              <CallCentre />
              <Footer />
            </div>
          } />
          <Route path="/services/live-chat-support" element={
            <div className="min-h-screen bg-white">
              <Header />
              <LiveChatSupport />
              <Footer />
            </div>
          } />
          <Route path="/services/telesales" element={
            <div className="min-h-screen bg-white">
              <Header />
              <Telesales />
              <Footer />
            </div>
          } />
          <Route path="/services/data-entry-services" element={
            <div className="min-h-screen bg-white">
              <Header />
              <DataEntryServices />
              <Footer />
            </div>
          } />
          <Route path="/services/debt-collection" element={
            <div className="min-h-screen bg-white">
              <Header />
              <DebtCollection />
              <Footer />
            </div>
          } />
          <Route path="/services/it-outsourcing" element={
            <div className="min-h-screen bg-white">
              <Header />
              <ITOutsourcing />
              <Footer />
            </div>
          } />
          <Route path="/services/sales-assistants" element={
            <div className="min-h-screen bg-white">
              <Header />
              <SalesAssistants />
              <Footer />
            </div>
          } />
          <Route path="/services/legal-assistants" element={
            <div className="min-h-screen bg-white">
              <Header />
              <LegalAssistants />
              <Footer />
            </div>
          } />
          <Route path="/hire-now" element={
            <div className="min-h-screen bg-white">
              <Header />
              <HireNow />
              <Footer />
            </div>
          } />
          <Route path="/jobs" element={
            <div className="min-h-screen bg-white">
              <Header />
              <Jobs />
              <Footer />
            </div>
          } />
          <Route path="/contact-us" element={
            <div className="min-h-screen bg-white">
              <Header />
              <ContactUs />
              <Footer />
            </div>
          } />
          <Route path="/privacy-policy" element={
            <div className="min-h-screen bg-white">
              <Header />
              <PrivacyPolicy />
              <Footer />
            </div>
          } />
          <Route path="/terms-of-service" element={
            <div className="min-h-screen bg-white">
              <Header />
              <TermsOfService />
              <Footer />
            </div>
          } />
          <Route path="/faq" element={
            <div className="min-h-screen bg-white">
              <Header />
              <FAQ />
              <Footer />
            </div>
          } />

          {/* Admin Routes (No Header/Footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/candidates" element={
            <ProtectedRoute>
              <CandidatesManagement />
            </ProtectedRoute>
          } />
          <Route path="/admin/employers" element={
            <ProtectedRoute>
              <EmployersManagement />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
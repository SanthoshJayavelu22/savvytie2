// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import Chatbot from './components/Chatbot';
import { useLocation } from 'react-router-dom';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const PropertyAssistants = lazy(() => import('./pages/ServiceDetail/PropertyAssistants'));
const PersonalAssistants = lazy(() => import('./pages/ServiceDetail/PersonalAssistants'));
const SocialMediaManagement = lazy(() => import('./pages/ServiceDetail/SocialMediaManagement'));
const CallCentre = lazy(() => import('./pages/ServiceDetail/CallCentre'));
const LiveChatSupport = lazy(() => import('./pages/ServiceDetail/LiveChatSupport'));
const Telesales = lazy(() => import('./pages/ServiceDetail/Telesales'));
const DataEntryServices = lazy(() => import('./pages/ServiceDetail/DataEntryServices'));
const DebtCollection = lazy(() => import('./pages/ServiceDetail/DebtCollection'));
const ITOutsourcing = lazy(() => import('./pages/ServiceDetail/ITOutsourcing'));
const SalesAssistants = lazy(() => import('./pages/ServiceDetail/SalesAssistants'));
const LegalAssistants = lazy(() => import('./pages/ServiceDetail/LegalAssistants'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const HireNow = lazy(() => import('./pages/HireNow'));
const Jobs = lazy(() => import('./pages/Jobs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const FAQ = lazy(() => import('./pages/FAQ'));
const ScheduleCall = lazy(() => import('./pages/ScheduleCall'));

// Admin Pages
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const CandidatesManagement = lazy(() => import('./pages/Admin/CandidatesManagement'));
const EmployersManagement = lazy(() => import('./pages/Admin/EmployersManagement'));
const CallSchedules = lazy(() => import('./pages/Admin/CallSchedules'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      {!isAdminRoute && <WhatsAppFloating />}
      {!isAdminRoute && <Chatbot />}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ... public routes ... */}
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
          <Route path="/schedule-call" element={
            <div className="min-h-screen bg-white">
              <Header />
              <ScheduleCall />
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
          <Route path="/cookie-policy" element={
            <div className="min-h-screen bg-white">
              <Header />
              <CookiePolicy />
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
          <Route path="/admin/call-schedules" element={
            <ProtectedRoute>
              <CallSchedules />
            </ProtectedRoute>
          } />
        </Routes>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
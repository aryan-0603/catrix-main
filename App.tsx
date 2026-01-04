import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import Home from './pages/Home';
import ExamInfo from './pages/ExamInfo';
import IIMOverview from './pages/IIMOverview';
import About from './pages/About';
import { storageService } from './services/storage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const externalTestUrl = "https://test-platform-url.com";

  const handleMockAction = () => {
    // If registered, we still allow them to try and visit the URL
    // but the registration flow itself won't force-redirect anymore.
    if (storageService.isRegistered()) {
      window.open(externalTestUrl, '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleRegistrationSuccess = () => {
    // Simply close the modal after registration
    // The user can then click the CTA again to visit the test link if they wish
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header onMockClick={handleMockAction} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onMockClick={handleMockAction} />} />
            <Route path="/exam-info" element={<ExamInfo />} />
            <Route path="/iim-overview" element={<IIMOverview />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />

        <RegistrationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={handleRegistrationSuccess}
        />
      </div>
    </Router>
  );
};

export default App;
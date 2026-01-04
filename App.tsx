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

  const handleMockAction = () => {
    // Removed redirection logic to ensure registration modal always opens
    setIsModalOpen(true);
  };

  const handleRegistrationSuccess = () => {
    // Simply close the modal after registration is successful
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
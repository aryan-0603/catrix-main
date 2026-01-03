import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onMockClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMockClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'CAT', path: '/exam-info' },
    { label: 'IIMs', path: '/iim-overview' },
    { label: 'About Us', path: '/about' },
  ];

  const Logo = () => (
    <div className="flex items-center group">
      <div className="w-14 h-14 bg-transparent rounded-full flex items-center justify-center overflow-hidden border border-slate-800/30 group-hover:border-[#00FF85]/40 transition-all duration-500">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[11px] font-mono font-bold text-[#00FF85] leading-none tracking-tighter emerald-glow">CATRIX</span>
        </div>
      </div>
    </div>
  );

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-[0.15em] transition-all ${
                    location.pathname === item.path 
                    ? 'text-[#00FF85] emerald-glow' 
                    : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <button
                onClick={onMockClick}
                className="hidden sm:block bg-[#00FF85] text-black px-8 py-3 rounded-full text-sm font-black uppercase tracking-wider hover:bg-[#00cc6a] transition-all shadow-[0_0_20px_rgba(0,255,133,0.2)] active:scale-95"
              >
                Try Free Mock
              </button>

              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-40 md:hidden bg-slate-950 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10">
          <nav className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-bold tracking-tight py-4 border-b border-slate-900 ${
                  location.pathname === item.path 
                  ? 'text-[#00FF85] emerald-glow' 
                  : 'text-white hover:text-[#00FF85]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onMockClick();
              }}
              className="w-full bg-[#00FF85] text-black py-5 rounded-2xl text-xl font-bold hover:bg-[#00cc6a] transition-all"
            >
              Try Free Mock
            </button>
            <p className="text-center text-slate-600 text-sm mt-8 uppercase tracking-[0.2em] font-bold">
              Think beyond the Matrix
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
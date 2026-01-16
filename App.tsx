
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import ChatWidget from './components/ChatWidget';
import GetStartedModal from './components/GetStartedModal';
import Home from './pages/Home';
import EMICalculator from './pages/EMICalculator';
import BankVerification from './pages/BankVerification';
import VideoVerification from './pages/VideoVerification';
import RecommendationEngine from './pages/RecommendationEngine';
import Partners from './pages/Partners';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col animate-in fade-in duration-1000">
        <header className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-5 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-2xl bg-[#1c39bb] flex items-center justify-center shadow-2xl shadow-blue-900/40 group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-2xl">LG</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">LoanGuard</span>
            </Link>
            <nav className="hidden md:flex space-x-10 text-sm font-semibold text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/emi" className="hover:text-white transition-colors">Calculator</Link>
              <Link to="/verify" className="hover:text-white transition-colors">Verify Bank</Link>
              <Link to="/partners" className="hover:text-white transition-colors">Partners</Link>
            </nav>
            <button 
              onClick={() => setIsGetStartedOpen(true)}
              className="bg-[#1c39bb] text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/20 active:scale-95 border border-white/10"
            >
              Get Started
            </button>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onGetStarted={() => setIsGetStartedOpen(true)} />} />
            <Route path="/emi" element={<EMICalculator />} />
            <Route path="/verify" element={<BankVerification />} />
            <Route path="/video-verify" element={<VideoVerification />} />
            <Route path="/recommend" element={<RecommendationEngine />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>

        <footer className="bg-[#020617] border-t border-white/5 py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1c39bb] flex items-center justify-center">
                   <span className="text-white font-black text-lg">LG</span>
                </div>
                <span className="text-2xl font-black text-white">LoanGuard</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                The world's most trusted financial evaluation engine. Protecting your future through data-driven clarity and verified intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Features</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link to="/emi" className="hover:text-blue-400">EMI Calculator</Link></li>
                <li><Link to="/verify" className="hover:text-blue-400">Bank Verification</Link></li>
                <li><Link to="/recommend" className="hover:text-blue-400">AI Recommendations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-slate-600 text-xs tracking-widest uppercase">
            © 2024 LoanGuard Financial Intelligence. Built for Safety.
          </div>
        </footer>

        <ChatWidget />
        <GetStartedModal isOpen={isGetStartedOpen} onClose={() => setIsGetStartedOpen(false)} />
      </div>
    </Router>
  );
};

export default App;

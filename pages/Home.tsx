
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

interface HomeProps {
  onGetStarted: () => void;
}

const FeatureCard = ({ to, title, description, icon: Icon, isExternal = false }: any) => {
  const CardContent = (
    <>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors" />
      <div className="w-20 h-20 rounded-3xl bg-[#1c39bb]/10 text-[#1c39bb] flex items-center justify-center mb-8 group-hover:bg-[#1c39bb] group-hover:text-white transition-all duration-500 shadow-inner">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed mb-8">{description}</p>
      <div className="flex items-center text-blue-500 font-bold text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform">
        {isExternal ? 'Open Portal' : 'Launch Module'}
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </>
  );

  const cardClasses = "group relative bg-[#0f172a]/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 hover:bg-[#1e293b]/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden shadow-2xl h-full flex flex-col";

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {CardContent}
      </a>
    );
  }

  return (
    <Link to={to} className={cardClasses}>
      {CardContent}
    </Link>
  );
};

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em]">
          Next-Gen Financial Security
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
          Decide with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c39bb] to-blue-400">Absolute Certainty</span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Protect your assets and secure your future with LoanGuard's premium suite of verification and intelligence tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureCard 
          to="/emi"
          title="EMI Calculator"
          description="High-precision payment projections with real-time interest volatility modeling."
          icon={Icons.Calculator}
        />
        <FeatureCard 
          to="/verify"
          title="Bank Verification"
          description="Global registry check to ensure your lender is fully licensed and compliant."
          icon={Icons.ShieldCheck}
        />
        <FeatureCard 
          to="/video-verify"
          title="Biometric Portal"
          description="Encrypted video verification for high-security identity authentication."
          icon={Icons.VideoCamera}
        />
        <FeatureCard 
          to="/recommend"
          title="Smart Engine"
          description="AI-driven loan matching based on multi-factor market analysis."
          icon={Icons.Sparkles}
        />
        <FeatureCard 
          to="/partners"
          title="Tier-1 Partners"
          description="Access our exclusive network of pre-vetted institutional lenders."
          icon={Icons.Users}
        />
        <FeatureCard 
          to="https://www.myscheme.gov.in/"
          title="Live Face Verification"
          description="Access government schemes and secure identity portal through MyScheme integration."
          icon={() => (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m10 5l1.414-1.414M11 10.142V10h.142m0 0L12 9l1 1-.858.858M12 11h.01" />
            </svg>
          )}
          isExternal={true}
        />
      </div>

      <div className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-[#1c39bb] to-blue-900 text-white relative overflow-hidden shadow-3xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Elite Financial Protection.</h2>
            <p className="text-blue-100/70 text-lg mb-12 leading-relaxed">
              LoanGuard isn't just a tool; it's a shield. We monitor thousands of lenders daily to ensure our verification data is the gold standard in the industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button onClick={onGetStarted} className="bg-white text-[#1c39bb] px-10 py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-2xl">Create Free Account</button>
              <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-2xl font-black hover:bg-white/10 transition-all">White Paper</button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-square bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 flex items-center justify-center shadow-inner relative group">
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative scale-150 text-white">
              <Icons.ShieldCheck />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px]" />
      </div>
    </div>
  );
};

export default Home;

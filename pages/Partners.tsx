
import React from 'react';
import { LoanCategory } from '../types';

const CategoryCard = ({ category, description, icon: Icon, link }: any) => (
  <div className="group bg-[#0f172a] p-10 rounded-[3rem] border border-white/5 shadow-xl hover:border-blue-500/30 hover:bg-[#1e293b]/50 transition-all duration-500 h-full flex flex-col">
    <div className="w-20 h-20 rounded-3xl bg-[#1c39bb]/10 text-[#1c39bb] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#1c39bb] group-hover:text-white transition-all duration-500">
      <Icon />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{category}</h3>
    <p className="text-slate-400 text-base leading-relaxed mb-10 flex-grow">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full py-5 rounded-[1.5rem] bg-slate-900 text-white font-black hover:bg-[#1c39bb] transition-all border border-white/5 shadow-inner active:scale-95 text-sm uppercase tracking-widest text-center"
    >
      Establish Link
    </a>
  </div>
);

const Partners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-24">
        <h1 className="text-5xl font-black text-white mb-6">Institutional Network</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Direct bridges to the world's most capitalized and compliant financial institutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CategoryCard 
          category={LoanCategory.EDUCATION}
          link="https://www.hdfc.com/housing-loans/home-loans"
          description="High-tier academic funding with optimized international repayment structures."
          icon={() => (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
          )}
        />
        <CategoryCard 
          category={LoanCategory.FARMER}
          link="https://www.ltfinance.com/farmer-loan"
          description="Agri-sector specialized capital with priority government integration."
          icon={() => (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
          )}
        />
        <CategoryCard 
          category={LoanCategory.SMALL_BUSINESS}
          link="https://www.herofincorp.com/business-loan"
          description="Growth capital for enterprise scaling. Institutional liquidity for SMEs."
          icon={() => (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          )}
        />
        <CategoryCard 
          category={LoanCategory.HOME}
          link="https://www.hdfc.com/housing-loans/home-loans"
          description="Premium mortgage vehicles with multi-generational lifecycle planning."
          icon={() => (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          )}
        />
      </div>

      <div className="mt-32 p-16 bg-[#0f172a] rounded-[4rem] border border-white/5 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
        <div className="shrink-0 w-32 h-32 bg-[#1c39bb] rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(28,57,187,0.3)]">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
          <h3 className="text-3xl font-black text-white mb-4 tracking-tight">The Registry Standard</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every partner in our network is continuously monitored for compliance, solvency, and transparency. Our registry data is refreshed every 3600 seconds to ensure total accuracy in the lending market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;

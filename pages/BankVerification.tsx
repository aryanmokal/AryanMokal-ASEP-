
import React, { useState } from 'react';
import { VERIFIED_BANKS } from '../constants';

const BankVerification: React.FC = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<'verified' | 'unverified' | null>(null);

  const handleVerify = () => {
    if (!search.trim()) return;
    const isVerified = VERIFIED_BANKS.some(bank => bank.toLowerCase().includes(search.toLowerCase().trim()));
    setResult(isVerified ? 'verified' : 'unverified');
  };

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-white mb-6">Lender Compliance</h1>
        <p className="text-slate-400 text-lg">Verify banking credentials against our global security registry.</p>
      </div>

      <div className="bg-[#0f172a] p-12 rounded-[4rem] shadow-3xl border border-white/5">
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <input 
            type="text" 
            placeholder="Enter Bank or Lender Name..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-8 py-5 bg-slate-900 border border-white/10 rounded-[2rem] focus:ring-2 focus:ring-[#1c39bb] focus:outline-none text-xl text-white placeholder-slate-600 transition-all"
          />
          <button 
            onClick={handleVerify}
            className="bg-[#1c39bb] text-white px-12 py-5 rounded-[2rem] font-black hover:bg-blue-600 transition-all shadow-2xl active:scale-95 text-lg"
          >
            Run Registry Check
          </button>
        </div>

        {result === 'verified' && (
          <div className="p-10 bg-green-500/10 border border-green-500/30 rounded-[3rem] flex items-center gap-10 animate-in zoom-in duration-500">
            <div className="w-24 h-24 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-2">Entity Authenticated</h3>
              <p className="text-green-400 text-lg font-medium">This lender is fully compliant with LoanGuard Tier-1 safety standards.</p>
            </div>
          </div>
        )}

        {result === 'unverified' && (
          <div className="p-10 bg-red-500/10 border border-red-500/30 rounded-[3rem] animate-in slide-in-from-bottom duration-500">
            <div className="flex items-center gap-10 mb-12">
              <div className="w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-2">Critical Warning</h3>
                <p className="text-red-400 text-lg font-medium">Lender not found in verified registry. High risk of non-compliance detected.</p>
              </div>
            </div>
            
            <div className="pt-10 border-t border-white/5">
              <h4 className="font-black text-slate-300 mb-6 uppercase tracking-[0.2em] text-xs">Official Safe-List:</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {VERIFIED_BANKS.map(bank => (
                  <div key={bank} className="bg-slate-900 border border-white/5 px-6 py-4 rounded-2xl text-sm font-bold text-slate-400 hover:border-blue-500/30 transition-colors">
                    {bank}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {!result && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 opacity-40">
             {VERIFIED_BANKS.map(bank => (
              <div key={bank} className="p-6 border border-white/5 rounded-2xl text-center text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-900/50">
                {bank}
              </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BankVerification;


import React, { useState } from 'react';
import { getLoanRecommendations } from '../services/geminiService';
import { LoanOffer, RecommendationInput } from '../types';

const RecommendationEngine: React.FC = () => {
  const [input, setInput] = useState<RecommendationInput>({
    amount: 1000000,
    purpose: 'Home Loan',
    city: 'Mumbai',
    income: 75000
  });
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<LoanOffer[]>([]);

  const handleGetRecommendations = async () => {
    setLoading(true);
    try {
      const results = await getLoanRecommendations(input);
      setRecommendations(results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-24">
        <h1 className="text-5xl font-black text-white mb-6">Market Intelligence</h1>
        <p className="text-slate-400 text-lg">AI-powered analysis of the current lending landscape.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-10 bg-[#0f172a] p-10 rounded-[3rem] border border-white/5 shadow-2xl h-fit">
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Target Amount</label>
            <div className="text-3xl font-black text-blue-400 mb-6">₹{input.amount.toLocaleString()}</div>
            <input 
              type="range" 
              min="100000" 
              max="50000000" 
              step="100000"
              value={input.amount}
              onChange={(e) => setInput({...input, amount: Number(e.target.value)})}
              className="w-full accent-[#1c39bb] h-2 bg-slate-800 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Loan Purpose</label>
            <select 
              value={input.purpose}
              onChange={(e) => setInput({...input, purpose: e.target.value})}
              className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:ring-2 focus:ring-[#1c39bb] focus:outline-none text-white font-bold"
            >
              <option>Home Loan</option>
              <option>Personal Loan</option>
              <option>Car Loan</option>
              <option>Education Loan</option>
              <option>Business Loan</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Monthly Income</label>
            <input 
              type="number"
              value={input.income}
              onChange={(e) => setInput({...input, income: Number(e.target.value)})}
              className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:ring-2 focus:ring-[#1c39bb] focus:outline-none text-white font-bold"
            />
          </div>

          <button 
            onClick={handleGetRecommendations}
            disabled={loading}
            className="w-full bg-[#1c39bb] text-white py-5 rounded-2xl font-black hover:bg-blue-600 transition-all disabled:opacity-50 shadow-2xl active:scale-95 text-lg"
          >
            {loading ? 'Synthesizing...' : 'Generate Analysis'}
          </button>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {loading ? (
            <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-blue-900/50 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-white mb-2">Analyzing Markets</p>
                <p className="text-slate-500 font-medium">Scanning institutional databases for best rates...</p>
              </div>
            </div>
          ) : recommendations.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {recommendations.map((offer, idx) => (
                <div 
                  key={idx} 
                  className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${offer.isBestValue ? 'bg-[#1c39bb] text-white border-transparent shadow-[0_20px_50px_rgba(28,57,187,0.4)] scale-105 z-10' : 'bg-[#0f172a] text-white border-white/5 shadow-xl hover:border-blue-500/30'}`}
                >
                  {offer.isBestValue && (
                    <div className="absolute -top-4 left-10 bg-amber-400 text-amber-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                      Tier-1 Recommendation
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
                    <div>
                      <h3 className="text-3xl font-black tracking-tight">{offer.bank}</h3>
                      <p className={`text-base font-bold mt-1 ${offer.isBestValue ? 'text-blue-200' : 'text-blue-500'}`}>{offer.interestRate}% Dynamic Rate</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-4xl font-black">₹{offer.monthlyEMI.toLocaleString()}</div>
                      <div className={`text-[10px] uppercase font-black tracking-[0.2em] mt-1 ${offer.isBestValue ? 'text-blue-200/60' : 'text-slate-500'}`}>Monthly Commitment</div>
                    </div>
                  </div>
                  <div className={`p-6 rounded-2xl mb-10 ${offer.isBestValue ? 'bg-white/10 backdrop-blur-md' : 'bg-slate-900'}`}>
                    <p className="text-base font-medium leading-relaxed italic opacity-90">"{offer.benefits}"</p>
                  </div>
                  <button className={`w-full py-5 rounded-[1.5rem] font-black transition-all text-lg ${offer.isBestValue ? 'bg-white text-[#1c39bb] hover:bg-blue-50' : 'bg-[#1c39bb] text-white hover:bg-blue-600'}`}>
                    Initialize Application
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-20 border-2 border-dashed border-white/5 rounded-[4rem] bg-[#0f172a]/20 backdrop-blur-sm">
              <div className="w-24 h-24 bg-slate-900 text-blue-500 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-widest">Engine Ready</h3>
              <p className="text-slate-500 max-w-sm text-lg">Input your financial profile to generate a real-time market comparison.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;

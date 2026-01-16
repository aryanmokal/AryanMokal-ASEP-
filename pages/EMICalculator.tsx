
import React, { useState, useEffect } from 'react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(500000);
  const [rate, setRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(5); // Years
  const [emi, setEmi] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const calculatedEmi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(isNaN(calculatedEmi) ? 0 : calculatedEmi);
  }, [amount, rate, tenure]);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate generation delay
    setTimeout(() => {
      const summary = `
LOANGUARD FINANCIAL PROJECTION
------------------------------
Principal Amount: ₹${amount.toLocaleString()}
Annual Interest Rate: ${rate}%
Tenure: ${tenure} Years
Estimated Monthly EMI: ₹${emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}
Total Interest Payable: ₹${(emi * tenure * 12 - amount).toLocaleString(undefined, { maximumFractionDigits: 0 })}
Total Repayment: ₹${(emi * tenure * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}

Generated on: ${new Date().toLocaleString()}
Status: VERIFIED BY LOANGUARD AI
      `;
      
      const blob = new Blob([summary], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `LoanGuard_Projection_${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Precision Calculator</h1>
        <p className="text-slate-400 text-lg">Model your future commitments with surgical accuracy.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-[#0f172a] p-12 rounded-[4rem] shadow-3xl border border-white/5">
        <div className="space-y-12">
          <div>
            <div className="flex justify-between items-center mb-6">
              <label className="text-sm font-black text-slate-300 uppercase tracking-widest">Loan Amount</label>
              <span className="text-2xl font-bold text-[#1c39bb]">₹{amount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="10000" 
              max="10000000" 
              step="10000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-[#1c39bb] h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <label className="text-sm font-black text-slate-300 uppercase tracking-widest">Annual Interest</label>
              <span className="text-2xl font-bold text-[#1c39bb]">{rate}%</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="25" 
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-[#1c39bb] h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <label className="text-sm font-black text-slate-300 uppercase tracking-widest">Tenure (Years)</label>
              <span className="text-2xl font-bold text-[#1c39bb]">{tenure} Yrs</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="30" 
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-[#1c39bb] h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[#1c39bb] to-blue-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
          <span className="text-blue-200 uppercase text-xs font-black tracking-[0.3em] mb-4">Estimated Monthly EMI</span>
          <div className="text-6xl font-black mb-12 tracking-tighter">₹{emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
          
          <div className="w-full space-y-6 pt-10 border-t border-white/10">
            <div className="flex justify-between text-sm">
              <span className="text-blue-200/60 font-bold uppercase tracking-widest">Interest Payable</span>
              <span className="font-black text-lg">₹{(emi * tenure * 12 - amount).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-200/60 font-bold uppercase tracking-widest">Total Repayment</span>
              <span className="font-black text-lg">₹{(emi * tenure * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="mt-12 w-full bg-white text-[#1c39bb] py-4 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center"
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3 text-[#1c39bb]" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Projections...
              </>
            ) : (
              'Download Projections'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;

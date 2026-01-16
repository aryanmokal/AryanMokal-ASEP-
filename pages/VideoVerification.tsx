
import React, { useState } from 'react';

const VideoVerification: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'processing' | 'verified'>('idle');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setStatus('processing');
      setTimeout(() => {
        setStatus('verified');
      }, 4000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black text-white mb-6">Biometric Protocol</h1>
        <p className="text-slate-400 text-lg">End-to-end encrypted identity authentication engine.</p>
      </div>

      <div className="bg-[#0f172a] rounded-[4rem] p-16 shadow-3xl border border-white/5 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
        
        {status === 'idle' && (
          <div className="w-full max-w-md text-center">
            <div className="w-40 h-40 bg-blue-500/5 text-blue-500 rounded-[3rem] flex items-center justify-center mx-auto mb-12 border-2 border-dashed border-blue-500/30 group hover:border-blue-500 transition-all cursor-pointer relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full" />
              <svg className="w-16 h-16 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            </div>
            <label className="block bg-[#1c39bb] text-white px-12 py-5 rounded-[2rem] font-black cursor-pointer hover:bg-blue-600 transition-all shadow-2xl active:scale-95 text-lg">
              Initialize Video Upload
              <input type="file" accept="video/*" className="hidden" onChange={handleUpload} />
            </label>
            <p className="mt-8 text-sm text-slate-500 font-bold uppercase tracking-widest">Secure Handshake: RSA-4096 Enabled</p>
          </div>
        )}

        {status === 'processing' && (
          <div className="text-center space-y-10 py-10">
            <div className="relative w-32 h-32 mx-auto">
               <div className="absolute inset-0 border-8 border-blue-900/30 rounded-full" />
               <div className="absolute inset-0 border-8 border-t-blue-500 rounded-full animate-spin" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Analyzing Biometrics</h3>
              <p className="text-slate-400 text-lg">Validating liveness and cross-referencing global databases...</p>
            </div>
          </div>
        )}

        {status === 'verified' && (
          <div className="text-center space-y-10 animate-in zoom-in duration-700 py-10">
             <div className="w-40 h-40 bg-green-500 text-white rounded-[3rem] flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.3)] border-8 border-green-500/20">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <h3 className="text-4xl font-black text-white mb-4">Authentication Success</h3>
              <p className="text-green-400 text-xl font-bold">Identity verified. Security clearance granted.</p>
            </div>
            <button 
              onClick={() => setStatus('idle')}
              className="text-[#1c39bb] font-black uppercase tracking-[0.2em] text-xs hover:text-blue-400 transition-colors"
            >
              Reset Session
            </button>
          </div>
        )}

        <div className="mt-20 pt-16 border-t border-white/5 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="text-center">
             <div className="text-white font-black text-lg mb-2 tracking-tight">AES-256-GCM</div>
             <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Protocol Standard</p>
           </div>
           <div className="text-center">
             <div className="text-white font-black text-lg mb-2 tracking-tight">Liveness v2.4</div>
             <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Neural Engine</p>
           </div>
           <div className="text-center">
             <div className="text-white font-black text-lg mb-2 tracking-tight">SOC2 Compliant</div>
             <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Data Privacy</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VideoVerification;

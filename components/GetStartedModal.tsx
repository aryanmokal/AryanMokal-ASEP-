
import React, { useState } from 'react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'success'>('idle');
  const [aadhaarFile, setAadhaarFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAadhaarFile(e.target.files[0]);
      setStatus('processing');
      
      // Simulate OCR delay
      setTimeout(() => {
        setStatus('success');
      }, 3500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'success') {
      alert("Registration submitted successfully!");
      onClose();
      setStatus('idle');
      setFormData({ name: '', email: '' });
      setAadhaarFile(null);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-[#020617]/90 backdrop-blur-md transition-opacity">
      <div className="bg-[#0f172a] w-full max-w-lg rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden animate-in zoom-in duration-300">
        <div className="bg-gradient-to-r from-[#1c39bb] to-blue-600 p-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Onboarding</h2>
            <p className="text-blue-100 text-sm opacity-80">Initialize your secure account</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:ring-2 focus:ring-[#1c39bb] focus:outline-none text-white font-semibold transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:ring-2 focus:ring-[#1c39bb] focus:outline-none text-white font-semibold transition-all"
              />
            </div>
            
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Aadhaar Card Verification</label>
              <div className="relative">
                {status === 'idle' && (
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-3 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                      <p className="text-sm text-slate-400">Click to upload Aadhaar (Front/Back)</p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*,application/pdf" />
                  </label>
                )}

                {status === 'processing' && (
                  <div className="w-full h-32 bg-slate-900 rounded-2xl flex flex-col items-center justify-center border border-[#1c39bb]/30 animate-pulse">
                    <div className="w-8 h-8 border-4 border-[#1c39bb]/20 border-t-[#1c39bb] rounded-full animate-spin mb-3"></div>
                    <p className="text-xs font-bold text-[#1c39bb] uppercase tracking-[0.2em] animate-pulse">
                      extracting data from tesseract ocr
                    </p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="w-full h-32 bg-green-500/10 rounded-2xl flex flex-col items-center justify-center border border-green-500/30 animate-in zoom-in duration-500">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-sm font-black text-green-500 uppercase tracking-widest">
                      data extracted successfully
                    </p>
                    <button 
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-[10px] text-slate-500 underline uppercase font-bold"
                    >
                      Re-upload?
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={status !== 'success'}
            className="w-full bg-[#1c39bb] text-white py-5 rounded-[1.5rem] font-black hover:bg-blue-600 transition-all shadow-xl active:scale-95 disabled:opacity-40 text-lg uppercase tracking-widest"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;

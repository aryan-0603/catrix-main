
import React, { useState } from 'react';
import { AttemptYear, UserRegistration } from '../types';
import { storageService } from '../services/storage';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<UserRegistration>({
    fullName: '',
    email: '',
    phone: '',
    attemptYear: AttemptYear.Y2026
  });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await storageService.saveUser(formData);
      setLoading(false);
      setIsSuccess(true);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || 'Failed to register. Please check your connection.');
      console.error('Registration failed:', err);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, phone: numericValue });
  };

  const Logo = () => (
    <div className="w-14 h-14 bg-transparent rounded-full flex items-center justify-center overflow-hidden border border-slate-700 mb-6">
      <div className="flex flex-col items-center justify-center">
        <span className="text-[11px] font-mono font-bold text-[#00FF85] leading-none tracking-tighter emerald-glow">CATRIX</span>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
      <div className="bg-slate-900 rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] w-full max-w-md overflow-hidden border border-slate-800">
        <div className="p-10 sm:p-14">
          {!isSuccess ? (
            <>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <Logo />
                  <h2 className="text-3xl font-bold text-white tracking-tight">Register for CATRIX</h2>
                  <p className="text-slate-400 text-sm mt-3 font-medium leading-relaxed">Unlock access to our high-precision simulation engine.</p>
                </div>
                <button onClick={onClose} className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-xs font-bold uppercase tracking-wider">
                    {error}
                  </div>
                )}
                
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1">Full Name</label>
                  <input
                    required
                    placeholder="Ex: Alan Turing"
                    type="text"
                    className="w-full px-5 py-4 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#00FF85]/20 focus:border-[#00FF85] outline-none transition-all bg-slate-950/50 text-white placeholder:text-slate-700 font-medium"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1">Email Address</label>
                  <input
                    required
                    placeholder="turing@matrix.com"
                    type="email"
                    className="w-full px-5 py-4 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#00FF85]/20 focus:border-[#00FF85] outline-none transition-all bg-slate-950/50 text-white placeholder:text-slate-700 font-medium"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1">Phone</label>
                    <input
                      required
                      placeholder="Digits only"
                      type="tel"
                      className="w-full px-5 py-4 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#00FF85]/20 focus:border-[#00FF85] outline-none transition-all bg-slate-950/50 text-white placeholder:text-slate-700 font-medium"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1">Target Year</label>
                    <div className="relative">
                      <select
                        required
                        className="w-full px-5 py-4 border border-slate-800 rounded-2xl focus:ring-2 focus:ring-[#00FF85]/20 focus:border-[#00FF85] outline-none transition-all bg-slate-950/50 text-white appearance-none cursor-pointer font-medium"
                        value={formData.attemptYear}
                        onChange={e => setFormData({...formData, attemptYear: e.target.value})}
                      >
                        <option value={AttemptYear.Y2026}>2026</option>
                        <option value={AttemptYear.Y2027}>2027</option>
                        <option value={AttemptYear.Y2028}>2028</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-base transition-all shadow-[0_15px_40px_rgba(0,255,133,0.1)] mt-4 active:scale-[0.98] bg-[#00FF85] text-black hover:bg-[#00cc6a] disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Processing...
                    </span>
                  ) : 'Register Now'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-[#00FF85]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-[#00FF85] emerald-glow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter italic">Welcome to the Matrix.</h2>
              <p className="text-slate-400 text-lg mb-10 font-medium">Your registration is verified. Join our elite community to start your journey.</p>
              
              <div className="space-y-4">
                <a 
                  href="https://t.me/CATrixQuant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-5 rounded-2xl bg-[#00FF85] text-black font-black uppercase tracking-widest text-sm hover:bg-[#00cc6a] transition-all shadow-[0_10px_30px_rgba(0,255,133,0.2)]"
                >
                  Join Telegram Community
                </a>
                <button 
                  onClick={() => {
                    onSuccess();
                    onClose();
                  }}
                  className="block w-full py-5 rounded-2xl border border-slate-800 text-slate-500 font-bold uppercase tracking-widest text-xs hover:text-white hover:bg-slate-800 transition-all"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}

          <p className="text-[9px] text-center text-slate-600 mt-10 leading-relaxed uppercase tracking-[0.25em] font-bold">
            Secure Platform • Cloud Synchronized
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;

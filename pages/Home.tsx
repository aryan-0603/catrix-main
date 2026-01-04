import React from 'react';

interface HomeProps {
  onMockClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onMockClick }) => {
  return (
    <div className="pt-24 bg-slate-950">
      <section className="relative overflow-hidden min-h-[95vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="text-center lg:text-left lg:flex lg:items-center">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center space-x-3 bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-full mb-10 animate-in fade-in slide-in-from-top duration-700">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#00FF85] animate-pulse"></span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">2026 Admission Window Open</span>
              </div>
              <h1 className="text-6xl sm:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-10">
                Master CAT with <br/>
                <span className="text-[#00FF85] emerald-glow">Precision Realism.</span>
              </h1>
              <p className="text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12 font-medium">
                Stop practicing. Start simulating. Experience high-fidelity mocks designed by experts for serious aspirants. 
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <button
                  onClick={onMockClick}
                  className="bg-[#00FF85] text-black px-14 py-6 rounded-2xl text-2xl font-bold hover:bg-[#00cc6a] transition-all shadow-[0_15px_40px_rgba(0,255,133,0.2)] hover:-translate-y-1 active:scale-95"
                >
                  Try Free Full Mock
                </button>
              </div>
              <div className="mt-16 flex items-center justify-center lg:justify-start space-x-6 text-base text-slate-500">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 grayscale hover:grayscale-0 transition-all cursor-pointer" src={`https://picsum.photos/100?random=${i+10}`} alt="aspirant" />
                  ))}
                </div>
                <span className="font-semibold tracking-tight uppercase text-xs tracking-[0.25em] text-slate-400">
                  Built for the <span className="text-white font-bold">Top 1%</span>
                </span>
              </div>
            </div>
            
            <div className="hidden lg:block lg:w-2/5 ml-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF85] to-blue-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" alt="Platform UI" className="rounded-3xl opacity-60 hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-slate-900 p-10 rounded-[3rem] shadow-3xl border border-slate-800 max-w-xs animate-bounce-slow">
                  <div className="flex items-center space-x-4 text-[#00FF85] font-bold text-3xl mb-3">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="emerald-glow">99.9%</span>
                  </div>
                  <p className="text-sm text-slate-400 uppercase tracking-[0.2em] font-bold leading-relaxed">High-Fidelity Realism Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#00FF85]/5 rounded-full blur-[180px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] -ml-20 -mb-20"></div>
      </section>

      <section className="py-40 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 tracking-tight">Engineered for Excellence</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed font-medium">We don't provide quantity. We provide the lethal accuracy required to conquer the IIM selection process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Strategic Mocks", desc: "Our questions aren't just hard—they're relevant. Mapped to current exam trends.", icon: "🎯" },
              { title: "Neuro-Analytics", desc: "Detailed breakdown of your time management and cognitive response patterns.", icon: "📊" },
              { title: "TCS iON Interface", desc: "Master the exact TITA and MCQ system used in the actual test centers.", icon: "💻" }
            ].map((f, i) => (
              <div key={i} className="bg-slate-900 p-12 rounded-[3rem] shadow-sm hover:bg-slate-800 transition-all border border-slate-800 hover:border-[#00FF85]/30 group">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[5rem] p-16 lg:p-40 text-center relative overflow-hidden border border-slate-800">
                <div className="relative z-10">
                  <h2 className="text-5xl lg:text-8xl font-extrabold mb-10 tracking-tighter text-white">Think beyond the <span className="text-[#00FF85]">Matrix.</span></h2>
                  <p className="text-slate-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">The 100th percentile is a decision away. Step into our world and see where you truly stand.</p>
                  <button 
                    onClick={onMockClick}
                    className="bg-[#00FF85] text-black px-16 py-7 rounded-2xl font-bold text-2xl hover:bg-[#00cc6a] transition-all shadow-[0_20px_50px_rgba(0,255,133,0.3)] active:scale-95"
                  >
                      Register for Free Mock
                  </button>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-[#00FF85]/10 to-transparent pointer-events-none"></div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
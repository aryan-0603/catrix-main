import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h1 className="text-6xl font-extrabold text-white tracking-tight mb-6">The <span className="text-[#00FF85]">Mission</span></h1>
          <p className="text-slate-500 uppercase tracking-[0.3em] text-sm font-bold">Against Mediocre Preparation</p>
        </div>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <div className="mb-32 grid md:grid-cols-2 gap-20 items-start">
            <div className="text-3xl text-slate-300 font-semibold leading-snug">
              CATRIX was born out of a simple observation: most online 'mocks' were too easy, poorly timed, 
              or visually inconsistent with the actual exam. 
            </div>
            <div className="text-xl text-slate-500 leading-relaxed font-medium">
              Our mission is to provide the most disciplined and realistic environment for CAT aspirants who aren't just looking for 'practice' but for an actual simulation of D-Day. We believe precision is the only path to the top.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
            <div className="bg-slate-900 p-16 rounded-[4rem] border border-slate-800 hover:border-[#00FF85]/30 transition-all">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Total Realism</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">Every mock we design mirrors the difficulty curve and cognitive load of the actual paper. No surprises on the big day.</p>
            </div>
            <div className="bg-slate-900 p-16 rounded-[4rem] border border-slate-800 hover:border-[#00FF85]/30 transition-all">
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Academic Depth</h3>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">Our content team consists of IIM alumni who understand the nuance of question selection and trap-setting.</p>
            </div>
          </div>

          <div className="bg-[#00FF85]/5 p-16 md:p-24 rounded-[5rem] border border-[#00FF85]/10 mb-32 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-[#00FF85] mb-8 italic emerald-glow tracking-tight">Strategic Disclaimer</h2>
              <p className="text-white opacity-90 leading-relaxed text-2xl max-w-4xl font-medium">
                CATRIX is an independent preparatory platform. The mock tests provided are simulations of the CAT pattern and are not official tests endorsed by the convening IIMs. Our goal is to simulate the difficulty and environment to provide peak preparatory value.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#00FF85]/10 blur-[100px] rounded-full"></div>
          </div>

          <div className="text-center mt-40">
            <p className="text-slate-600 mb-10 uppercase tracking-[0.5em] font-bold text-sm">A Decade of Excellence</p>
            <div className="inline-block px-16 py-8 bg-white text-black rounded-3xl font-black text-3xl tracking-tighter hover:bg-[#00FF85] transition-all duration-500 cursor-default">
              PRECISION IS OUR PASSION.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
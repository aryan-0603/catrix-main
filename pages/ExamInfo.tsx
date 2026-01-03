import React from 'react';

const ExamInfo: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <h1 className="text-6xl font-extrabold text-white tracking-tight">The CAT <span className="text-[#00FF85]">Blueprint</span></h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.25em] text-sm">Complete 2026 Exam Architecture</p>
        </div>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">What is the Common Admission Test (CAT)?</h2>
            <p className="text-2xl text-slate-400 leading-relaxed mb-10 font-medium">
              The Common Admission Test (CAT) is India's premier computer-based entrance exam for admission into the Indian Institutes of Management (IIMs) and other top-tier business schools. It is widely considered one of the most competitive management entrance exams globally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800">
                <h4 className="text-[#00FF85] font-bold text-xl mb-4">Registration Cycle</h4>
                <p className="text-slate-400 text-lg leading-relaxed">Typically opens in early August. The exam is held on the last Sunday of November. Results are usually declared in the second week of January.</p>
              </div>
              <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800">
                <h4 className="text-[#00FF85] font-bold text-xl mb-4">Eligibility Criteria</h4>
                <p className="text-slate-400 text-lg leading-relaxed">Bachelor's Degree with at least 50% marks (45% for reserved categories). Final year students are also eligible to apply for the 2026 cycle.</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">Exam Composition & Timing</h2>
            <div className="overflow-x-auto rounded-[3rem] border border-slate-800 shadow-2xl">
              <table className="w-full text-left bg-slate-900/50">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900">
                    <th className="px-10 py-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Section</th>
                    <th className="px-10 py-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Questions</th>
                    <th className="px-10 py-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Time Limit</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-lg">
                  <tr className="border-b border-slate-800/50">
                    <td className="px-10 py-8 font-bold text-white">VARC</td>
                    <td className="px-10 py-8">24 Questions</td>
                    <td className="px-10 py-8">40 Minutes</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-10 py-8 font-bold text-white">DILR</td>
                    <td className="px-10 py-8">20 Questions</td>
                    <td className="px-10 py-8">40 Minutes</td>
                  </tr>
                  <tr>
                    <td className="px-10 py-8 font-bold text-white">QA</td>
                    <td className="px-10 py-8">22 Questions</td>
                    <td className="px-10 py-8">40 Minutes</td>
                  </tr>
                  <tr className="bg-slate-900/80">
                    <td className="px-10 py-8 font-bold text-[#00FF85]">Total</td>
                    <td className="px-10 py-8 font-bold text-[#00FF85]">66 Questions</td>
                    <td className="px-10 py-8 font-bold text-[#00FF85]">120 Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">Sectional Syllabus Deep-Dive</h2>
            <div className="space-y-10">
              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3.5rem]">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-xl bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center mr-5 text-base">01</span>
                  VARC (Verbal Ability & Reading Comprehension)
                </h3>
                <p className="text-slate-400 text-xl mb-8 leading-relaxed">Focuses on reading speed, comprehension, and vocabulary-in-context.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Reading Comprehension', 'Para Jumbles', 'Odd One Out', 'Para Summary'].map(topic => (
                    <div key={topic} className="bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 text-slate-300 text-sm font-medium">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3.5rem]">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-xl bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center mr-5 text-base">02</span>
                  DILR (Data Interpretation & Logical Reasoning)
                </h3>
                <p className="text-slate-400 text-xl mb-8 leading-relaxed">Testing the ability to process complex data sets and logical puzzles.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Caselets', 'Tables & Graphs', 'Seating Arrangement', 'Games & Tournaments'].map(topic => (
                    <div key={topic} className="bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 text-slate-300 text-sm font-medium">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3.5rem]">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-xl bg-[#00FF85]/20 text-[#00FF85] flex items-center justify-center mr-5 text-base">03</span>
                  QA (Quantitative Ability)
                </h3>
                <p className="text-slate-400 text-xl mb-8 leading-relaxed">Evaluating mathematical proficiency across basic and advanced levels.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Arithmetic', 'Algebra', 'Geometry', 'Number Systems'].map(topic => (
                    <div key={topic} className="bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 text-slate-300 text-sm font-medium">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">The 2026 Preparation Roadmap</h2>
            <div className="relative pl-8 border-l-2 border-slate-800 space-y-16 py-10">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#00FF85] rounded-full border-4 border-slate-950"></div>
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Phase 1: Foundation (Feb - May)</h4>
                <p className="text-slate-400 text-lg leading-relaxed">Focus on conceptual clarity. Complete the arithmetic and reading basics. Master calculation techniques and mental math.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#00FF85] rounded-full border-4 border-slate-950"></div>
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Phase 2: Practice & Sectionals (Jun - Aug)</h4>
                <p className="text-slate-400 text-lg leading-relaxed">Deep dive into Algebra, Geometry, and Logical Puzzles. Start taking sectional mocks twice a week to build stamina.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#00FF85] rounded-full border-4 border-slate-950"></div>
                <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Phase 3: The Mock Marathon (Sep - Nov)</h4>
                <p className="text-slate-400 text-lg leading-relaxed">Transition to full-length mocks. Focus on simulation, time-management, and error analysis with CATRIX high-fidelity mocks.</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">Scoring & Normalization</h2>
            <div className="bg-slate-900 rounded-[4rem] p-16 border border-slate-800">
              <div className="grid md:grid-cols-3 gap-16 text-center">
                <div>
                  <div className="text-5xl font-bold text-[#00FF85] mb-4">+3</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Correct Answer</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-500 mb-4">-1</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Incorrect MCQ</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-4">0</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">TITA / Unattempted</div>
                </div>
              </div>
              <p className="mt-16 text-slate-500 text-center leading-relaxed font-medium italic">
                The raw scores are then normalized across multiple slots to ensure fairness, resulting in a scaled score and a final percentile.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExamInfo;
import React from 'react';

const IIMOverview: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <h1 className="text-6xl font-extrabold text-white tracking-tight mb-6">The <span className="text-[#00FF85]">IIM</span> Hierarchy</h1>
          <p className="text-slate-500 uppercase tracking-[0.3em] text-sm font-bold">Indian Institutes of Management: Data & Insights</p>
        </div>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">Classification of IIMs</h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-12 font-medium">
              There are currently 21 Indian Institutes of Management, established in three waves or "generations." Each generation represents a different level of legacy, alumni network strength, and placement pedigree.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem]">
                <h3 className="text-[#00FF85] font-bold text-2xl mb-6 tracking-tight">Old IIMs</h3>
                <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Tier 1: BLACKI</p>
                <ul className="text-base text-slate-300 space-y-3 list-none p-0">
                  <li>• IIM Ahmedabad</li>
                  <li>• IIM Calcutta</li>
                  <li>• IIM Bangalore</li>
                  <li>• IIM Lucknow</li>
                  <li>• IIM Kozhikode</li>
                  <li>• IIM Indore</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem]">
                <h3 className="text-white font-bold text-2xl mb-6 tracking-tight">New IIMs</h3>
                <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Tier 2</p>
                <ul className="text-base text-slate-300 space-y-3 list-none p-0">
                  <li>• IIM Shillong</li>
                  <li>• IIM Rohtak</li>
                  <li>• IIM Ranchi</li>
                  <li>• IIM Raipur</li>
                  <li>• IIM Trichy</li>
                  <li>• IIM Kashipur</li>
                  <li>• IIM Udaipur</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem]">
                <h3 className="text-white font-bold text-2xl mb-6 tracking-tight">Baby IIMs</h3>
                <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Tier 3</p>
                <ul className="text-base text-slate-300 space-y-3 list-none p-0">
                  <li>• IIM Nagpur</li>
                  <li>• IIM Visakhapatnam</li>
                  <li>• IIM Bodh Gaya</li>
                  <li>• IIM Amritsar</li>
                  <li>• IIM Sirmaur</li>
                  <li>• IIM Sambalpur</li>
                  <li>• IIM Jammu</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">Understanding the Tier System</h2>
            <div className="space-y-8">
              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3.5rem]">
                <h3 className="text-2xl font-bold text-[#00FF85] mb-6">Tier 1: The Legacy Brands</h3>
                <p className="text-slate-400 text-xl leading-relaxed font-medium">
                  These institutes define the global brand of management in India. Characteristics include:
                </p>
                <ul className="mt-6 space-y-4 text-lg text-slate-300">
                  <li className="flex items-start"><span className="text-[#00FF85] mr-3 font-bold">»</span> <strong>Global Alumni Network:</strong> Alumni in CXO positions across Fortune 500 companies.</li>
                  <li className="flex items-start"><span className="text-[#00FF85] mr-3 font-bold">»</span> <strong>Top Recruiters:</strong> Exclusive access to 'Day Zero' roles in Consulting and Investment Banking.</li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3.5rem]">
                <h3 className="text-2xl font-bold text-white mb-6">Tier 2: The Rising Powerhouses</h3>
                <p className="text-slate-400 text-xl leading-relaxed font-medium">
                  Mature academic centers representing:
                </p>
                <ul className="mt-6 space-y-4 text-lg text-slate-300">
                  <li className="flex items-start"><span className="text-[#00FF85] mr-3 font-bold">»</span> <strong>Modern Infrastructure:</strong> State-of-the-art facilities designed for modern management.</li>
                  <li className="flex items-start"><span className="text-[#00FF85] mr-3 font-bold">»</span> <strong>Market Stability:</strong> Consistent placement records rivaling top private B-schools.</li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-12 rounded-[3.5rem]">
                <h3 className="text-2xl font-bold text-white mb-6">Tier 3: The Growth Frontier</h3>
                <p className="text-slate-400 text-xl leading-relaxed font-medium">
                  The youngest institutes focusing on foundation and early growth:
                </p>
                <ul className="mt-6 space-y-4 text-lg text-slate-300">
                  <li className="flex items-start"><span className="text-[#00FF85] mr-3 font-bold">»</span> <strong>Foundational Values:</strong> Adhering to IIM-quality curriculum with local identities.</li>
                  <li className="flex items-start"><span className="text-[#00FF85] mr-3 font-bold">»</span> <strong>Entry Advantage:</strong> Accessible percentiles while maintaining the prestigious IIM degree.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">Placement Statistics (CTC Data)</h2>
            <div className="overflow-x-auto rounded-[3rem] border border-slate-800 shadow-2xl">
              <table className="w-full text-left bg-slate-900/50">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900">
                    <th className="px-10 py-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Category</th>
                    <th className="px-10 py-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Avg. Package (LPA)</th>
                    <th className="px-10 py-8 text-sm font-bold text-slate-500 uppercase tracking-widest">Highest Package (LPA)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-lg">
                  <tr className="border-b border-slate-800/50">
                    <td className="px-10 py-8 font-bold text-white">Top 3 (ABC)</td>
                    <td className="px-10 py-8">₹32.0 - ₹35.5 LPA</td>
                    <td className="px-10 py-8">₹1.1 - ₹1.5 Cr+</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-10 py-8 font-bold text-white">Other Old IIMs</td>
                    <td className="px-10 py-8">₹27.0 - ₹30.0 LPA</td>
                    <td className="px-10 py-8">₹60.0 - ₹85.0 LPA</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="px-10 py-8 font-bold text-white">New IIMs</td>
                    <td className="px-10 py-8">₹18.0 - ₹22.0 LPA</td>
                    <td className="px-10 py-8">₹40.0 - ₹50.0 LPA</td>
                  </tr>
                  <tr>
                    <td className="px-10 py-8 font-bold text-white">Baby IIMs</td>
                    <td className="px-10 py-8">₹14.0 - ₹17.0 LPA</td>
                    <td className="px-10 py-8">₹30.0 - ₹40.0 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">The Shortlisting Algorithm</h2>
            <div className="bg-slate-900 p-12 rounded-[4rem] border border-slate-800">
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                Selection is based on a "Composite Score" (CS). Weightage varies per institute:
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-300 text-lg font-medium">CAT Percentile</span>
                    <span className="text-[#00FF85] font-bold text-xl">35-60%</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-300 text-lg font-medium">Class 10th & 12th Marks</span>
                    <span className="text-[#00FF85] font-bold text-xl">10-25%</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-300 text-lg font-medium">Work Experience</span>
                    <span className="text-[#00FF85] font-bold text-xl">5-15%</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <span className="text-slate-300 text-lg font-medium">Interview Performance</span>
                    <span className="text-[#00FF85] font-bold text-xl">30-50%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-950 p-16 md:p-24 rounded-[5rem] border border-slate-800 text-center">
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">The Verdict</h2>
            <p className="text-slate-400 text-2xl leading-relaxed max-w-4xl mx-auto font-medium">
              Securing a seat in an IIM is not just an academic achievement—it's a lifelong branding. Your journey to this elite circle starts with precision-based preparation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IIMOverview;
import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AssetGenerator } from './components/AssetGenerator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { BrandLogo } from './components/BrandLogo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal/30">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Back to top">
                <BrandLogo className="h-12" variant="colored" />
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#offer" className="text-slate-600 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors">Process</a>
              <a href="#testimonials" className="text-slate-600 hover:text-brand-teal px-3 py-2 text-sm font-medium transition-colors">Results</a>
            </div>
            <div>
              <a 
                href="https://calendly.com/crestudios"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-teal hover:bg-brand-tealLight text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <div id="how-it-works">
           {/* Integrating the Asset Generator as part of the "Experience It" flow */}
          <AssetGenerator />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

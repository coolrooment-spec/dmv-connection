import React from 'react';
import { Button } from './Button';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  const calendlyUrl = "https://calendly.com/crestudios";

  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Creative Studio Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/80 to-brand-navy"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-teal rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-tealLight mb-8 backdrop-blur-sm">
          <Icons.Fast className="w-4 h-4 mr-2" />
          <span className="text-sm font-bold uppercase tracking-wide">Done-For-You Marketing System</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
          Stop Playing Marketer. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tealLight to-green-300">
            Start Running Your Business.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
          We handle everything—videos, graphics, websites, funnels, ads, and campaigns. 
          Get a fully managed marketing department for less than the cost of one employee. 
          Zero effort required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button 
            variant="primary" 
            href={calendlyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="!px-10 !py-4 !text-lg"
          >
            Book Your Free Strategy Call
          </Button>
          <Button 
            variant="outline" 
            className="!text-slate-200 !border-slate-600 hover:!bg-slate-800"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Icons.Check className="w-5 h-5 text-brand-teal" /> No Learning Curve
          </div>
          <div className="flex items-center gap-2">
            <Icons.Check className="w-5 h-5 text-brand-teal" /> Fully Managed
          </div>
          <div className="flex items-center gap-2">
            <Icons.Check className="w-5 h-5 text-brand-teal" /> Results Focused
          </div>
        </div>
      </div>
    </section>
  );
};

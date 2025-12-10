import React from 'react';
import { Button } from './Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-teal to-brand-navy text-center text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold sm:text-5xl mb-6">
          Ready to Automate Your Growth?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          We only take on 5 new "Done-For-You" clients per month to ensure quality. 
          <br className="hidden sm:block" />
          Slots for this month are filling up fast.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            variant="secondary" 
            className="!text-lg !px-12 !py-5 shadow-2xl bg-white !text-brand-navy hover:!bg-blue-50"
            href="https://calendly.com/crestudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim Your Free Strategy Call
          </Button>
          <p className="text-sm text-blue-200 font-medium opacity-80">
            No obligation. Just a clear plan for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

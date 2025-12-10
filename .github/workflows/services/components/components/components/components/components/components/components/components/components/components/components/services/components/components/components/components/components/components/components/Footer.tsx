import React from 'react';
import { Icons } from './Icons';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-400 py-16 border-t border-slate-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="flex flex-col gap-4">
            <BrandLogo className="h-14" variant="white" />
            <p className="text-sm text-slate-500 max-w-xs">
              Connecting Communities. <br/> Empowering Local Businesses.
            </p>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a 
              href="https://drive.google.com/file/d/1X1W0VU3viUP6rHvW4aF-jt8Uwv1aBv4e/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://drive.google.com/file/d/17SOLGCg1kCSTT5Wa3MALf6FaJdHpLcON/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="https://docs.google.com/document/d/1zdGMiAMUX_KXjh6RlzwJky7-sOlht_BZn1dCg-pn1Hs/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-8 border-t border-slate-800/50">
          <p>&copy; {new Date().getFullYear()} DMV Connection. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/teosmoot/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Icons.Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Icons.SocialMedia className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Icons.Email className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

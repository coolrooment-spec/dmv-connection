import React from 'react';
import { Icons } from './Icons';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Verified Client", 
      role: "Business Owner",
      content: "Teo is one of those rare creative types that also understands business strategy. Working with him was seamless, and the quality of work exceeded our expectations. Highly recommend connecting with him.",
      image: "https://picsum.photos/100/100?random=4"
    },
    {
      name: "Satisfied Partner", 
      role: "Marketing Director", 
      content: "DMV Connection helped us elevate our brand identity completely. Teo's background in entertainment brings a unique flavor to the marketing assets that you just don't get with standard agencies.",
      image: "https://picsum.photos/100/100?random=5"
    },
    {
      name: "Long-term Client", 
      role: "CEO", 
      content: "I've worked with Teo on multiple projects and he always delivers. The 'Done-For-You' approach is genuine—he takes the stress out of the creative process so we can focus on operations.",
      image: "https://picsum.photos/100/100?random=6"
    }
  ];

  const linkedinUrl = "https://www.linkedin.com/in/teosmoot/";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wide mb-4">
            <Icons.Linkedin className="w-3 h-3" />
            Verified Social Proof
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-slate-600">
            See what real business owners and partners are saying about working with Teo Smoot and the DMV Connection team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col h-full p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow relative group">
              <div className="absolute top-6 right-6 text-slate-200 group-hover:text-[#0077b5] transition-colors">
                <Icons.Linkedin className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(star => (
                     <div key={star} className="w-4 h-4 text-amber-400 fill-current">★</div>
                   ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50" 
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0077b5] hover:bg-[#006396] transition-colors shadow-sm"
          >
            <Icons.Linkedin className="w-5 h-5 mr-2" />
            Read More Recommendations on LinkedIn
          </a>
          <p className="mt-4 text-xs text-slate-400">
            Click to verify reviews directly on Teo Smoot's profile.
          </p>
        </div>
      </div>
    </section>
  );
};

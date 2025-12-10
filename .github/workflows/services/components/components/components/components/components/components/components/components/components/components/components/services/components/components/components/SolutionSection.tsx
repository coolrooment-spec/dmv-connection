import React from 'react';
import { Icons } from './Icons';

export const SolutionSection: React.FC = () => {
  const services = [
    { icon: Icons.Video, title: "Professional Video", desc: "High-end promotional videos, reels, and social clips filmed and edited for you." },
    { icon: Icons.Design, title: "Custom Graphics", desc: "On-brand social posts, flyers, and ad creatives designed by pros." },
    { icon: Icons.Web, title: "Websites & Funnels", desc: "High-converting landing pages built to turn visitors into paying leads." },
    { icon: Icons.Ads, title: "Paid Ad Campaigns", desc: "Facebook, Instagram, and Google ads managed and optimized daily." },
    { icon: Icons.Social, title: "Social Management", desc: "We post, engage, and grow your audience so you stay visible." },
    { icon: Icons.Email, title: "Email Automation", desc: "Nurture sequences that warm up leads while you sleep." },
  ];

  return (
    <section id="offer" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/20 text-brand-tealLight font-bold text-sm mb-6 border border-brand-teal/20">
              THE SOLUTION
            </div>
            <h2 className="text-3xl font-bold sm:text-5xl mb-6 leading-tight">
              We Do It All. <br/>You Get The Credit.
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              DMV Connection provides a complete marketing ecosystem. We don't just "help" you; we take the burden completely off your shoulders. 
              Imagine having a dedicated team of videographers, designers, and strategists working for your local business every single day.
            </p>
            <div className="p-6 bg-slate-800/60 rounded-xl border-l-4 border-brand-teal backdrop-blur-sm">
              <p className="text-slate-200 italic">
                "We transitioned from Cool Room Entertainment to DMV Connection because we realized our clients didn't just need content—they needed a system to sell it. We bring our entertainment background to make your marketing unignorable."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/40 p-6 rounded-xl hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-brand-teal/50 group">
                <div className="w-12 h-12 rounded-lg bg-brand-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-brand-tealLight" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-brand-tealLight transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

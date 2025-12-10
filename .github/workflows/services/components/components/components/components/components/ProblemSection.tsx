import React from 'react';
import { Icons } from './Icons';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Tired of the "DIY Marketing" Trap?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            You started your business to provide a service, not to spend 20 hours a week fighting with Facebook Ads Manager.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Icons.Time className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">The Time Sink</h3>
            <p className="text-slate-600">
              Spending hours learning Canva, editing videos, and writing emails, only to realize you haven't actually done any paid work today.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Icons.Cross className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Inconsistent Branding</h3>
            <p className="text-slate-600">
              Your website says one thing, your Instagram says another, and your flyers look different from both. It confuses customers and kills trust.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Icons.Rocket className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">No Real Strategy</h3>
            <p className="text-slate-600">
              Throwing spaghetti at the wall. boosting random posts, and hoping for leads. It's gambling, not marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

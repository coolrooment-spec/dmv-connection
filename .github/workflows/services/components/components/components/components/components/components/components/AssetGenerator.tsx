import React, { useState } from 'react';
import { generateMarketingAsset, GenerationType } from '../services/geminiService';
import { Button } from './Button';
import { Icons } from './Icons';

export const AssetGenerator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GenerationType>('email');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedContent('');
    const content = await generateMarketingAsset(activeTab);
    setGeneratedContent(content);
    setLoading(false);
  };

  const tabs: { id: GenerationType; label: string; icon: React.ElementType }[] = [
    { id: 'email', label: 'Email Sequence', icon: Icons.Email },
    { id: 'social', label: 'Social Ads', icon: Icons.SocialMedia },
    { id: 'sms', label: 'SMS Blast', icon: Icons.SMS },
    { id: 'funnel', label: 'Funnel Page', icon: Icons.Funnel },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wide mb-4">
            <Icons.Fast className="w-3 h-3" />
            Interactive Demo
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Experience Our Strategy Engine</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Want a taste of what we create? Select a category below and our AI engine (powered by your future team's strategy) will generate a sample framework for you live.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 relative">
          {/* Powered by Badge */}
          <div className="absolute top-0 right-0 p-2 z-10 hidden sm:block">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">A Cool Room Studios company</span>
            </div>
          </div>

          <div className="grid grid-cols-4 border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setGeneratedContent(''); }}
                className={`p-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-brand-teal/5 text-brand-teal border-b-2 border-brand-teal'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-brand-teal' : 'text-slate-400'}`} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-8 min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800">
                Generate {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              <Button 
                variant="primary"
                onClick={handleGenerate} 
                disabled={loading}
                className="!py-2 !px-4 !text-sm flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Icons.Fast className="w-4 h-4" /> Generate Sample
                  </>
                )}
              </Button>
            </div>

            <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 p-6 font-mono text-sm text-slate-700 overflow-y-auto max-h-[500px] shadow-inner">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-4">
                  <div className="w-8 h-8 border-4 border-brand-teal/20 border-t-brand-teal rounded-full animate-spin"></div>
                  <p className="animate-pulse">Consulting the strategy engine...</p>
                </div>
              ) : generatedContent ? (
                <div className="whitespace-pre-wrap leading-relaxed">
                  {generatedContent}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                  <Icons.Rocket className="w-12 h-12 mb-4 opacity-20" />
                  <p>Click "Generate Sample" to see a draft based on our proven templates.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

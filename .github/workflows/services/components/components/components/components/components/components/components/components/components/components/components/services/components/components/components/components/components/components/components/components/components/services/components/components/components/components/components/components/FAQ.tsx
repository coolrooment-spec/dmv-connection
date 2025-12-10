import React, { useState } from 'react';
import { Icons } from './Icons';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button 
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {isOpen ? (
          <Icons.Up className="w-5 h-5 text-brand-teal" />
        ) : (
          <Icons.Down className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What exactly does 'Done-For-You' mean?",
      answer: "It means zero tech work for you. We write the copy, design the graphics, edit the videos, build the landing pages, set up the automations, and manage the ads. You approve the strategy, we execute everything else."
    },
    {
      question: "Do I need to provide the content?",
      answer: "We handle the heavy lifting. We may need a 1-hour filming session once a quarter (or we can use stock/UGC), but we handle all editing, scripting, and production."
    },
    {
      question: "Is this suitable for a small local business?",
      answer: "Absolutely. Our packages are designed specifically for SMBs, gyms, salons, and service providers who need high-quality marketing without the agency price tag of $10k/month."
    },
    {
      question: "How quickly can we get started?",
      answer: "Once you book your strategy call and we agree on a plan, we can have your new funnel and initial ad campaigns live within 7-10 days."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

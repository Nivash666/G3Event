import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  category?: string;
}

const FAQ = ({ items, category }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {category && (
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
      )}
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 md:p-5 bg-white hover:bg-gray-50 text-left transition-colors duration-300"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-gray-800">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-purple-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 md:p-5 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
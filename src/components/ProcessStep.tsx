import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
          <div className="text-purple-600">{icon}</div>
        </div>
        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
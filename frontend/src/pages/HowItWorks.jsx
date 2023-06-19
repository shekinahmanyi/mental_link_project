import React from 'react';
import Footer from '../components/Footer';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "Create an account on our mental health app.",
    },
    {
      id: 2,
      title: "Step 2",
      description: "Explore our curated content, including guided meditations, stress management techniques, and helpful articles.",
    },
    {
      id: 3,
      title: "Step 3",
      description: "Engage with our supportive community through forums and discussions.",
    },
    {
      id: 4,
      title: "Step 4",
      description: "Track your progress and set personal goals for your mental wellness journey.",
    },
    // Add more steps as needed
  ];

  return (
    <div>
    <div className="pt-24 flex flex-col items-center">
      <h2 className="text-3xl text-green-500 font-bold mb-6">How It Works</h2>
      <div className="max-w-lg mx-auto">
        {steps.map((step, index) => (
          <div key={step.id} className={`flex items-start mb-6 ${index !== steps.length - 1 ? 'border-b-2 pb-4' : ''}`}>
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold">{step.id}</span>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default HowItWorks;

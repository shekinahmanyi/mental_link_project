import React, { useState } from 'react';

function Explore() {
  const [selectedProblem, setSelectedProblem] = useState('');
  const [resources, setResources] = useState([]);

  const handleProblemSelect = (e) => {
    setSelectedProblem(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedProblem.trim() === '') return;

    // Simulated data of resources
    const resourcesData = [
      {
        problem: 'Stress',
        title: 'Overcoming Stress',
        description: 'How to Overcome stress',
        link: 'https://example.com/resource1',
      },
      {
        problem: 'Depression',
        title: 'OverComing Depression',
        description: 'How to overcome Depression',
        link: "https://www.betterhelp.com/advice/depression/identifying-the-physical-symptoms-of-depression-and-what-to-do-about-them/",
      },
      {
        problem: 'Anxiety',
        title: 'Overcoming Anxiety',
        description: 'How to overcome Anxiety',
        link: 'https://example.com/resource3',
      },
      {
        problem: 'Breakup',
        title: 'Breakup challenges',
        description: 'How to overcome breakup',
        link: 'https://example.com/resource4',
      },
      // Add more resources as needed
    ];

    // Filter resources based on the selected problem
    const filteredResources = resourcesData.filter(
      (resource) => resource.problem === selectedProblem
    );

    setResources(filteredResources);
  };

  return (
    <div className="container bg-white max-auto">
      <div className="pt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold font-mono mb-8">Explore Some of Our Resources</h1>
        <form className="max-w-md w-full" onSubmit={handleSearch}>
          <select
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            value={selectedProblem}
            onChange={handleProblemSelect}
          >
            <option value="">Select a Problem</option>
            <option value="Stress">Stress</option>
            <option value="Depression">Depression</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Breakup">Breakup</option>
            {/* Add more problem options as needed */}
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
          >
            Search Resources
          </button>
        </form>
        {resources.length > 0 ? (
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Matching Resources</h2>
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded p-4 mb-4 cursor-pointer"
                onClick={() => window.open(resource.link, '_blank')}
              >
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-500 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resource
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>No matching resources found.</p>
        )}
      </div>
    </div>
  );
}

export default Explore;

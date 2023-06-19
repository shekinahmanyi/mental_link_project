import React from 'react';
import Footer from '../components/Footer';

function OurStory() {
  const testimonies = [
    {
      id: 1,
      name: "John Doe",
      testimony: "The mental app has changed my life. It provided me with valuable resources and a supportive community that helped me overcome my challenges."
    },
    {
      id: 2,
      name: "Jane Smith",
      testimony: "I'm grateful for the mental app. It guided me through various mindfulness exercises and taught me effective coping mechanisms for stress and anxiety."
    },
    // Add more testimonies as needed
  ];

  return (
    <div>
    <div className="pt-24 flex flex-col items-center">
      <h2 className="text-3xl text-green-500 font-bold mb-6">Our Story</h2>
      <div className="max-w-lg mx-auto">
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="bg-green-100 rounded-lg shadow p-6 mb-4">
            <h3 className="text-lg font-semibold">{testimony.name}</h3>
            <p className="text-gray-700">{testimony.testimony}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default OurStory;

import React, { useState } from 'react';


function Community() {
  const [joined, setJoined] = useState(false);
  const [randomFeature, setRandomFeature] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();
    setJoined(true);
    // Additional logic to handle user joining the community
    setRandomFeature(getRandomFeature()); // Set a random feature for the joined user
  };

  const getRandomFeature = () => {
    const features = ['Chat Rooms', 'Mood Tracker', 'Support Groups', 'Guided Meditations'];
    const randomIndex = Math.floor(Math.random() * features.length);
    return features[randomIndex];
  };

 
  return (
    <div className="container bg-white mx-auto">
      <div className="pt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Community Platform!!</h1>
        <p className="text-lg mb-4">
          {joined ? 'You have joined the community!' : 'Join the community and connect with others.'}
        </p>
        {joined ? (
          <div>
            <p className="text-lg mb-4">Random Feature: {randomFeature}</p>
            {/* Add your community content or features here */}
          </div>
        ) : (
          <form className="flex flex-col items-center max-w-md w-full">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
              onClick={handleJoin}
            >
              Join Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Community;

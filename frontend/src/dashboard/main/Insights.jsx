import React, { useState } from 'react';

function Insights() {
  const [moods, setMoods] = useState([]);

  const handleAddMood = (e) => {
    e.preventDefault();
    const mood = e.target.elements.mood.value;
    const date = new Date();
    const moodEntry = {
      mood,
      day: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    setMoods([...moods, moodEntry]);
    e.target.reset();
  };

  return (
    <div className="container bg-white mx-auto">
      <div className="pt-32 flex flex-col items-center">
        <h1 className="text-4xl mb-8">Can you please tell us what your mood is today?</h1>
        <form className="flex flex-col items-center max-w-md w-full" onSubmit={handleAddMood}>
          <input
            type="text"
            name="mood"
            className="border border-gray-300 rounded py-2 px-4 mb-4 w-full"
            placeholder="Add your mood"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4">
            Add Mood
          </button>
        </form>
        <div className="mt-8">
          {moods.length > 0 ? (
            <ul className="list-disc list-inside">
              {moods.map((mood, index) => (
                <li key={index}>
                  Mood: {mood.mood} - Day: {mood.day} - Time: {mood.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No moods added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Insights;

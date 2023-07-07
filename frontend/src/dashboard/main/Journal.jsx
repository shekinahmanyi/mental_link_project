import React, { useState } from 'react';

function Journal() {
  const [note, setNote] = useState('');
  const [entries, setEntries] = useState([]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (note.trim() === '') return;
    const entry = {
      timestamp: new Date().toLocaleString(),
      content: note,
    };
    setEntries([...entries, entry]);
    setNote('');
  };

  return (
    <div className="container bg-white max-auto">
      <div className="pt-32 flex flex-col items-center">
        <h1 className="text-4xl font-mono mb-8">My Personal Notes</h1>
        <form className="max-w-md w-full" onSubmit={handleAddEntry}>
          <textarea
            className="border border-gray-300 rounded p-4 mb-4 w-full"
            placeholder="Write your private note here..."
            value={note}
            onChange={handleNoteChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
          >
            Add Entry
          </button>
        </form>
        {entries.length > 0 ? (
          <ul className="max-w-md w-full">
            {entries.map((entry, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <p className="text-gray-500 mb-2">{entry.timestamp}</p>
                <p>{entry.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No entries yet.</p>
        )}
      </div>
    </div>
  );
}

export default Journal;

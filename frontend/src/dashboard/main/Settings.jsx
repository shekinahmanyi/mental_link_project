import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Additional logic to toggle dark mode theme in your application
  };

  const handleShareOnSocialMedia = () => {
    // Logic to share on social media
    console.log('Share on social media');
  };

  const handleLogout = () => {
    // Logic to handle logout
    console.log('Logout');
  };

  const handleSupport = () => {
    // Logic to provide support
    console.log('Provide support');
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'} bg-white mx-auto`}>
      <div className="pt-24 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-lg">Dark Mode</p>
            <label className="switch">
              <input type="checkbox" onChange={handleDarkModeToggle} checked={darkMode} />
              <span className="slider round"></span>
            </label>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
            onClick={handleShareOnSocialMedia}
          >
            Share on Social Media
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded py-2 px-4"
            onClick={handleLogout}
          >
            Log Out
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded py-2 px-4"
            onClick={handleSupport}
          >
            Provide Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;

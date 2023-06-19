import React from 'react';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
    <div className="p-24 flex flex-col items-center bg-green-100">
      <div className=" mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-green-500 text-center">About Us</h2>
        <p className="text-gray-700 mb-6">
          Welcome to our mental health app!
        </p>
        <p className="text-gray-700 mb-6">
          Our app is designed to provide support and resources for individuals seeking to improve their mental well-being.
          Whether you are looking for guided meditations, stress management techniques, or helpful articles, our app has you covered.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to empower individuals to take control of their mental health by providing them with accessible tools
          and a supportive community.
        </p>
        <p className="text-gray-700 mb-6">
          Feel free to explore the app, join our community forums, and engage with our curated content. We believe that
          taking care of your mental health is a journey, and we're here to support you every step of the way.
        </p>
        <p className="text-gray-700">
          Start your mental wellness journey today with our app!
        </p>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;

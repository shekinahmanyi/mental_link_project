import React from "react";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import mission from "../assets/images/mission.jpg";

function OurStory() {
  return (
    <div>
      <div className="container text-center mt-14">
      <h1 className="text-2xl text-blue-500 mb-2 md:mb-3 font-mono">
        Testimonials!!
      </h1>
      <p className="text-base text-gray-500 font-sans">
        Our mental health app has been a transformative experience for our Users and
        many others.<br/> It provides a safe and supportive space where individuals
        can access invaluable <br/> resources and connect with a compassionate
        community and mental health Professionals.
      </p>
      </div>
      <p className="text-center text-3xl mt-6 font-mono text-gray-600">What Some of our Users Say</p>
      <section className="bg-white py-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
          <Fade left duration={4000}>
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-2xl text-blue-300 mb-2 md:mb-2 font-mono">
                Who We Are!!
              </h1>
              <h2 className="text-2xl text-blue-500 font-bold mb-2 md:mb-4 font-sans">
                About Us
              </h2>
              <p className="text-base text-gray-400">
                Welcome to our mental health app! Our app is designed to provide
                support and resources for individuals seeking to improve their
                mental well-being. Whether you are looking for guided
                meditations, stress management techniques, or helpful articles,
                our app has you covered.
              </p>
            </div>
          </Fade>
          <Fade right duration={4000}>
            <div className="w-full md:w-1/2">
              <img src={mission} alt="Question" className="w-full h-auto" />
            </div>
          </Fade>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OurStory;

import React from "react";
import Footer from "../components/Footer";
import h5 from "../assets/images/h5.jpg";
import mission from "../assets/images/mission.jpg";
import { Fade } from "react-awesome-reveal";
import h8 from "../assets/images/h8.jpg";

function About() {
  return (
    <div>
      <div className="p-4 flex flex-col items-center">
        {/* SECTION 1*/}

        <section className="bg-white py-4">
          <Fade left duration={4000}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-2xl text-blue-300 mb-2 md:mb-2 font-mono">
                  Who We Are!!
                </h1>
                <h2 className="text-2xl text-blue-500 font-bold mb-2 md:mb-4 font-sans">
                  About Us
                </h2>
                <p className="text-base text-gray-400">
                  Welcome to our mental health app! Our app is designed to
                  provide support and resources for individuals seeking to
                  improve their mental well-being. Whether you are looking for
                  guided meditations, stress management techniques, or helpful
                  articles, our app has you covered.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={h5} alt="Question" className="w-full h-auto" />
              </div>
            </div>
          </Fade>
        </section>

        {/* SECTION 2*/}
        <section className="bg-white py-4">
          <Fade left duration={4000}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <img src={mission} alt="Question" className="w-full h-auto" />
              </div>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-4 font-sans">
                  Our Mission
                </h2>
                <p className="text-base text-gray-400">
                  Our mission is to empower individuals to take control of their
                  mental health by providing them with accessible tools and a
                  supportive community and Mental-Health Professionals!
                </p>
              </div>
            </div>
          </Fade>
        </section>

        {/* SECTION 3*/}
        <section className="bg-white py-4">
          <Fade left duration={4000}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-4 font-sans">
                  Contact Us!
                </h2>
                <p className="text-base text-gray-400">
                  Reach out to us through our Contact Us page to connect with
                  our caring professionals who are ready to listen, provide
                  guidance, and ensure your mental well-being is prioritized.
                  Your journey to better mental health starts with a simple
                  message. We're here for you.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={h8} alt="Question" className="w-full h-auto" />
              </div>
            </div>
          </Fade>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;

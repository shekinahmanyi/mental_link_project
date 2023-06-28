import React from "react";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import h7 from "../assets/images/h7.jpg";

function HowItWorks() {
  return (
    <div>
      <div className="pt-8 flex flex-col items-center">
        <h1 className="text-3xl text-center font-mono text-gray-600">
          Let's Get Started With How it works!!
        </h1>
        {/* SECTION 1*/}
        <section className="bg-white py-4">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
            <Fade left duration={4000}>
              <div className="w-full md:w-1/2">
                <img src={h7} alt="Question" className="w-full h-auto" />
              </div>
            </Fade>
            <Fade right duration={4000}>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-4 md:mb-4 font-sans">
                  01.
                </h2>
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-4 font-sans">
                  Create an Account
                </h2>
                <p className="text-base text-gray-400">
                  To begin, you'll need to create an account by signing in to
                  our platform. If you already have an account, click here to
                  login into your dashboard and then get started by exploring
                  our resources.
                </p>
              </div>
            </Fade>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HowItWorks;

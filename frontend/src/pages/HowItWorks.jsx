import React from "react";
import Footer from "../components/Footer";
import { Slide } from "react-awesome-reveal";
import h7 from "../assets/images/h7.jpg";
import login from "../assets/images/login.jpg";
import explore from "../assets/images/explore.jpg";
import community from "../assets/images/community.jpg";


function HowItWorks() {
  return (
    <div>
      <div className="pt-8 flex flex-col items-center">
        <h1 className="text-3xl text-center font-mono text-gray-600">
          Let's Get Started With How it works!!
        </h1>

        {/* SECTION 1*/}
        <section className="bg-white py-4">
          <Slide left duration={1000}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <img src={h7} alt="Question" className="w-full h-auto" />
              </div>
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
            </div>
          </Slide>
        </section>

        {/* SECTION 2*/}
        <section className="bg-white py-4">
          <Slide left duration={1000}>
            <div className="container mx-auto px-4 md:px-4 lg:px-8 flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-4 md:mb-4 font-sans">
                  02.
                </h2>
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-4 font-sans">
                  Login to your Account
                </h2>
                <p className="text-base text-gray-400">
                  To begin, you'll need to create an account by signing in to
                  our platform. If you already have an account, click here to
                  login into your dashboard and then get started by exploring
                  our resources.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={login} alt="Question" className="w-full h-auto" />
              </div>
            </div>
          </Slide>
        </section>

        {/* SECTION 3*/}
        <section className="bg-white py-4">
          <Slide left duration={1000}>
            <div className="container mx-auto px-4 md:px-4 lg:px-8 flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <img src={explore} alt="Question" className="w-full h-auto" />
              </div>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-4 md:mb-4 font-sans">
                  03.
                </h2>
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-4 font-sans">
                  Explore Resources on the Dashboard
                </h2>
                <p className="text-base text-gray-400">
                  To begin, you'll need to create an account by signing in to
                  our platform. If you already have an account, click here to
                  login into your dashboard and then get started by exploring
                  our resources.
                </p>
              </div>
            </div>
          </Slide>
        </section>

        {/* SECTION 4*/}
        <section className="bg-white py-4">
          <Slide left duration={1000}>
            <div className="container mx-auto px-4 md:px-4 lg:px-8 flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-4 md:mb-4 font-sans">
                  04.
                </h2>
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-4 font-sans">
                  Join the Community
                </h2>
                <p className="text-base text-gray-400">
                  To begin, you'll need to create an account by signing in to
                  our platform. If you already have an account, click here to
                  login into your dashboard and then get started by exploring
                  our resources.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img src={community} alt="Question" className="w-full h-auto" />
              </div>
            </div>
          </Slide>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HowItWorks;

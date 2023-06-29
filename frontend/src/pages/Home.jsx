import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import h1 from "../assets/images/h1.png";
import h2 from "../assets/images/h2.png";
import h4 from "../assets/images/h4.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="relative w-full h-full mb-2">
          <img
            src={h4}
            alt="Mental Health"
            className="w-full h-full object-cover filter blur-0"
          />
        </div>
        <section className="bg-white py-4">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl text-blue-500 font-bold mb-4 md:mb-6 font-mono">
                  What is Mental Health?
                </h2>
                <p className="text-base text-gray-400">
                  Mental health is more than just the absence of mental
                  illness. It is a state of well-being in which people are able
                  to think, feel, and act in ways that are positive and
                  productive. Mental health is important for everyone,
                  regardless of age, race, gender, or socioeconomic status.
                </p>
                <h2 className="text-2xl text-blue-500 font-bold mt-12 mb-4 md:mb-8 font-mono">
                  How it Affects Us
                </h2>
                <p className="text-base text-gray-400">
                  Mental health affects us in many ways. It can affect our
                  thoughts, feelings, and behaviors. It can also affect our
                  relationships, our work, and our overall quality of life.
                  Mental health plays a crucial role in our day-to-day
                  activities. When our mental health is compromised, it can
                  impact various aspects of our lives, and a lack of interest in
                  activities we once enjoyed.
                </p>
              </div>
          
           
              <div className="w-full md:w-1/2">
                <img src={h1} alt="Question" className="w-full h-auto" />
              </div>
          
          </div>
        </section>

        {/* SECTION2 */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <img src={h2} alt="Help" className="w-full h-auto" />
              </div>
          
              <div className="w-full md:w-1/2 mb-8 md:mb-4">
                <h2 className="text-2xl text-green-500 font-bold mt-12 mb-4 md:mb-4 font-mono">
                  How MentalLink Can help You?
                </h2>
                <p className="text-base text-gray-400">
                  It conveys the idea of connecting people with resources and
                  support, and the <b>Link</b> element suggests the platform's
                  ability to bridge the gap between individuals and the care
                  they need for mental health and wellbeing. Additionally, the
                  use of <b>Mental</b> in the name helps to convey the focus of
                  the platform on mental health, while the name is also catchy
                  and easy to remember.
                </p>
                <h2 className="text-2xl text-green-500 font-bold mt-12 mb-4 md:mb-4 font-mono">
                  So, What Next?
                </h2>
                <p className="text-base text-gray-400">
                  Sign in to our platform today and embark on a transformative
                  journey towards holistic mental well-being. Gain unlimited
                  access to a wealth of invaluable resources, while receiving
                  personalized guidance from compassionate mental health
                  specialists who will accompany you every step of the way.
                  Rediscover a life filled with purpose, joy, and resilience by
                  taking the first empowering step towards prioritizing your
                  mental health.
                </p>
              </div>
          </div>
        </section>

        {/* Did You Know Card Section */}
        <section className="bg-white py-8 mt-8 mb-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Slide direction="up" duration={3000}>
              <div className="bg-green-100 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl text-blue-500 font-bold mb-4 text-center font-mono">
                  Did You Know?
                </h2>
                <p className="text-base text-gray-500 text-center font-mono">
                  Prayer can be a powerful tool when facing these mental health
                  issues. Taking just 10 seconds to talk to God about your
                  struggles can bring comfort and reassurance, knowing that He
                  is always there for you and will never leave your side. So
                  don't hesitate to try that now!!🤭
                </p>
              </div>
            </Slide>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

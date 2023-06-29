import React from "react";
import Footer from "../components/Footer";
import h9 from "../assets/images/h9.jpg";
import h10 from "../assets/images/h10.jpg";
import h11 from "../assets/images/h11.jpg";

function OurStory() {
  return (
    <div>
      <div className="container text-center mt-14">
        <h1 className="text-2xl text-blue-500 mb-2 md:mb-3 font-mono">
          Testimonials!!
        </h1>
        <p className="text-base text-gray-500 font-sans">
          Our mental health app has been a transformative experience for our
          Users and many others.
          <br /> It provides a safe and supportive space where individuals can
          access invaluable <br /> resources and connect with a compassionate
          community and mental health Professionals.
        </p>
      </div>
      <p className="text-center text-2xl mt-6 font-mono text-gray-800">
        What Some of Our Users Say
      </p>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TestimonialCard
            image={h9}
            name="John Doe"
            review="The mental health app has been a game changer for me. It has provided me with the tools and resources to manage my anxiety effectively. I highly recommend it to anyone in need of mental health support."
          />
          <TestimonialCard
            image={h10}
            name="Jane Smith"
            review="I've been using this app for a few months now, and it has greatly helped me in my journey to overcome depression. The articles and community support have been invaluable. Thank you for creating such a wonderful platform!"
          />
          <TestimonialCard
            image={h11}
            name="Alex Johnson"
            review="As someone who struggles with stress on a daily basis, I can't express how grateful I am for this app. It has guided me through various relaxation techniques and provided me with a sense of calm and peace. It's a must-have for anyone dealing with stress."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function TestimonialCard({ image, name, review }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold my-4">{name}</h3>
      <p>{review}</p>
      <div className="flex mt-4">{renderStars()}</div>
    </div>
  );
}

function renderStars() {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return stars.map((star) => (
    <svg
      key={star}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M10 1L12.55 6.39L18.37 7.1C19.2 7.19 19.57 8.14 19.03 8.69L14.91 12.48L15.83 18.29C15.9 19.14 15.09 19.72 14.39 19.38L10 17.39L5.61 19.38C4.91 19.72 4.1 19.14 4.17 18.29L5.09 12.48L0.97 8.69C0.43 8.14 0.8 7.19 1.63 7.1L7.45 6.39L10 1Z"
        clipRule="evenodd"
      />
    </svg>
  ));
}

export default OurStory;

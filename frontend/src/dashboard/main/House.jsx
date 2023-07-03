import React from "react";
import { Link } from "react-router-dom";

function House() {
  return (
    <div className="container bg-white max-auto">
      <div className="pt-24 flex flex-col">
        <h1 className="text-2xl p-8">Hello Shekinah!!</h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 max-w-xl mt-8">
          <Link to="/articles/stress" className="bg-transparent p-6 rounded-md">
            <h3 className="text-base mb-4">Stress</h3>
          </Link>
          <Link
            to="/articles/anxiety"
            className="bg-transparent p-6"
          >
            <h3 className="text-base mb-4">Anxiety</h3>
          </Link>
          <Link
            to="/articles/depression"
            className="bg-transparent p-6"
          >
            <h3 className="text-base mb-4">Depression</h3>
          </Link>
          <Link to="/articles/sleep" className="bg-transparent p-6">
            <h3 className="text-base mb-4  opacity-60">Sleep</h3>
          </Link>
          <Link
            to="/articles/breakup"
            className="bg-transparent p-6"
          >
            <h3 className="text-base mb-4 ">Breakup</h3>
          </Link>
          <Link to="/articles/others" className="bg-transparent p-6 rounded-md">
            <h3 className="text-base mb-4 ">Others</h3>
          </Link>
        </div>
      </div>
      <section className="py-8 mt-8 mb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="opacity-50 rounded-lg shadow-sm p-6">
            <p className="text-3xl text-center font-mono">
              Remember, self-care is not selfish. Prioritizing your mental
              health is an essential part of maintaining overall well-being.
              Take time each day to engage in activities that bring you joy,
              peace, and relaxation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default House;

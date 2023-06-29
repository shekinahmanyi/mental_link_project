import React from 'react';
import { Link } from 'react-router-dom';

function House() {
  return (
    <div className='container bg-indigo-900 max-auto'>
    <div className="pt-24 flex flex-col text-white">
      <h1 className=''>Hello Shekinah</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 max-w-xl mt-8">
        <Link to="/articles/stress" className="bg-transparent p-6 rounded-md">
          <h3 className="text-base opacity-80 mb-4">Stress</h3>
        </Link>
        <Link to="/articles/anxiety" className="bg-transparent p-6 rounded-md">
          <h3 className="text-base mb-4 opacity-60">Anxiety</h3>
        </Link>
        <Link to="/articles/depression" className="bg-transparent p-6 rounded-md">
          <h3 className="text-base mb-4  opacity-60">Depression</h3>
        </Link>
        <Link to="/articles/sleep" className="bg-transparent p-6 rounded-md">
          <h3 className="text-base mb-4  opacity-60">Sleep</h3>
        </Link>
        <Link to="/articles/breakup" className="bg-transparent p-6 rounded-md">
          <h3 className="text-base mb-4  opacity-60">Breakup</h3>
        </Link>
        <Link to="/articles/others" className="bg-transparent p-6 rounded-md">
          <h3 className="text-base mb-4  opacity-60">Others</h3>
        </Link>
      </div>
    </div>
    <section className="py-8 mt-8 mb-12">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <div className="bg-blue-800 rounded-lg shadow-lg p-6">
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
          </div>
        </section>

    </div>
  );
}

export default House;

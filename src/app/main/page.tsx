"use client";

import React from "react";

const MainPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Main Home Page
          </h1>
          <p className="text-lg mb-8">
            Explore our amazing platform and discover what we offer!
          </p>
          <a
            href="#features"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features You'll Love
          </h2>
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-600">
                Description of the first amazing feature of your platform.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-600">
                Description of the second amazing feature of your platform.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-600">
                Description of the third amazing feature of your platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;

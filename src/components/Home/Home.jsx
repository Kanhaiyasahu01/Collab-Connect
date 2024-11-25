import React from 'react';
import { Link } from 'react-router-dom';
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-richblack-900 via-purple-800 to-purple-900 text-white min-h-screen flex flex-col justify-center items-center">
      {/* Tagline */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Team Mates and <br />
          Bring Your Ideas to Life
        </h1>
      </div>

      {/* Join Button */}
      <Link to="/login">
        <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300">
          Join Us
        </button>
      </Link>

      {/* Member Count */}
      <div className="flex items-center mt-6 gap-3">
        <div className="flex -space-x-3">
          <img
            src={avatar1}
            alt="Avatar 1"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src={avatar2}
            alt="Avatar 2"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src={avatar3}
            alt="Avatar 3"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <p className="text-sm text-gray-300">
          <span className="text-white font-bold">25,390</span> aspiring entrepreneurs have joined us
        </p>
      </div>

      {/* Idea & Join Project Sections */}
      <div className="flex mt-16 gap-8">
        {/* "I have an idea" Section */}
        <div className="bg-purple-800 text-white p-8 rounded-lg shadow-lg w-1/2">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-yellow-400 mr-2">💡</span> I have an idea
          </h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2">
            <li>Create your project card</li>
            <li>Assemble a team with the right roles</li>
            <li>Turn your vision into a thriving startup together</li>
          </ol>
        </div>

        {/* "I want to join a project" Section */}
        <div className="bg-purple-800 text-white p-8 rounded-lg shadow-lg w-1/2">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-yellow-400 mr-2">🤝</span> I want to join a project
          </h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2">
            <li>Explore diverse and innovative projects</li>
            <li>Apply to teams that match your skills and passion</li>
            <li>Contribute to impactful projects from day one</li>
          </ol>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-12 text-purple-300 italic text-center">
        Transform Ideas into Action, <span className="text-yellow-400">Collaborate</span> and{" "}
        <span className="text-yellow-400">Innovate</span> 🚀 Build the{" "}
        <span className="text-yellow-400">Startup of Your Dreams</span> Today!
      </p>
    </div>
  );
};

export default Home;

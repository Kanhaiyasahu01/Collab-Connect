import React from "react";
import { Link } from "react-router-dom";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import { FaTrophy } from "react-icons/fa";
import CodeBlocks from "./CodeBlock";
import HighlightText from "./HighlightText";

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
        <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300 flex gap-2 items-center">
          <FaTrophy />
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
          <span className="text-white font-bold">25,390</span> aspiring
          entrepreneurs have joined us
        </p>
      </div>

      {/* Idea & Join Project Sections */}
      <div className="flex flex-wrap mt-16 gap-8 md:w-[1100px] ">
        {/* "I have an idea" Section */}
        <div className="bg-gradient-to-b from-purple-900 to-richblack-800 text-white p-8 rounded-lg shadow-lg flex-1">
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
        <div className="bg-gradient-to-b from-purple-900 to-richblack-800 text-white p-8 rounded-lg shadow-lg flex-1">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-yellow-400 mr-2">🤝</span> I want to join a
            project
          </h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2">
            <li>Explore diverse and innovative projects</li>
            <li>Apply to teams that match your skills and passion</li>
            <li>Contribute to impactful projects from day one</li>
          </ol>
        </div>
      </div>

      {/* Footer Text */}
      <p className="my-10 text-richblack-100 italic text-center">
        Transform Ideas into Action,{" "}
        <span className="text-yellow-400">Collaborate</span> and{" "}
        <span className="text-yellow-400">Innovate</span> 🚀 Build the{" "}
        <span className="text-yellow-400">Startup of Your Dreams</span> Today!
      </p>


      {/* Code Section 1 */}
      <div className="bg-richblack-900 w-full flex justify-center px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="md:max-w-[1100px] max-w-6xl">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold text-center lg:text-left">
                Build Your <HighlightText text={"Dream Team"} /> with Collab
                Connect.
              </div>
            }
            subheading={
              "Connect with like-minded innovators, share your ideas, and work together to turn your vision into reality. Join a project or create your own startup journey today!"
            }
            ctabtn1={{
              btnText: "Start Your Journey",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Explore Projects",
              link: "/dashboard",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<html lang="en">\n<head>\n<title>Collab Connect</title>\n</head>\n<body>\n<h1>Welcome to Collab Connect</h1>\n<nav>\n<a href="/ideas">I Have an Idea</a>\n<a href="/join">Join a Project</a>\n<a href="/community">Community</a>\n</nav>\n</body>\n</html>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
                {/* Code Section 2 */}

      </div>
      {/* code section 2 */}

    </div>
  );
};

export default Home;

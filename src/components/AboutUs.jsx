import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-richblack-900 min-h-screen text-white flex flex-col items-center py-10 px-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-richblack-400 text-lg leading-relaxed mb-6">
          Welcome to <span className="text-yellow-500 font-semibold">Collab Connect</span>, a platform dedicated to connecting like-minded individuals and fostering collaboration on exciting projects. Our mission is to create a space where ideas come to life, and people from diverse backgrounds can unite to make an impact.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Our Vision</h2>
        <p className="text-richblack-400 text-lg leading-relaxed mb-6">
          We aim to build a community that thrives on creativity, innovation, and shared passions. By bridging the gap between professionals, students, and enthusiasts, we empower users to collaborate, learn, and grow together.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">What We Offer</h2>
        <ul className="list-disc list-inside text-richblack-400 text-lg mb-6 space-y-3">
          <li>Smart matching based on interests, skills, and goals.</li>
          <li>Tools to facilitate project collaboration and management.</li>
          <li>A vibrant community of creators and innovators.</li>
          <li>Secure and intuitive platform design for all users.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Our Journey</h2>
        <p className="text-richblack-400 text-lg leading-relaxed mb-6">
          Founded with the vision to simplify networking and collaboration, our journey began as a small idea among a group of friends. Today, we are proud to see our platform evolve into a thriving community where people come together to achieve extraordinary things.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-yellow-500">Join Us</h2>
        <p className="text-richblack-400 text-lg leading-relaxed">
          Become a part of our growing community and start building meaningful connections today. Whether you’re looking to find collaborators, start a project, or simply explore new opportunities, <span className="text-yellow-500 font-semibold">Collab Connect</span> is here for you.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

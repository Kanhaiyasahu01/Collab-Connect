import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TbWorld } from "react-icons/tb";

import { projectsData } from "../../utils/projects";
import Modal from "../Modal";

const ViewProject = () => {
  const { id } = useParams();

  // Find the selected project by ID
  const selectedProject = projectsData.find(
    (project) => project.id === parseInt(id)
  );

  if (!selectedProject) {
    return (
      <div className="text-center text-white mt-10">Project not found...</div>
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="p-6 bg-richblack-900 text-white h-full">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mt-4">{selectedProject.title}</h1>
          <p className="text-richblack-200 mt-4">
            {selectedProject.description}
          </p>

          <div className="text-richblack-200 flex gap-2 my-2">
            <p>Category:</p>
            <p>{selectedProject.category}</p>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex gap-2 my-2 text-richblack-200">
              <p>Created By:</p>
              <p>{selectedProject.createdBy}</p>
            </div>

            <div className="flex gap-2 my-2 text-richblack-200">
              <p>Created At:</p>
              <p>{selectedProject.createdAt}</p>
            </div>

            <div className="text-yellow-100 flex gap-2 items-center">
              <TbWorld />
              English
            </div>
          </div>

          <div className="bg-richblack-800 p-6 mt-2 rounded-lg shadow-md w-full ">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Project Goals
            </h3>
            <ul className="list-disc pl-5">
              {selectedProject.projectGoals.map((item, index) => (
                <li key={index} className="text-richblack-200 text-lg mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Roles Available */}
          <h3 className="text-lg font-semibold mt-6">Roles Available</h3>
          <div className="space-y-4">
            {selectedProject.rolesAvailable.map((role, index) => (
              <div
                key={index}
                className="bg-richblack-700 p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{role.role}</h4>
                    <p className="text-richblack-200">{role.description}</p>
                  </div>
                  <button 
                   onClick={toggleModal}
                  className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500">
                    Apply
                  </button>
                </div>
                <div className="flex gap-2">
                  <p className="text-richblack-200">Skills Required:</p>
                  <ul className="flex gap-4 items-center">
                    {role.requirements.map((requirement, idx) => (
                      <li
                        className="bg-yellow-100 rounded-lg text-richblack-900 px-1"
                        key={idx}
                      >
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm bg-yellow-100 rounded-xl px-1 text-richblack-900">
                    {role.isRemote ? "Remote" : "On-site"}
                  </span>
                  <span className="font-bold text-richblack-200">
                    {role.salary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 bg-richblack-700 p-6 rounded-lg shadow-lg relative">
          {/* Project Image */}
          <img
            src={selectedProject.imageSrc}
            alt={selectedProject.title}
            className="rounded-lg object-cover w-full mb-6 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md shadow-richblack-200"
          />

          {/* Project Details */}
          <h2 className="text-2xl font-bold text-purple-100 mb-4">
            Project Details
          </h2>
          <div className="border-b border-gray-700 pb-4 mb-4">
            <p className="text-richblack-200">
              <strong className="text-richblack-100">Category:</strong>{" "}
              {selectedProject.category}
            </p>
            <p className="text-richblack-200">
              <strong className="text-richblack-100">Created By:</strong>{" "}
              {selectedProject.createdBy}
            </p>
            <p className="text-richblack-200">
              <strong className="text-richblack-100">Team Size:</strong>{" "}
              {selectedProject.teamSize}
            </p>
            <p className="text-richblack-200">
              <strong>Timeline:</strong> {selectedProject.timeline}
            </p>
            <p className="text-richblack-200">
              <strong className="text-richblack-100">Budget:</strong>{" "}
              {selectedProject.budget}
            </p>
          </div>

          {/* Team Members */}
          <h3 className="text-xl font-semibold text-purple-100 mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Team Members
          </h3>
          <ul className="space-y-4">
            {selectedProject.teamMembers.map((member, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-all duration-200"
              >
                <div>
                  <strong className="text-yellow-300">{member.name}</strong> -{" "}
                  <span className="text-richblack-200">{member.role}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </li>
            ))}
          </ul>

          {/* Status Tags */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">
              Status Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.statusTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-500 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Updates */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">
              Project Updates
            </h3>
            <div className="space-y-2">
              {selectedProject.projectUpdates.map((update, index) => (
                <div key={index} className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-richblack-200">
                    <strong>{update.updateDate}:</strong> {update.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">
              Contact
            </h3>
            <p className="text-richblack-200">
              Email: {selectedProject.contact.email}
            </p>
            <p className="text-richblack-200">
              Phone: {selectedProject.contact.phone}
            </p>
            <a
              href={selectedProject.contact.LinkedIn}
              className="text-purple-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: {selectedProject.createdBy}
            </a>
          </div>

          {/* Subtle Floating Animation */}
          <div className="absolute top-2 left-2 h-10 w-10 bg-yellow-500 rounded-full animate-pulse opacity-70"></div>
        </div>
      </div>


        {/* Use the Modal Component */}
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="text-2xl text-white font-semibold mb-4">Apply for the Role</h2>
        <p className="text-richblack-200 mb-4">
          Are you sure you want to apply for this role? Fill out the application form.
        </p>
        {/* Add form or other content */}
      </Modal>
    </div>
  );
};

export default ViewProject;

import React from "react";
import { useParams } from "react-router-dom";
import { TbWorld } from "react-icons/tb";

import { projectsData } from "../../utils/projects";

const ViewProject = () => {
  const { id } = useParams();
  
  // Find the selected project by ID
  const selectedProject = projectsData.find((project) => project.id === parseInt(id));

  if (!selectedProject) {
    return <div className="text-center text-white mt-10">Project not found...</div>;
  }

  return (
    <div className="p-6 bg-richblack-900 text-white h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mt-4">{selectedProject.title}</h1>
          <p className="text-richblack-200 mt-4">{selectedProject.description}</p>

        
        <div className="text-yellow-200 flex gap-2 my-2">
          <p>Category:</p> 
          <p>{selectedProject.category}</p>
        </div>

<div className="flex gap-4 items-center ">
<div className=" flex gap-2 my-2 text-richblack-200">
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

          {/* Roles Available */}
          <h3 className="text-lg font-semibold mt-6">Roles Available</h3>
          <ul className="list-disc pl-6 mt-2">
            {selectedProject.rolesAvailable.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 bg-gray-800 p-4 rounded-lg shadow-lg">
          <img
            src={selectedProject.imageSrc}
            alt={selectedProject.title}
            className="rounded-lg object-cover w-full mb-4"
          />

          <h2 className="text-xl font-semibold mb-2">Project Details</h2>
          <p>
            <strong>Category:</strong> {selectedProject.category}
          </p>
          <p>
            <strong>Created By:</strong> {selectedProject.createdBy}
          </p>
          <p>
            <strong>Team Size:</strong> {selectedProject.teamSize}
          </p>

          {/* Team Members */}
          <h3 className="text-lg font-semibold mt-4">Team Members</h3>
          <ul className="mt-2">
            {selectedProject.teamMembers.map((member, index) => (
              <li key={index}>
                <strong>{member.name}</strong> - {member.role}
              </li>
            ))}
          </ul>

          {/* Status Tags */}
          <div className="mt-4">
            {selectedProject.statusTags.map((tag, index) => (
              <span
                key={index}
                className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg text-sm mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;

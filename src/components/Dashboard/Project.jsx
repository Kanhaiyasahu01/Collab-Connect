import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import right arrow icon
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  console.log("projects", project);

  return (
    <Link to={`/dashboard/project/${project.id}`}>
      <div className="bg-richblack-800  shadow-md shadow-richblack-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:shadow-richblack-200 hover:scale-101">
        {/* Flex container for image and content */}
        <div className="relative flex">
          {/* Right Arrow Icon */}
          <Link to={`/dashboard/project/${project.id}`}>
            <div className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full">
              <FaArrowRight size={20} />
            </div>
          </Link>

          {/* Image */}
          <div className="w-1/3 h-auto">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-2/3 p-6">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-white mb-2">
              {project.title}
            </h1>

            {/* Description */}
            <div className="mt-3">
              <p className="text-white font-bold">Description:</p>
              <p className="text-white mb-4 mt-1">{project.description}</p>
            </div>

            <div className="flex justify-between items-center">
              <div>
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-medium text-yellow-500">Category:</span>
                  <span className="text-white">{project.category}</span>
                </div>

                {/* Created By */}
                <div className="flex items-center gap-2">
                  <span className="font-medium text-yellow-500">
                    Created By:
                  </span>
                  <span className="text-white font-bold">
                    {project.createdBy}
                  </span>
                </div>
              </div>

              {/* Status Tags */}
              <div className="flex space-x-2">
                {project.statusTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-purple-100 text-black text-xs font-semibold rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;

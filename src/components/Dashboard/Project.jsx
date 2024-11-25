import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="bg-richblack-800 border-white border-[2px] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-36">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-white mb-2">
          {project.title}
        </h1>

        {/* Description */}
    <div className='mt-3'>
    <p className='text-white font-bold'>Description: </p>
        <p className="text-white mb-4 mt-1">{project.description}</p>

    </div>
        {/* Category */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-medium text-purple-400">Category:</span>
          <span className="text-white">{project.category}</span>
        </div>

        {/* Created By */}
        <div className="flex items-center gap-2">
          <span className="font-medium text-purple-400">Created By:</span>
          <span className="text-white font-bold">{project.createdBy}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-800 flex justify-between items-center">
        {/* Roles Available */}
        <div>
          <span className="text-sm  text-white font-bold">
            Roles Available:
          </span>{' '}
          <span className="text-white ">{project.rolesAvailable}</span>
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
  );
};

export default Project;

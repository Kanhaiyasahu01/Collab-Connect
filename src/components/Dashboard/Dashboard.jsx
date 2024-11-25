import React, { useState } from 'react';
import Project from './Project'; // Adjust the path as necessary
import { projectsData } from '../../utils/projects';
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    teamSize: 'All',
    rolesAvailable: 'All',
    statusTags: 'All',
  });

  // Function to filter projects
  const filteredData = projectsData.filter((project) => {
    // Search by project title or description
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Apply filters
    const matchesCategory =
      filters.category === 'All' || project.category === filters.category;
    const matchesTeamSize =
      filters.teamSize === 'All' || project.teamSize.toString() === filters.teamSize;
    const matchesRolesAvailable =
      filters.rolesAvailable === 'All' || project.rolesAvailable === filters.rolesAvailable;
    const matchesStatusTags =
      filters.statusTags === 'All' || project.statusTags.includes(filters.statusTags);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesTeamSize &&
      matchesRolesAvailable &&
      matchesStatusTags
    );
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="min-h-screen bg-richblack-800 text-white">

<div className="p-4 bg-richblack-800 max-w-xl mx-auto relative">
  {/* Search Icon */}
  <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text- w-5 h-5" />

  {/* Search Input */}
  <input
    type="search"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search by project title or description..."
    className="w-full px-10 py-2 rounded-lg bg-richblack-600 text-white focus:outline-none focus:ring focus:ring-white"
  />
</div>


      {/* Filters Section */}
      <div className="p-4 flex flex-wrap gap-4 bg-richblack-800 justify-center items-center">
        <div className='text-2xl font-bold font-inter'>
          Filter By:
        </div>
        <select
  name="category"
  value={filters.category}
  onChange={handleFilterChange}
  className="px-4 py-2 rounded-lg bg-richblack-600 text-richblack-200 focus:outline-none focus:ring focus:ring-purple-600"
>
  <option value="All">Category</option>
  <option value="Artificial Intelligence">Artificial Intelligence</option>
  <option value="Web Development">Web Development</option>
  <option value="Blockchain">Blockchain</option>
  <option value="MERN Stack Developer">MERN Stack Developer</option>
  <option value="Full Stack Developer">Full Stack Developer</option>
  <option value="Backend Developer">Backend Developer</option>
  <option value="Blockchain Developer">Blockchain Developer</option>
  <option value="Frontend Developer">Frontend Developer</option>
  <option value="Data Scientist">Data Scientist</option>
  <option value="Mobile App Developer">Mobile App Developer</option>
  <option value="AI/ML Specialist">AI/ML Specialist</option>
  <option value="Cybersecurity Expert">Cybersecurity Expert</option>
  <option value="DevOps Engineer">DevOps Engineer</option>
</select>


        <select
          name="teamSize"
          value={filters.teamSize}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-lg bg-richblack-600 text-richblack-200 focus:outline-none focus:ring focus:ring-purple-600"
        >
          <option value="All">Team Size</option>
          <option value="1">1</option>
          <option value="2-3">2-3</option>
          <option value="4-6">4-6</option>
          <option value="7+">7+</option>
        </select>

        <select
          name="rolesAvailable"
          value={filters.rolesAvailable}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-lg bg-richblack-600 text-richblack-200 focus:outline-none focus:ring focus:ring-purple-600"
        >
          <option value="All">Roles Available</option>
          <option value="Innovators">Innovators</option>
          <option value="Developers">Developers</option>
          <option value="Designers">Designers</option>
        </select>

        <select
          name="statusTags"
          value={filters.statusTags}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-lg bg-richblack-600 text-richblack-200 focus:outline-none focus:ring focus:ring-purple-600"
        >
          <option value="All">Status</option>
          <option value="IDEA">Idea</option>
          <option value="COFOUNDING">Co-founding</option>
          <option value="DEVELOPMENT">Development</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="p-6 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.length > 0 ? (
          filteredData.map((project) => (
            <Project key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center text-richblack-300">
            No projects found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

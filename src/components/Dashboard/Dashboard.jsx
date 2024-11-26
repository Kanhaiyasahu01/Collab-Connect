import React, { useState } from "react";
import Project from "./Project"; // Adjust the path as necessary
import { projectsData } from "../../utils/projects";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "All",
    teamSize: "All",
    rolesAvailable: "All",
    statusTags: "All",
  });

  // Function to filter projects
  const filteredData = projectsData.filter((project) => {
    // Search by project title or description
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Apply filters
    const matchesCategory =
      filters.category === "All" || project.category === filters.category;
    const matchesTeamSize =
      filters.teamSize === "All" ||
      project.teamSize.toString() === filters.teamSize;
    const matchesRolesAvailable =
      filters.rolesAvailable === "All" ||
      project.rolesAvailable === filters.rolesAvailable;
    const matchesStatusTags =
      filters.statusTags === "All" ||
      project.statusTags.includes(filters.statusTags);

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
    <div className=" relative overflow-hidden min-h-screen bg-richblack-900 text-white">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-10 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-500 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-green-400 to-teal-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-500 to-blue-400 opacity-30 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1\2 bg-pink-200 w-72 h-72 bg-gradient-to-r from-orange-400 to-pink-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/2 bg-purple-100 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 rounded-full blur-3xl"></div>

      <div className="text-center space-y-4 mb-6 mt-8">
  <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    Discover, Collaborate & Innovate
  </h1>
</div>


      <div className="max-w-[1100px] bg-richblack-800 shadow-md mx-auto rounded-md mt-4">
        <div className="p-4 max-w-xl mx-auto relative">
          {/* Search Icon */}
          <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />

          {/* Search Input */}
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project title or description..."
            className="w-full px-10 py-2 rounded-lg bg-richblack-600 text-white focus:outline-none focus:ring focus:ring-white"
          />
        </div>

        {/* Filters Section with animation */}
        <motion.div
          className="p-4 flex flex-wrap gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-2xl font-bold font-inter">Filter By:</div>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-lg bg-richblack-600 text-richblack-200 focus:outline-none focus:ring focus:ring-purple-600"
          >
            <option value="All">Category</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
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
        </motion.div>
      </div>
      {/* Projects Grid with scroll animation */}
      <div className="p-6 max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        {filteredData.length > 0 ? (
          filteredData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-richblack-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Project project={project} />
            </motion.div>
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

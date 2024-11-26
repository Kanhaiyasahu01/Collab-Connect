import React, { useState } from "react";
import { matesData } from "../../utils/constant";

const roles = [
  "All",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Backend Developer",
  "Blockchain Developer",
  "Frontend Developer",
  "Data Scientist",
  "Mobile App Developer",
  "AI/ML Specialist",
  "Cybersecurity Expert",
  "DevOps Engineer",
];

const Mates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredMates = matesData.filter((mate) => {
    const matchesSearch =
      mate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mate.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole =
      selectedRole === "All" || mate.role.toLowerCase().includes(selectedRole.toLowerCase());
    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-richblack-900 min-h-screen text-white flex flex-col items-center py-10 px-6">
<div className="text-center space-y-4 mb-2">
  <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    Meet Your Mates
  </h1>
</div>

<p className="text-richblack-300 text-center max-w-2xl mb-8">
  Discover your teammates and collaborate on projects that matter. Connect and grow together!
</p>


      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search by name or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-auto flex-1 bg-richblack-800 text-richblack-200 px-4 py-3 rounded-lg focus:outline-none"
        />
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="bg-richblack-800 text-richblack-200 px-4 py-3 rounded-lg focus:outline-none"
        >
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Mates Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:max-w-[1100px]">
        {filteredMates.length > 0 ? (
          filteredMates.map((mate) => (
            <div
              key={mate.id}
              className="bg-richblack-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-transform"
            >
              {/* Profile Section */}
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                  {mate.image ? (
                    <img
                      src={mate.image}
                      alt={mate.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-3xl">👤</span>
                  )}
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold ">{mate.name}</h2>
                  <p className="text-lg text-richblack-300">{mate.role}</p>
                </div>
              </div>

              {/* User Bio Section */}
              <p className="text-richblack-300 text-sm mb-2 italic">{mate.bio}</p>

              {/* User Details */}
              <p className="text-richblack-300 text-sm mb-2">
                <strong>Location:</strong> <span className="text-richblack-300">{mate.location}</span>
              </p>
              <p className="text-richblack-300 text-sm mb-2">
                <strong>Skills:</strong> <span className="text-richblack-300" >{mate.skills.join(", ")}</span>
              </p>
              <p className="text-richblack-300 text-sm mb-2">
                <strong>Categories:</strong> <span className="text-richblack-300">{mate.categories.join(", ")}</span>
              </p>

              {/* Connect Button */}
              <button className="bg-yellow-400 hover:bg-yellow-300 text-richblack-900 font-bold px-6 py-2 rounded-xl w-full mt-4">
                Connect Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-richblack-400 text-center text-lg col-span-full">
            No mates found matching your criteria. Try exploring other roles or searching again!
          </p>
        )}
      </div>
    </div>
  );
};

export default Mates;

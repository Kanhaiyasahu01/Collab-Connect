import React, { useState } from "react";
import { matesData } from "../../utils/constant";

// Define a list of unique roles
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
      <h1 className="text-4xl font-bold mb-6">Mates</h1>
      <p className="text-richblack-300 text-center max-w-2xl mb-8">
        Collaborate with your teammates and view their profiles here.
      </p>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search by name or role..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-auto flex-1 bg-richblack-800 text-richblack-200 px-4 py-2 rounded-lg focus:outline-none"
        />
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="bg-richblack-800 text-richblack-200 px-4 py-2 rounded-lg focus:outline-none"
        >
          {roles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Mates Cards Section */}
      <div className="w-full max-w-4xl">
        {filteredMates.length > 0 ? (
          filteredMates.map((mate) => (
            <div
              key={mate.id}
              className="bg-richblack-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4 flex items-center"
            >
              {/* Profile Picture */}
              <div className="w-16 h-16 rounded-full mr-4 bg-gray-600 flex items-center justify-center">
                {mate.image ? (
                  <img
                    src={mate.image}
                    alt={mate.name}
                    className="w-16 h-16 rounded-full"
                  />
                ) : (
                  <span className="text-white text-2xl">👤</span>
                )}
              </div>

              {/* User Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{mate.name} <span className="text-richblack-400 text-sm">• 2nd</span></h2>
                <p className="text-richblack-300">{mate.role}</p>
                <p className="text-richblack-400 text-sm">{mate.location}</p>
                <p className="text-sm text-richblack-400 mt-1">Skills: <span className="text-richblack-200">{mate.skills.join(", ")}</span></p>
              </div>

              {/* Connect Button */}
              <button className="bg-yellow-200 hover:bg-purple-700 text-sm px-4 py-2 rounded-lg font-medium">
                Connect
              </button>
            </div>
          ))
        ) : (
          <p className="text-richblack-400 text-center">
            No mates found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Mates;

import React from 'react';

const Competition = () => {
  const hackathons = [
    {
      id: 1,
      name: 'Hacktoberfest',
      description: 'A month-long celebration of open source.',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      name: 'CodeSprint',
      description: 'A competitive programming hackathon.',
      imageSrc: 'https://images.unsplash.com/photo-1593349480506-8433634cdcbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      name: 'Innovate AI',
      description: 'Solve real-world problems using AI.',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'John Doe', city: 'New York', score: 200 },
    { rank: 2, name: 'Jane Smith', city: 'London', score: 180 },
    { rank: 3, name: 'Carlos Gomez', city: 'Mexico City', score: 150 },
    { rank: 4, name: 'Sarah Lee', city: 'Tokyo', score: 140 },
    { rank: 5, name: 'Alex Johnson', city: 'Sydney', score: 120 },
    { rank: 6, name: 'Anita Patel', city: 'Mumbai', score: 110 },
    { rank: 7, name: 'Michael Brown', city: 'Chicago', score: 100 },
  ];

  const upcomingEvents = [
    { name: 'AI Summit', date: 'Dec 10, 2024' },
    { name: 'Web Development Marathon', date: 'Jan 15, 2025' },
    { name: 'Cybersecurity Challenge', date: 'Feb 20, 2025' },
  ];

  return (
    <div className="bg-richblack-900 flex flex-col lg:flex-row p-6 h-screen">
      {/* Main Content */}
      <div className="flex-grow overflow-y-auto pr-6 ">
      <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
  Ready
  <p className="text-5xl font-bold text-white ml-4">to Compete?</p>
</h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore the most exciting hackathons happening every month. Join now and showcase your skills!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={hackathon.imageSrc}
                alt={hackathon.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {hackathon.name}
                </h2>
                <p className="text-sm text-gray-600">{hackathon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-1/4 lg:pl-6 mt-8 lg:mt-0 bg-richblack-800 p-6 rounded-lg h-full">
        {/* Upcoming Events */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-yellow-100 mb-4">Upcoming Events</h3>
          <ul className="text-gray-300 space-y-2">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="flex justify-between">
                <span>{event.name}</span>
                <span>{event.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Leaderboard */}
        <div className="overflow-y-auto h-64">
          <h3 className="text-xl font-bold text-yellow-100 mb-4">Leaderboard</h3>
          <ul className="text-gray-300 space-y-2">
            {leaderboard.map((entry) => (
              <li key={entry.rank} className="flex justify-between">
                <span>
                  Rank {entry.rank}: {entry.name} ({entry.city})
                </span>
                <span>{entry.score} pts</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competition;

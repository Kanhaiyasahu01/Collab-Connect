import React, { useState } from "react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import { FaUsers } from "react-icons/fa"; // Group icon from react-icons

const Messages = () => {
  const [activeChat, setActiveChat] = useState("group");

  const chats = [
    { id: "1", name: "John Doe", type: "person", avatar: avatar1 },
    { id: "2", name: "Jane Smith", type: "person", avatar: avatar2 },
    { id: "3", name: "Project Team", type: "group", avatar: null }, // Set avatar to null for group
  ];

  const messages = {
    person: [
      { sender: "John", text: "Hey, how are you?", time: "10:30 AM" },
      { sender: "You", text: "I'm good, thanks! How about you?", time: "10:32 AM" },
    ],
    group: [
      { sender: "Alice", text: "Let's schedule a meeting tomorrow.", time: "9:00 AM" },
      { sender: "Bob", text: "Sure, what time?", time: "9:05 AM" },
      { sender: "You", text: "How about 3 PM?", time: "9:10 AM" },
    ],
  };

  return (
    <div
      className="flex bg-richblack-900 text-white"
      style={{ height: "calc(100vh - 70px)" }} // Adjust based on navbar height (60px)
    >
      {/* Left Side - Chat List */}
      <div className="w-1/4 bg-richblack-800 border-r border-gray-700 p-4">
        <h2 className="text-lg font-bold mb-4">Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setActiveChat(chat.type)}
              className={`flex items-center gap-3 p-2 cursor-pointer rounded-lg hover:bg-richblack-700 transition ${
                activeChat === chat.type ? "bg-richblack-700" : ""
              }`}
            >
              {/* Render avatar for personal chats and icon for group chat */}
              {chat.avatar ? (
                <img
                  src={chat.avatar}
                  alt={`${chat.name} avatar`}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <FaUsers className="w-10 h-10 text-gray-400 bg-richblack-700 p-2 rounded-full" />
              )}
              <span>{chat.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Chat Messages */}
      <div className="w-3/4 p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">{activeChat === "group" ? "Group Chat" : "Personal Chat"}</h2>
        <div className="bg-richblack-800 rounded-lg p-4 flex-grow overflow-y-auto">
          {messages[activeChat].map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "You" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`${
                  message.sender === "You" ? "bg-yellow-400 text-black" : "bg-richblack-700 text-white"
                } px-4 py-2 rounded-lg max-w-sm`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-gray-400 text-right mt-1">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 rounded-lg bg-richblack-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;

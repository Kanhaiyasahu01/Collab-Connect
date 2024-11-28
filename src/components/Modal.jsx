import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API or showing confirmation.
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-richblack-900 p-8 rounded-lg shadow-lg shadow-richblack-200 relative w-1/3">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white font-semibold"
        >
          Close
        </button>
        
        {/* Application Form */}
        <h2 className="text-2xl text-white font-semibold mb-4">Apply for the Role</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-richblack-700 text-white rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-richblack-700 text-white rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="resume" className="text-white">Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="w-full p-2 bg-richblack-700 text-white rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-richblack-700 text-white rounded-lg"
              placeholder="Why do you want to apply for this role?"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

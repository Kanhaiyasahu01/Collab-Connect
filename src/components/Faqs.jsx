import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqList = [
    {
      question: 'What is the Collab Connect app?',
      answer:
        'The Collab Connect app is a platform where people with similar interests can connect, collaborate, and work on projects together. It is designed to foster meaningful professional and creative connections.',
    },
    {
      question: 'How do people connect with others who have the same mindset?',
      answer:
        'The app uses advanced filters like skills, interests, and project goals to match users with others who share similar mindsets. Users can also search for specific profiles or browse community projects.',
    },
    {
      question: 'How can people contribute to projects with similar interests?',
      answer:
        'Users can browse ongoing projects, join teams, or propose their ideas. They can collaborate by sharing skills, providing feedback, or actively working on tasks in a project.',
    },
    {
      question: 'Is the app free to use?',
      answer:
        'Yes, the core features of the app are free to use. Additional premium features may be offered in the future for advanced collaboration tools.',
    },
    {
      question: 'What types of projects can I find on the app?',
      answer:
        'You can find a variety of projects ranging from software development, content creation, and entrepreneurship to community initiatives and educational projects.',
    },
    {
      question: 'How secure is my data on the app?',
      answer:
        'Your data is stored securely and is not shared with any third parties without your consent. We follow best practices for data protection.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-richblack-900 min-h-screen text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="w-full max-w-4xl px-6">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="bg-richblack-800 p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
            {activeIndex === index && (
              <p className="text-richblack-400 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

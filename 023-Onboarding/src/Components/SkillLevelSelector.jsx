import React, { useState } from "react";

const SkillLevelSelector = () => {
  const [selectedLevel, setSelectedLevel] = useState("beginner");

  const levels = [
    {
      id: "beginner",
      title: "Beginner",
      icon: (
        <svg viewBox='0 0 36 36' className='w-12 h-12'>
          <circle cx='18' cy='18' r='16' fill='#E8EAED' />
          <path d='M18 2 A16 16 0 0 1 34 18' fill='#4F46E5' />
        </svg>
      ),
    },
    {
      id: "experienced",
      title: "Experienced",
      icon: (
        <svg viewBox='0 0 36 36' className='w-8 h-8'>
          <circle cx='18' cy='18' r='16' fill='#E8EAED' />
          <path d='M18 2 A16 16 0 0 1 34 18' fill='#4F46E5' />
        </svg>
      ),
    },
    {
      id: "professional",
      title: "Professional",
      icon: (
        <svg viewBox='0 0 36 36' className='w-8 h-8'>
          <circle cx='18' cy='18' r='16' fill='#E8EAED' />
          <path d='M18 2 A16 16 0 0 1 34 18' fill='#4F46E5' />
        </svg>
      ),
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='flex items-center justify-evenly px-6 py-4 border-b border-gray-200'>
        <div className='text-lg font-semibold text-gray-900'>YOUR LOGO</div>
        <div className='flex items-center space-x-8'>
          {["MENU 1", "MENU 2", "MENU 3", "MENU 4"].map(menu => (
            <a
              key={menu}
              href='#'
              className='hover:overline decoration-blue-400 text-sm font-bold text-gray-600 hover:text-gray-900'
            >
              {menu}
            </a>
          ))}
          <button className='px-2 py-1 font-bold text-white text-sm text-gray-600 hover:text-gray-900 bg-blue-400 rounded-md hover:cursor-pointer'>
            GET IN TOUCH
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-4 py-12'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-2'>
            Question 2
          </h2>
          <p className='text-gray-600'>
            What is your skill/expertise skill level?
          </p>
        </div>

        {/* Skill Level Cards */}
        <div className='grid grid-cols-3 gap-6 mb-8'>
          {levels.map(level => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedLevel === level.id
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-200 hover:border-blue-600"
              }`}
            >
              <div className='flex flex-col items-center space-y-4'>
                {level.icon}
                <span className='font-medium'>{level.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className='flex justify-center items-center space-x-4'>
          <button className='px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400'>
            Back
          </button>
          <button className='px-8 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700'>
            Next
          </button>
        </div>

        {/* Progress Bar */}
        <div className='mt-12'>
          <div className='w-full bg-gray-200 h-1 rounded-full'>
            <div className='w-2/5 bg-blue-600 h-1 rounded-full'></div>
          </div>
          <div className='flex justify-between text-sm text-gray-500 mt-2'>
            <span>STEP 2 OF 5</span>
            <span>40%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLevelSelector;

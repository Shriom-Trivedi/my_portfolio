import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1 className='flex items-center text-[3.25rem] tracking-tight font-mark__pro'>
        <span
          style={{
            WebkitTextFillColor: 'transparent',
          }}
          className='bg-clip-text text-opacity-0 fill-transparent bg-gradient-to-r  from-[#bcc7ff] to-[#ffe0e6] mr-3 font-bold'
        >
          Yeah! I work hard
        </span>
        <small>💼</small>
      </h1>
      <p className=' mb-48 mt-2 text-base text-gray-100'>Each of my project is unique. Here are few examples.</p>
    </div>
  );
};

export default Projects;

import React from 'react';
import { projectData } from '../../../data/projectData';
import ProjectList from './ProjectList';
const Projects = () => {
  return (
    <div>
      <h1 className='flex items-center text-[2rem] sm:text-[3.25rem] tracking-tight font-mark__pro'>
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
      <p className=' ml-1 sm:ml-2 mb-20 sm:mb-36 mt-2 text-xs sm:text-base text-gray-100'>
        Each of my project is unique. Here are few examples.
      </p>
      <section className=' sm:p-3 grid grid-cols-1 xl:grid-cols-1 place-items-center'>
        {/* project map */}
        {projectData.map((item) => (
          <ProjectList key={item.id} item={item}/>
        ))}
      </section>
    </div>
  );
};

export default Projects;

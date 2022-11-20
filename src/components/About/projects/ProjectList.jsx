import React from 'react';
import { ExternalLink, GitHub } from 'react-feather';

const ProjectList = ({ item }) => {
  const { project_img, name, live_server, github_repo, shades} = item;
  return (
    <div className=' flex w-full xl:w-[70%] items-center py-6 px-6 relative cursor-pointer mb-24 h-[25rem] rounded-2xl bg-gradient-to-br from-slate-800 to-[#131829] border border-[#2a2d3a]'>
      <div className=' flex-[4] h-full flex rounded-xl bg-red-300 items-center content-center'>
        <img
          src={project_img}
          alt='projectImg'
          className=' w-full h-full block object-cover rounded-xl'
        />
      </div>
      <div className=' flex-[5] flex flex-col items-center mr-auto justify-evenly text-gray-200 h-full'>
        <h2
          className='text-shadow text-[3rem] font-sans font-extrabold tracking-[-0.03em] uppercase'
          style={{color: `${shades}`}}
        >
          {name}
        </h2>
        <a
          href={live_server}
          className='relative visitlink__underline no-underline uppercase font-d__din__Condensed text-2xl'
        >
          Visit the website
        </a>
        <div className=' flex items-center justify-between w-24'>
          <a
            href={live_server}
            className=' border-[1.5px] border-gray-400 rounded-full p-[0.3rem] bg-[#131829]'
          >
            <ExternalLink size={20} color='gray' />
          </a>
          <a
            href={github_repo}
            className='border-[1.5px] border-gray-400 rounded-full p-[0.3rem] bg-[#131829] flex items-center justify-center'
          >
            <GitHub size={20} color='gray' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

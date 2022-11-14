import React from 'react';

const ProjectList = ({ item }) => {
  const { project_img, name, live_server, github_repo } = item;
  return (
    <div className=' flex w-auto items-center py-6 px-6 relative cursor-pointer mr-3 mb-3 h-[25rem] rounded-2xl bg-gradient-to-br from-slate-800 to-[#131829] border border-[#2a2d3a]'>
      <div className=' flex-[4] h-full flex rounded-xl bg-red-300 items-center content-center'>
        <img
          src={project_img}
          alt='projectImg'
          className=' w-full h-full block object-cover rounded-xl'
        />
      </div>
      <div className=' flex-[5] flex flex-col items-center justify-between text-gray-200 h-full'>
        <h2 className=' text-[2.3rem] font-sans font-extrabold tracking-[-0.03em] uppercase'>
          {name}
        </h2>
        <a
          href={live_server}
          className='relative visitlink__underline no-underline uppercase font-d__din__Condensed text-xl'
        >
          Visit the website
        </a>
        <div className=' flex items-center justify-between w-20'>
            <a href=""></a>
            <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

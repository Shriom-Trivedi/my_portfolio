import React from 'react';

const ProjectList = ({ item }) => {
  const { project_img } = item;
  return (
    <div className=' flex w-auto items-center py-4 px-6 relative cursor-pointer mr-3 mb-3 h-[25rem] rounded-2xl bg-gradient-to-br from-slate-800 to-[#131829] border border-[#2a2d3a]'>
      <div className=' flex-[4] h-full flex rounded-xl bg-red-300 items-center content-center'>
        <img
          src={project_img}
          alt='projectImg'
          className=' w-full h-full block object-cover rounded-xl'
        />
      </div>
      <div className=' flex-[5] text-gray-200 bg-blue-700 h-full'>
        <h2 className=' mb-12'>project name</h2>
        {/* visit website */}
        {/* live and github link with icon */}
      </div>
    </div>
  );
};

export default ProjectList;

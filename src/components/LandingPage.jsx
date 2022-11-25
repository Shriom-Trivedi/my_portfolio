import React from 'react';

const LandingPage = () => {
  return (
    <div className='landing_page--content grid grid-cols-12 relative'>
      <div className='col-start-3 col-end-[14] mt-[15rem]'>
        <div>
          {/* Title */}
          <div className='text-5xl leading-[110%] tracking-[-0.03em] relative text-white font-mark__pro font-black md:text-[5rem]'>
            <span>turning ideas into</span>
            <br />
            <span>
              real life
              <span
                className='linear__gradient ml-3 bg-clip-text text-opacity-0 fill-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-yellow-200 animate-linearGrad'
                style={{
                  WebkitTextFillColor: 'transparent',
                }}
              >
                products
              </span>
            </span>
            <br />
            <span>is my calling.</span>
          </div>

          {/* View Projects button */}
          <div className=' ml-[0.3rem] mt-28 text-gray-300 text-xl inline-block leading-[0%] tracking-[0.1em] relative font-d__din__Condensed cursor-pointer content__underline uppercase'>
            view projects
          </div>
        </div>
      </div>
      <div className='col-start-1 col-end-[15] px-[6rem] mt-64 mb-56 text-gray-500'></div>
    </div>
  );
};

export default LandingPage;

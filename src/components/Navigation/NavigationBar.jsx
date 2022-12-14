import React from 'react';

function NavigationBar() {
  return (
    <div
      className=' glassmorphic_background_navigation fixed top-12 sm:top-16 right-0 left-0 py-4 sm:py-3 px-10 flex justify-between items-center w-[85%] sm:w-[80%] ml-auto mr-auto bg-[#2a2a38]
      md:w-1/2 md:px-16 md:py-8
      '
    >
      <span className='relative cursor-pointer brand_underline--logo font-d__din__Condensed text-gray-300 text-xs sm:text-base md:text-xl'>
        SHRIOM TRIVEDI
      </span>
      <div className=' flex justify-between items-center text-gray-300 font-d__din__Condensed'>
        <span className=' md:text-xl md:block hidden'>MENU</span>
        <button className=' bg-transparent outline-none border-none cursor-pointer'>
          <svg
            width='57'
            height='20'
            viewBox='0 0 26 20'
            style={{ userSelect: 'auto' }}
            className='svg_icon--navigation'
          >
            <path
              fill='transparent'
              strokeWidth='1.5'
              stroke='#c4c4c4'
              d='M 2 2.5 L 57 2.5'
              style={{ userSelect: 'auto' }}
            ></path>
            <path
              fill='transparent'
              strokeWidth='1.5'
              stroke='#c4c4c4'
              d='M 2 9.423 L 57 9.423'
              opacity='1'
              style={{ userSelect: 'auto' }}
            ></path>
            <path
              fill='transparent'
              strokeWidth='1.5'
              stroke='#c4c4c4'
              d='M 2 16.346 L 27 16.346'
              style={{ userSelect: 'auto' }}
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
// border-[0.2rem] border-solid border-[#2a2b37] rounded-[2rem]

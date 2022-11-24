import React from 'react';

const Socials = () => {
  return (
    <div>
      <h1 className='flex items-center text-[3.25rem] tracking-tight font-mark__pro'>
        <span
          className='bg-clip-text text-opacity-0 fill-transparent bg-gradient-to-r from-[#bcc7ff] to-[#ffe0e6] mr-3 font-bold'
          style={{
            WebkitTextFillColor: 'transparent',
          }}
        >
          Come say hi!
        </span>
        <small>👋</small>
      </h1>
      <p className='mb-12 mt-2 text-base text-gray-100'>
        Connect with me online
      </p>
      <div className=' flex justify-between items-center gap-6 flex-wrap max-w-lg'>
        <a
          href='https://github.com/Shriom-Trivedi'
          target='_blank'
          rel='noreferrer'
          className='flex justify-between items-center text-[#c4c4c4] no-underline font-d__din__Condensed uppercase leading-[90%] tracking-tight text-xl font-thin ease-in-out'
        >
          👾 GitHub
        </a>
        <a
          href='https://twitter.com/shriomatic'
          target='_blank'
          rel='noreferrer'
          className='flex justify-between items-center text-[#c4c4c4] no-underline font-d__din__Condensed uppercase leading-[90%] tracking-tight text-xl font-thin ease-in-out'
        >
          🐦 Twitter
        </a>
        <a
          href='https://www.linkedin.com/in/tshriom/'
          target='_blank'
          rel='noopener'
          className='flex justify-between items-center text-[#c4c4c4] no-underline font-d__din__Condensed uppercase leading-[90%] tracking-tight text-xl font-thin ease-in-out'
        >
          💼 LinkedIn
        </a>
        <a
          href='https://www.instagram.com/shriomatic/'
          target='_blank'
          rel='noreferrer'
          className='flex justify-between items-center text-[#c4c4c4] no-underline font-d__din__Condensed uppercase leading-[90%] tracking-tight text-xl font-thin ease-in-out'
        >
          📸 Instagram
        </a>
      </div>
    </div>
  );
};

export default Socials;

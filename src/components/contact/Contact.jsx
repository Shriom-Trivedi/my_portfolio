import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className='flex items-center text-[2rem] sm:text-[3.25rem] font-mark__pro tracking-tight'>
        <span
          className='bg-clip-text text-opacity-0 fill-transparent bg-gradient-to-r from-[#bcc7ff] to-[#ffe0e6] mr-3 font-bold'
          style={{
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sold Yet ?
        </span>
        <small>🤙</small>
      </h1>
      <h2 className=' text-2xl sm:text-4xl leading-[2.4rem] sm:leading-[3.5rem] tracking-tighter text-[#c4c4c4] font-medium mt-12'>
        Thanks for stopping by, I’m currently looking to join a new team of
        creative designers and developers. If you think we might be a good fit
        for one another, send me an
        <a
          href='mailto:tshriom@gmail.com'
          rel='noreferrer'
          target='_blank'
          className='ml-2 text-white ease-in hover:text-blue-300 '
        >
          email 📧
        </a>
        .
      </h2>
    </div>
  );
};

export default Contact;

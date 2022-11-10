import React from 'react';
import Projects from './Projects';

const About = () => {
  return (
    <main className='grid grid-cols-12 relative'>
      <p className='col-start-2 col-end-12 md:col-end-9 text-[1rem] leading-[120%] text-gray-100 block px-1 md:px-2 lg:px-24 break-words'>
        Hi stranger! 👋, thanks for stopping by my name is Shri Om Trivedi and I
        am a fullstack developer, passionate about digital products that help
        people experience everyday life, not endure it.
      </p>
      <section className=' col-start-2 col-end-12 mt-64 md:px-2 lg:px-24'>
        <Projects />
      </section>
    </main>
  );
};

export default About;

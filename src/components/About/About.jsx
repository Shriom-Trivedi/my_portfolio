import React from 'react';
import Contact from '../contact/Contact';
import Socials from '../socials/Socials';
import Projects from './projects/Projects';

const About = () => {
  return (
    <main className='grid grid-cols-12 relative'>
      <p className='col-start-2 col-end-12 md:col-end-9 text-[1rem] leading-[120%] text-gray-100 block px-1 md:px-2 lg:px-24 break-words'>
        Hello there! 👋, thanks for stopping by my name is Shri Om Trivedi and I
        am a fullstack developer, passionate about digital products that help
        people experience everyday life, not endure it.
      </p>
      <SectionLayout>
        <Projects />
      </SectionLayout>
      <div className=' col-start-1 col-end-13 bg-[#050810] py-28 p-3 md:px-28 lg:px-52'>
        <Contact />
      </div>
      <SectionLayout>
        <Socials />
      </SectionLayout>
    </main>
  );
};

const SectionLayout = ({ children }) => {
  return (
    <div className='col-start-2 col-end-12 mt-64 md:px-2 lg:px-24'>
      {children}
    </div>
  );
};

export default About;

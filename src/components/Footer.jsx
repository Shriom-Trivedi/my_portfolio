import React from 'react';
import { GitHub, Instagram, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <div
      className='flex items-center justify-between w-full mt-32 py-10 px-16'
      style={{ borderTop: '1px solid hsla(0,0%,76.9%,.25)' }}
    >
      <div className='relative brand_underline--logo font-d__din__Condensed uppercase text-lg text-gray-300 cursor-pointer'>
        Shriom Trivedi
      </div>
      <span className=' text-xs text-gray-300'>Made with love 💓</span>
      <div className='text-sm flex'>
        <span className='cursor-pointer'>
          <GitHub color='gray' size={13} />
        </span>
        <span className='ml-3 cursor-pointer'>
          <Linkedin color='gray' size={13} />
        </span>
        <span className='ml-3 cursor-pointer'>
          <Instagram color='gray' size={13} />
        </span>
      </div>
    </div>
  );
};

export default Footer;

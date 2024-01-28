import React from 'react';
import Logo from '../assets/logo.png' ;

const Header = () => {
  return (
    <header className='py-8 lg:pt-6'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* <h1 className='text-[35px] text-gradient'>
            CreSencE
          </h1> */}
          <a href='#'>
            <img src={Logo} alt='' className='h-[76px]'></img>
          </a>
          <button className='btn btn-sm'>
            Explore!
          </button>
        </div>
      </div>
    </header>
  
  )
};

export default Header;

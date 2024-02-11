import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Events from './Events';
import Team from './Team'
// import Sponsors from './Sponsors';
import Footer from './footer'
import EventSlider from './Eventslider';

const App = () => {

  return (
    <div className='bg-site bg-fixed overflow-x-hidden bg-no-repeat flex flex-col justify-center lg:h-[full]'>
      
      <div className='lg:bg-hero lg:bg-fixed lg:bg-cover overflow-hidden lg:bg-no-repeat'>
        <Header />
      
        <Banner />
      </div>
      <Nav />
      <div className='lg:bg-site lg:bg-local overflow-hidden lg:bg-no-repeat '>
        <About />
        <Events />
        <EventSlider />
        <Team /> 
      {/* <Sponsors /> */}
        <Footer />
      </div>
    </div>
    
  );
};

export default App;

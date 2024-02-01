import React, {useState} from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Events from './components/Events';
// import Contact from './components/Contact';
import Team from './components/Team'

import Sponsors from './components/Sponsors';
import Footer from './components/footer'
import EventSlider from './components/Eventslider';

// bg-site bg-no-repeat bg-cover overflow-hidden
const App = () => {

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preload");
  if(preloader){
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (<div className='bg-site bg-no-repeat bg-cover overflow-hidden flex flex-col justify-center lg:h-[full]'>
      <Header />
      <Nav />
      <Banner />
      <About />
      <Events />
      <EventSlider />
      {/* <Timeline /> */}
      <Team />
      {/* <Sponsors /> */}
      <Footer />
    </div>
    )
  );
};

export default App;

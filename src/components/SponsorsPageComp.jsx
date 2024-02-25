import React from 'react';
import Multikitchen from "../assets/Images/multikitchen.webp";
import platform65 from "../assets/Images/plat65.webp";
import shalimar from "../assets/Images/shalimar.webp";
import pennant from "../assets/Images/pennant.webp";
import sukras from "../assets/Images/sukras.webp";
const Sponsors = () => {
  return (
    <div className='section overflow-hidden'>
      <div class="max-w-3xl mx-auto px-5">
        <div class="flex flex-col justify-center">

          <div class="text-center pb-10 lg:pb-0">

            <h2 class="text-gradient h2">Our Sponsors</h2>


          </div>


          <div class="flex flex-col mt-2 gap-y-10 lg:flex-row lg:flex-wrap items-center justify-center md:justify-around">

            <div className="bg-white rounded-lg">
              <img src={pennant} alt="pennant"/>
            </div>

            <div className="overflow-hidden rounded-lg h-[150px] w-[250px] lg:h-[150px] lg:w-[150px] flex items-center justify-center">
              <img src={Multikitchen} alt="Multikitchen" />
            </div>


            <div className="h-[200px] w-[200px] lg:h-[150px] lg:w-[150px] flex items-center justify-center">
              <img src={platform65} alt="platform65" />
            </div>


            <div className='overflow-hidden rounded-lg h-[74px] w-[250px] flex items-center justify-center'>
              <img src={shalimar} alt="shalimar" />
            </div>


            <div class="overflow-hidden rounded-2xl h-[200px] w-[200px] lg:h-[150px] lg:w-[150px] flex items-center justify-center">
              <img src={sukras} alt="sukras" />
            </div>


            
          </div>

        </div>

      </div>

    </div>
  );
};

export default Sponsors;
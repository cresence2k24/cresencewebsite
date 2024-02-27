import React from 'react';
import Multikitchen from "../assets/Images/multikitchen.webp";
import platform65 from "../assets/Images/plat65.webp";
import shalimar from "../assets/Images/shalimar.webp";
import pennant from "../assets/Images/pennant.webp";
import sukras from "../assets/Images/sukras.webp";
import ssk from "../assets/Images/ssk.webp";
import svs from "../assets/Images/svs.webp";
import rkacademy from "../assets/Images/rkacademy.webp";
import kritunga from "../assets/Images/kritunga.webp";
import hayat from "../assets/Images/hayat.webp";
import foodclock from "../assets/Images/foodclock.webp";


const Sponsors = () => {
  return (
    <div className='section overflow-hidden'>
      <div class="max-w-3xl mx-auto px-5">
        <div class="flex flex-col justify-center">

          <div class="text-center pb-10 lg:pb-0">

            <h2 class="text-gradient h2">Our Sponsors</h2>


          </div>


          <div class="flex flex-col mt-2 gap-10 lg:flex-row lg:flex-wrap items-center justify-center">

            <div className="bg-white rounded-lg">
              <img src={pennant} alt="pennant"/>
            </div>

            <div class="overflow-hidden rounded-2xl h-[170px] w-[200px] lg:h-[120px] lg:w-[150px] flex items-center justify-center">
              <img src={svs} alt="svsevents" />
            </div>

            <div className="overflow-hidden rounded-lg h-[150px] w-[250px] lg:h-[113px] lg:w-[150px] flex items-center justify-center">
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

            <div className="h-[200px] w-[200px] lg:h-[180px] lg:w-[180px] flex items-center justify-center">
              <img src={ssk} alt="ssk"/>
            </div>

            <div class="overflow-hidden rounded-2xl h-[250px] w-[250px] lg:h-[200px] lg:w-[200px] flex items-center justify-center">
              <img src={rkacademy} alt="rkacademy" />
            </div>

            <div class="overflow-hidden rounded-2xl h-[200px] w-[200px] lg:h-[150px] lg:w-[150px] flex items-center justify-center">
              <img src={kritunga} alt="kritunga" />
            </div>

            <div class="overflow-hidden rounded-2xl h-[150px] w-[220px] lg:h-[100px] lg:w-[150px] flex items-center justify-center">
              <img src={hayat} alt="hayat" />
            </div>

            <div class="overflow-hidden rounded-2xl h-[170px] w-[220px] lg:h-[150px] lg:w-[150px] flex items-center justify-center">
              <img src={foodclock} alt="foodOclock" />
            </div>
            


            
          </div>

        </div>

      </div>

    </div>
  );
};

export default Sponsors;
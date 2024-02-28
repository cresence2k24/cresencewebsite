  import { Reveal } from "./Reveal";
  import Multikitchen from "../assets/Images/multikitchen.webp";
  import platform65 from "../assets/Images/plat65.webp";
  import shalimar from "../assets/Images/shalimar.webp";
  import pennant from "../assets/Images/pennant.webp";
  import sukras from "../assets/Images/sukras.webp";
  import ssk from "../assets/Images/ssk.webp"; 
  import svs from "../assets/Images/svs.webp";
  import rk from "../assets/Images/rkacademy.webp";
  import kritunga from "../assets/Images/kritunga.webp";
  import hayat from "../assets/Images/hayat.webp";
  import foodclock from "../assets/Images/foodclock.webp";
  import dhanvanth from "../assets/Images/dhanvanth.webp";
  import fasttrack from "../assets/Images/fasttrack.webp";
  import greentrends from "../assets/Images/greentrends.webp";
  import kingdom from "../assets/Images/kingdom.webp";
  import battula from "../assets/Images/battulaprakash.webp";

  const LOGOS = [
    <img src={pennant} alt="pennant" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={Multikitchen} alt="multikitchen" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={platform65} alt="platform65" className="h-[100px] w-[100px] bg-white rounded-lg overflow-hidden"/>,
    <img src={shalimar} alt="shalimar" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={sukras} alt="sukras" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={ssk} alt="ssk" className="h-[100px] w-[125px] bg-white rounded-lg overflow-hidden"/>,
    <img src={svs} alt="svs" className="h-[100px] w-[125px] bg-white rounded-lg overflow-hidden"/>,
    <img src={rk} alt="rk" className="h-[100px] w-[120px] bg-white rounded-lg overflow-hidden"/>,
    <img src={kritunga} alt="kritunga" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={foodclock} alt="foodOclock" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={hayat} alt="hayat" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={dhanvanth} alt="dhanvanth" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={fasttrack} alt="fasttrack" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={greentrends} alt="greentrends" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={battula} alt="battulaPrakash" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={kingdom} alt="kingdom" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
   
  ];
  
const SponsorComp = () => {
    return (
        <>
            <Reveal>
              <h2 className="h2 text-accent mb-6 flex justify-center items-center py-10 lg:pb-10">Our Sponsors</h2>
            </Reveal>
      <div className="bg-transparent relative w-[100%] my-0 h-[100px] overflow-hidden flex justify-center items-center">
        
        <div className="animate-infinite-slider flex gap-10 justify-center items-center w-[calc(250px*24)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center bg-white rounded-lg overflow-hidden"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center bg-white rounded-lg overflow-hidden"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };

export default SponsorComp
  
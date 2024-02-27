  import { Reveal } from "./Reveal";
  import Multikitchen from "../assets/Images/multikitchen.webp";
  import platform65 from "../assets/Images/plat65.webp";
  import shalimar from "../assets/Images/shalimar.webp";
  import pennant from "../assets/Images/pennant.webp";
  import sukras from "../assets/Images/sukras.webp";
  import ssk from "../assets/Images/ssk.webp"; 
  
  const LOGOS = [
    <img src={pennant} alt="pennant" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={Multikitchen} alt="multikitchen" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={platform65} alt="platform65" className="h-[100px] w-[100px] bg-white rounded-lg overflow-hidden"/>,
    <img src={shalimar} alt="shalimar" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={sukras} alt="sukras" className="h-[100px] w-[200px] bg-white rounded-lg overflow-hidden"/>,
    <img src={ssk} alt="ssk" className="h-[100px] w-[125px] bg-white rounded-lg overflow-hidden"/>,
   
  ];
  
const SponsorComp = () => {
    return (
        <>
            <Reveal>
              <h2 className="h2 text-accent mb-6 flex justify-center items-center py-10 lg:pb-10">Our Sponsors</h2>
            </Reveal>
      <div className="bg-transparent relative w-[100%] my-0 h-[100px] overflow-hidden flex justify-center items-center">
        
        <div className="animate-infinite-slider flex gap-10 justify-center items-center w-[calc(250px*12)]">
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
  
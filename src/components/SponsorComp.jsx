import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
  import { Reveal } from "./Reveal";
  import PennantLogo from "../assets/Images/pennant.png"; 
  
  const LOGOS = [
    <img src={PennantLogo} className="w-[200px] h-[70px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
    // <TwitterLogoIcon className="text-slate-100 w-[40px] h-[40px]" />,
   
  ];
  
const SponsorComp = () => {
    return (
        <>
            <Reveal>
              <h2 className="h2 text-accent mb-6 flex justify-center items-center">Our Sponsors</h2>
            </Reveal>
      <div className="bg-transparent relative w-[100%] my-0 h-[100px] overflow-hidden flex justify-center items-center">
        
      {/* animate-infinite-slider */}
        <div className="flex justify-center items-center w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {/* {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))} */}
        </div>
      </div>
      </>
    );
  };

export default SponsorComp
  
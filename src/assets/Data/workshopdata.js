import img1 from "../Images/drone.avif";
import img2 from "../Images/genAI.avif";

const dataWorkshops = [
  {
    id: "Drone-Workshop",
    title: "Drone Technologies",
    desc: "Immerse yourself in a comprehensive two-day workshop exploring the fascinating world of drones. From delving into the rich history and categories of UAVs to understanding cutting-edge drone technology in the market, participants will gain insights into drone rules and regulations by DGCA, UAV architecture components, flight control software, and crucial designing factors. Elevate your knowledge as we delve into the integration of AI in drones and its diverse applications. Note: The flying session is subject to area and weather conditions on the respective day. Join us for an enlightening experience!",
    rule1: "Every one must bring their own laptops. ",
    rule2: `Should be present before 1 hour to the workshop. `,
    rule3: "Charging slots would be provided at the venue. ",
    rule4: `Candidate should attend the workshop 15 min before the session. `,
    rule5: "Participants will be provided high speed internet.",
    link: "https://forms.gle/QTBQtFLCQMDRM71Q7",
    list: {
      amount: "700/-",
      team: "Individual",
      prize: "",
    },
    img: img1,
    doc_link: "/",
  },
  {
    id: "Generative-Ai-Workshop",
    title: "Generative Ai",
    desc: "Embark on an immersive 2-day journey into the realm of Generative AI! Unleash the power of language models like GPT, explore cutting-edge applications, and delve into ethical considerations. Join us for a hands-on experience, crafting your own AI creations, and gain insights from industry experts. Elevate your skills and be at the forefront of innovation – register now for an enlightening workshop tailored for 2nd and 3rd-year B.Tech students proficient in Python, C, C++, and Java!",
    // no_of_rules: 3,
    rule1: "Every one must bring their own laptops. ",
    rule2: `Should be present before 1 hour to the workshop. `,
    rule3: "Charging slots would be provided at the venue. ",
    rule4: `Candidate should attend the workshop 15 min before the session. `,
    rule5: "Participants will be provided high speed internet.",
    link: "https://forms.gle/rLys7v9SnxkNcoML6",
    list: {
      amount: "600/-",
      team: "Individual",
      prize: 0,
    },
    img: img2,
    doc_link: "/",
  },
];

export default dataWorkshops;

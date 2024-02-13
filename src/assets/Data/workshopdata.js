import img1 from "../Images/drone.avif";
import img2 from "../Images/genAI.avif";

const dataWorkshops = [
  {
    id: "Drone-Workshop",
    title: "Drone Technologies",
    description:
      "Immerse yourself in a comprehensive two-day workshop exploring the fascinating world of drones. From delving into the rich history and categories of UAVs to understanding cutting-edge drone technology in the market, participants will gain insights into drone rules and regulations by DGCA, UAV architecture components, flight control software, and crucial designing factors. Elevate your knowledge as we delve into the integration of AI in drones and its diverse applications. Note: The flying session is subject to area and weather conditions on the respective day. Join us for an enlightening experience!",
    rules: [
      "Every one must bring their own laptops. ",
      `Should be present before 1 hour to the workshop. `,
      "Charging slots would be provided at the venue. ",
      `Candidate should attend the workshop 15 min before the session. `,
      "Participants will be provided high speed internet.",
    ],
    registration_link: "https://forms.gle/QTBQtFLCQMDRM71Q7",
    entry_fee: "700/-",
    team: "Individual",
    img: img1,
    learn_more: "/",
  },
  {
    id: "Generative-Ai-Workshop",
    title: "Generative Ai",
    description:
      "Embark on an immersive 2-day journey into the realm of Generative AI! Unleash the power of language models like GPT, explore cutting-edge applications, and delve into ethical considerations. Join us for a hands-on experience, crafting your own AI creations, and gain insights from industry experts. Elevate your skills and be at the forefront of innovation – register now for an enlightening workshop tailored for 2nd and 3rd-year B.Tech students proficient in Python, C, C++, and Java!",
    // no_of_rules: 3,
    rules: [
      "Every one must bring their own laptops. ",
      `Should be present before 1 hour to the workshop. `,
      "Charging slots would be provided at the venue. ",
      `Candidate should attend the workshop 15 min before the session. `,
      "Participants will be provided high speed internet.",
    ],
    registration_link: "https://forms.gle/rLys7v9SnxkNcoML6",
    entry_fee: "600/-",
    team: "Individual",
    img: img2,
    learn_more: "/",
  },
];

export default dataWorkshops;

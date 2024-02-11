import img1 from "../Images/drone.avif";
import img2 from "../Images/genAI.avif";

const dataWorkshops = [
  {
    id: "Drone-Workshop",
    title: "Drone Technologies",
    desc1:
      "Drone technologies is compromising computer systems for assessing security and acting in good faith by informing the vulnerable party People believe that “hacking” means to hack any website within a minute.",
    // desc2: `This concept comes from watching movies, so they do not even know the original basic concept of what it means to hack or how to do it. `,
    // desc3:To crack passwords or to steal data? No, DRone technologies is much more than that. DRone technologies is to scan vulnerabilities and to find potential threats on a computer or network. An ethical hacker finds the weak points or loopholes in a computer, web applications, or network and reports them to the organization.,
    no_of_rules: 3,
    rule1: "Every one must bring their own laptops",
    rule2: `Should be present before 1 hour to the workshop `,
    rule3: "Charging slots would be provided at the venue",
    // rule4: `Not allowed without registration receipt `,
    // rule4: `One should carry their Student ID card  `,
    link: "/",
    list: {
      amount: 600,
      team: "No",
      prize: "",
    },
    img: img1,
    doc_link: "/",
  },
  {
    id: "Generative-Ai-Workshop",
    title: "Generative Ai",
    desc1: `Generative Ai has revolutionized the way businesses and organizations manage their IT Infrastructure and resources. `,
    desc2: `In this workshop, we will provide an overview of Generative Ai, its benefits, and its challenges.  `,
    no_of_rules: 4,
    rule1: `Candidate should attend the workshop 15 min before the session. `,
    rule4: `. `,
    rule2: `This is an online Workshop.  `,
    rule3:
      "Candidates must have a stable and high-speed internet connection to attend the workshop",
    link: "/",
    list: {
      amount: 500,
      team: "No",
      prize: 0,
    },
    img: img2,
    doc_link: "/",
  },
];

export default dataWorkshops;

import React from "react";
import WorkshopsData from "../assets/Data/workshopdata";
import { useLocation } from "react-router-dom";

const EventPage = () => {
  const location = useLocation().pathname.split("/").at(-1);
  return WorkshopsData.map((item) => {
    if (item.id == location) {
      return (
        <div class="bg-site h-[100vh] px-4 lg:px-16 flex flex-col justify-center items-center lg:flex-row">
          <div class="w-full lg:w-1/2 lg:pr-4 flex flex-col justify-center gap-y-4 items-center">
            <h1 class="text-gradient text-4xl font-bold mb-4">{item.title}</h1>
            <img
              src={item.img}
              alt=""
              class="rounded-full border-2 h-36 w-36"
            />
            {/* <!-- <p class="text-gray-700 mb-4">Capture the Flag (CTF) events are cybersecurity competitions where participants, either individually or in teams, engage in a simulated environment to uncover and capture digital flags hidden within a set of challenges. These challenges span diverse categories such as cryptography, web exploitation, reverse engineering, forensics, and networking. The objective is to showcase participants' skills in ethical hacking and information security. The events often take place in a time-limited format, with competitors racing against the clock to solve as many challenges as possible.</p> --> */}
            <p class="text-white pl-4 lg:pl-0 mb-4">
              uptatum quo dignissimos?Teams or individuals leverage their
              expertise to exploit vulnerabilities, decrypt coded messages,
              analyze binaries, and navigate through realistic cybersecurity
              scenarios. CTFs can be hosted both locally, such as at
              universities or conferences, and online on dedicated platforms.
              Participants not only compete for prizes but also view the events
              as valuable learning opportunities to stay abreast of evolving
              cybersecurity techniques, making CTFs a dynamic and engaging way
              to foster skills and knowledge within the cybersecurity community.
            </p>
          </div>

          <div class="hidden lg:block border-l border-gray-300 h-auto"></div>

          <div class="w-full lg:w-1/2 pl-4 lg:block border-[#610d83] h-auto">
            <div class="text-left mb-4">
              <h2 class="text-lg font-semibold mb-2 text-gradient">
                Event Rules:
              </h2>
              <ul class="list-disc list-inside text-white">
                <li>
                  Ethical Conduct: Participants must adhere to ethical standards
                  and conduct themselves in a responsible and lawful manner.
                  Unethical behavior, including any attempt to compromise the
                  integrity of the competition or violate legal boundaries, is
                  strictly prohibited.
                </li>
                <li>
                  Respect for Systems: Participants must respect the integrity
                  of the systems and challenges provided for the event. Any
                  malicious actions, such as attempting to disrupt services or
                  intentionally damaging infrastructure, are not allowed.
                </li>
                {/* <!-- Add more rules as needed --> */}
              </ul>

              <ul class="list-disc list-inside text-white pt-8">
                <li>
                  <span class="text-gradient">Entry Fee:</span> 500/-
                </li>
                <li>
                  <span class="text-gradient">Mode of Participation :</span>{" "}
                  Team
                </li>
                <li>
                  <span class="text-gradient">Prize Pool :</span> click on view
                  more
                </li>
                {/* <!-- Add more rules as needed --> */}
              </ul>
            </div>

            {/* <!-- Buttons --> */}
            <div class="flex justify-center space-x-4">
              <button class="bg-blue-500 text-white px-4 py-2 btn btn-sm">
                Register
              </button>
              <button class="bg-gray-500 text-white px-4 py-2 btn btn-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      );
    }
  });
};

export default EventPage;

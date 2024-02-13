import cipher from "../Images/cipherchase.avif";
import typesprint from "../Images/typesprint.webp";
import logic from "../Images/logicleague.avif";
import codequest from "../Images/codequest.avif";
import crypto from "../Images/captureflag.avif";
import quiz from "../Images/quiz.avif";
import ggg from "../Images/beg.avif";
import hunt from "../Images/huntthehint.avif";
import ipl from "../Images/ipl.avif";
import moive from "../Images/moviemad.avif";
import makefamous from "../Images/MakeMeFamous.jpg";

const eventsData = [
  {
    id: "Cipher-Chase",

    title: "CIPHER CHASE",
    entry_fee: "150 Rs per Team (2 or 3)",
    rules: [
      "Each team must contain utmost three members.",
      "Registrations for the game must be done in advance by the participants.",
      "It's going to be conducted in a fair and transparent manner, and any kind of mischievous acts found will be disqualified immediately.",
      "Every participant must be attentive towards the rules and regulations of the game.",
      "The mode of the game is offline.",
      "All the teams will be qualified to the second level where, in level 2 according to the solving caliber of the participants, the time bound of the teams will be calculated. Near time bound teams will be sent to the next level. The level 1 has easy questions and level 2 has moderate questions and the difficulty level of the third level is moderate to tough. Only the top team(Winner) will be awarded with the prize money. Participation certificates will be given to the remaining teams.",
      "Each level solution will be the opening clues to the next level.",
    ],
    description:
      "It is a technical criminal investigation game, where the participants are supposed to use their technical knowledge and logical thinking ability. It is a crime story based game where the participants will be the part of the story and at the end they have to prove that they are not the accused by finding the end code word by solving the given challenges. It's like questions will be given as the part of the situation in the story which will lead to the end clue.",
    img: cipher,
    cash_prize: "1000 INR",

    team: "Team of 2 or 3",
    type: "tech",
    registration_link: "https://forms.gle/u8dzSMLKapjBFL5h6",
    learn_more:
      "https://docs.google.com/document/d/1qiOeFwTfNHzGttL31b5iJqupd3-HkbsC/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Type-Sprint",

    title: "TYPE SPRINT",
    entry_fee: "80/-",
    rules: [
      "Participants receive dedicated computer systems displaying a common paragraph.",
      "The competition unfolds in three challenging rounds.",
      "All contestants type the same paragraph within a set time limit.",
      "To progress, accuracy must exceed a predefined limit.",
      "Elimination occurs after each round based on performance.",
      "Scoring considers both speed and accuracy.",
      "Cheating, including external assistance, results in immediate disqualification.",
      "Participants must be available 20 min before the event starts",
    ],
    description:
      "Type Sprint is a high-speed typing competition where participants race against each other to accurately transcribe and input text. It tests both typing speed and precision, with contestants navigating through challenging passages ranging from complex paragraphs to technical jargon. Errors incur time penalties, adding pressure to maintain accuracy while typing quickly. It's a captivating display of skill, concentration, and the pursuit of keyboard supremacy.",
    cash_prize: "Upto 1500/-",
    team: "Individual",
    registration_link: "https://forms.gle/ZqAT7XywEUkcvnK9A",
    type: "tech",
    img: typesprint,
    learn_more:
      "https://docs.google.com/document/d/1fSm5pt0mE5ieGXfmyv4SYQmV92R3Kwue/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Logic-League",
    title: "LOGIC LEAGUE",

    entry_fee: "80/- per head",
    description:
      "Logic League is a tech event consisting of 2 rounds that are code shuffling and code memorizing in which basic and easy code questions are given. In code shuffling the lines in the code snippet are jumbled and should be arranged in order. In code memorizing code snippet will be given and questions will be asked based on the provided code.",
    rules: [
      "Single member participation.",
      "Every participant must register for the game and pay the entry fee before the start of the game.",
      "The game will be conducted fairly and ethically, and any misconduct or cheating will result in immediate disqualification.",
      "Participants must always adhere to the rules and regulations of the game.",
      "The event is conducted within the campus.",
      "After the 1st round, only half of the participants will be qualified for the 2nd round.",
      "The participant who solves the questions in less time and with a higher score is declared as the winner.",
    ],
    cash_prize: "1500/-",
    registration_link: "https://forms.gle/8GyDfkHH3qNGC7Lh8",
    img: logic,
    team: "Individual",
    type: "tech",
    learn_more:
      "https://docs.google.com/document/d/1nnQF_ewV-ExGxYwsdLhctyrYRsr43cdM/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Code-Quest",
    title: "Code Quest",

    entry_fee: "80/-",
    type: "tech",
    description:
      "'Code Quest' is a coding competition where participants showcase their skills in three rounds. They'll tackle problems, demonstrate creativity, and dive into the digital world to solve coding challenges. It's an exciting adventure that puts coding skills to the test and rewards creativity and problem-solving prowess.",

    rules: [
      "The competition is open to all individuals, regardless of their age, gender, or location. However, participants must have access to a computer and an internet connection.",
      "Only one attempt will be allowed for a participant.",
      "Participants will be allowed to log in to the exam 15 minutes before the event's start time.",
      "Participants will not be allowed to log in after 10 minutes of the start time.",
      "Participants must manage their time effectively and ensure that they complete each round within the specified time frame.",
      "The competition consists of three rounds: 'TEKQUIZZ,' 'BUG BASH,' and 'CODE SPRINT.' Each round has a specific duration, and participants must complete each round within the allotted time.",
      "Rounds will be Points based Scoring.",
      "Participants must maintain a high level of professionalism and ethical behavior throughout the competition. Any form of cheating or misconduct will result in immediate disqualification.",
      "Participants are not allowed to communicate with other participants during the competition.",
      "Any disputes arising during the competition will be resolved by the event coordinators. Their decision will be final and binding.",
      "The organizers reserve the right to modify the rules and regulations of the competition at any time. Participants will be notified of any changes through email or on WhatsApp Group.",
      "The declaration of winners will be based on Accuracy and Time Taken.",
    ],
    cash_prize: "1200",
    img: codequest,
    team: "Individual",
    registration_link: "https://forms.gle/d1oNuBepuoWX8WDg6",
    learn_more:
      "https://docs.google.com/document/d/1K9zUrxywooUj6RGQalWeehXx_M8fegMJ/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Crypto-Venture",
    title: "CRYPTO VENTURE",

    entry_fee: "120 Rs per Team",
    type: "tech",
    rules: [
      "Each team must consist of a maximum of two members.",
      "Participants must register for the game and pay the entry fee before the start of the game.",
      "The game will be conducted fairly and ethically, and any misconduct or cheating will result in immediate disqualification.",
      "Participants must always adhere to the rules and regulations of the game.",
      "This Game is conducted in Offline Mode",
      "Hints will be provided to the participants, who must follow up on the hints to find a hidden token.",
    ],
    description:
      "The game is called 'Crypto Venture' and is a dynamic technical challenge that unfolds in three compelling rounds, demanding participants to harness their technical expertise. Each team, composed of a maximum of two members, enters the game after registering and paying the entry fee. Fair play is paramount, and any misconduct or cheating leads to immediate disqualification. The game consists of three rounds, with elimination after the second round. Top 10 teams will be qualified for the final round. The top two teams that solve with lightning speed in the final round will be declared as the winners.",
    cash_prize: "1500 INR",
    team: "Team of 1 or 2",
    registration_link: "https://forms.gle/YAUB4cTdLp91NT1V6",
    learn_more:
      "https://docs.google.com/document/d/1ClEmWM_gUDRAHf4xa7JpptCXMFFFFxlL/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
    img: crypto,
  },
  {
    id: "Ex-Quiz-Me",
    title: "EX-QUIZ-ME",
    type: "Non-Tech",
    entry_fee: "150/- per team",
    rules: [
      "Only team entries are allowed, and the team shall consist of two or three persons.",
      "The decision of the quiz-master will be final and will not be subjected to any change.",
      "Participants shall not be allowed to use mobile or other electronic instruments during the quiz time.",
      "Supporters/other team members shall not give any hints or clues to the competitors.",
      "Replacement of any participant of a team is not allowed after registration.",
    ],
    description:
      "'Ex-Quiz-Me' is a fun game where people answer questions on various topics like general knowledge, movies or current events. It's not about technical stuff like computers or science, but more about everyday things everyone can relate to.Participants form teams or play individually. The event is conducted at three levels by eliminating few teams at each stage.The questions can be easy or challenging depending on the audience. It's a great way to test your knowledge, learn new facts, and have a good time with friends.",
    team: "Team of 3",
    img: quiz,
    cash_prize: "1500/-",
    registration_link: "https://forms.gle/gomW1YG3oxULBo3b8",
    learn_more:
      "https://docs.google.com/document/d/1ys2Vc2UjILEatdZawUUUQ15d28H2Xmp0/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Get-Grab-Gather",
    title: "Get/Grab/Gather",
    type: "Non-Tech",
    entry_fee: "150/-",
    cash_prize: "1000/-",
    description:
      "Get Grab Gather is a fun game, where each team comprising of 2 or 3 members are given a list of items to collect in a 45 minutes period. They can get the items either by persuasion(beg) , negotiation(borrow) or daring tactics(steal) . The team that manages to get all the items or maximum number of items is declared as the winner.",
    rules: [
      "Get Grab Gather is a team event and can contain 2-3 members.",
      "The teams will be provided with a list of particular items.",
      "The members in the team have to complete the task within the time limit of 45 minutes.",
      "The main concept of this game is to collect/gather the items by either begging or grabbing.",
      "After the completion of the task, the teams need to report their coordinator for evaluation.",
      "If any two teams complete the task within the time limit, the one who completes the task within the minimum time will be announced as the winner.",
      "If none of the teams failed to collect the listed items, then the one who collects the maximum number of items will be declared as the winner.",
    ],
    team: "Team of 2 or 3",
    registration_link: "https://forms.gle/KQs1BxCPswtZhL2W8",
    img: ggg,
    learn_more:
      "https://docs.google.com/document/d/1bkeb2Z4B3eYqFdOc8FIrZ4lTljrO78zh/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Hunt-The-Hint",
    title: "HUNT THE HINT",
    type: "Non-Tech",
    entry_fee: "150/-Team",

    rules: [
      "Each team must consist of a maximum of three members.",
      "Participants must register for the game and pay the entry fee before the start of the game.",
      "The game will be conducted fairly and ethically, and any misconduct or cheating will result in immediate disqualification.",
      "Participants must always adhere to the rules and regulations of the game.",
      "This game is conducted in Offline Mode.",
      "Hints will be provided to the participants, who must follow up on the hints to find a hidden hunt.",
      "Participants of each team must handover all the clues collected at the end of the game. Only the team which does not handover all the clues of their set will not be considered as the winner even if they completed their task first.",
    ],
    description: `'Hunt The Hunt' is a fun and adventurous activity where players follow clues or a map to find hidden treasures or objects. Players work together or compete against each other to solve puzzles, decipher clues, and navigate through various locations in search of the treasure. Here the end treasure could be anything, ranging from a small prize money to a significant object. It's a great way to promote teamwork, problem-solving skills, and creativity while having an exciting time with friends. We ensure that this game It fosters teamwork, problem-solving, and creativity while enjoying quality time with friends.`,
    cash_prize: "1000 INR",
    team: "Team of 2 or 3",
    img: hunt,
    registration_link: "https://forms.gle/fAQoyvEAuwfAy65r7",
    learn_more:
      "https://docs.google.com/document/d/1ocBjlqix4368vxzZHHzeWEpctkdyj9FQ/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Make-Me-Famous",
    title: "MAKE ME FAMOUS",
    type: "Non-Tech",
    entry_fee: "40/- per post",
    cash_prize: "up to 1000/-",
    img: makefamous,
    description:
      "Make Me Famous | CRESENCE2k24 invites all those passionate about being famous to participate in an online photo contest. It's time to step into the wow Instagram to show how much famous you are and your glamorous side.",
    rules: [
      "Only one post will be posted for every person.",
      "Likes will be hidden until the last date.",
      "Post with the highest likes will be rewarded.",
      "Posts with FAKE LIKES will be disqualified.",
      "Pictures captured from a camera of an object, person, things, or drawings are only allowed.",
      "Any other pictures or promotions will be prohibited.",
      "Your pictures should follow the community guidelines and shouldn't contain any offensive content.",
    ],
    team: "Individual",
    registration_link: "https://forms.gle/Pf2xvsr5aDVtw6Yq7",
    learn_more:
      "https://docs.google.com/document/d/1CAXEBabIHInRWt_gHM7swJJ5IbLufPCt/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Ipl-Auction",
    type: "Non-Tech",
    title: "IPL-AUCTION",
    entry_fee: "INR 150",
    description: `Introducing "IPL Auction," a thrilling event where participants step into the shoes of team owners and engage in strategic bidding wars for cricket players. With each round, teams aim to craft their dream squad by acquiring players based on their skills, track record, and availability, all while managing a set budget. This immersive experience not only brings cricket enthusiasts together but also fosters a friendly yet competitive environment. Participants will gain valuable insights into the dynamics of the actual IPL auction process, learning about the factors that determine player values. Moreover, exciting prizes await those who showcase their tactical prowess and emerge victorious in this ultimate cricket showdown.`,
    rules: [
      "The game is open to participants of all ages.",
      "Each team can contain a maximum of 3 members.",
      "Participants must register for the game and pay the entry fee before the start of the game.",
      "Team should select 11 members consisting of 4 batters, 1 keeper, 2 all-rounders, and 4 bowlers.",
      "If you fail to make a team of 11 members, then you will be disqualified from the auction.",
      "Each player in the auction has a credit score (up to 100) and is displayed during the auction. Example: 93,90 etc.",
      "Credit score for each player in the auction is given by organizers of the event (No more arguments regarding credit score will be tolerated).",
      "Result is based on the sum of the credit score of selected team players (i.e., the sum of 11 players' credit score that you bought/selected).",
      "The team which gets the maximum sum of credit scores wins the auction.",
      "Each registered team will get 1,00,00,000 (1 Crore) virtual bidding amount. If bidding is finished, the team which is unable to form a team of 11 members is disqualified.",
      "Each player has a base price of 2,00,000.",
    ],
    img: ipl,
    team: "Team of 3 Participants at max",
    cash_prize: "₹1000",
    registration_link: "https://forms.gle/Bu5mATShzKBp2fmN7",
    learn_more:
      "https://docs.google.com/document/d/105EThTLEDWy7komDnRNFCLrgp17LEzaD/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
  {
    id: "Movie-Madness",
    type: "Non-Tech",
    title: "MOVIE MADNESS",
    entry_fee: "150 Rs per Team",
    rules: [
      "Each team must consist of a maximum of three members.",
      "Participants must register for the game and pay the entry fee before the start of the game.",
      "The game will be conducted fairly and ethically, and any misconduct or cheating will result in immediate qualification.",
      "Participants must always adhere to the rules and regulations of the game.",
      "This game is conducted in offline mode.",
      "After the 1st Round, 7 teams will be qualified. The submission time of the answer is considered when there are more than 7 teams. The same thing also applies to the 2nd round. In the 2nd round based on pictorial representation, after this round, 3 teams will qualify for the final round.",
    ],
    description:
      "Movie madness is for all the Cinephiles out there....This game is based on the movies which give us a feeling of joy and happiness. For this, a keen knowledge in movies is required. That includes...movie names, dialogues, and songs. A team consisting of 2 or 3 members can participate and the game is conducted in three stages along with elimination at each level.",

    cash_prize: "1000 INR",
    img: moive,
    team: "Team of 2 or 3",
    registration_link: "https://forms.gle/4WmkrKRYnP5vDg1Y9",
    learn_more:
      "https://docs.google.com/document/d/1siGVvovuC3V0OTU3cLnmU1FuZ-z_LSZA/edit?usp=sharing&ouid=101073225983821030145&rtpof=true&sd=true",
  },
];

export default eventsData;

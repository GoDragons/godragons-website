import LogoDragon from "../assets/godragons_logo_dragon_only_square.png";

import IdeationIllustration from "../assets/godragons-ideation.png";
import PrototypingIllustration from "../assets/godragons-prototyping.jpg";
import SoftwareDevelopmentIllustration from "../assets/godragons-software-development.png";
import SystemDesignIllustration from "../assets/godragons-system-design.png";

const servicesData = [
  {
    name: "Ideation",
    slug: "ideation",
    icon: "lightbulb",
    description: "Working with you to envision software solutions to problems.",
    illustration: IdeationIllustration,
    paragraphs: [
      "GoDragons can help you come up with a concrete plan of action.",
      "Together we distill the problem and identify the best approach to solve it. Finally, we envision solutions that can turn your ideas into a reality.",
    ],
    bulletPoints: [
      "We offer structured, 4-hour workshops. (Remotely, due to the coronavirus pandemic)",
      "During the sessions, we identify key Risks, Assumptions, Issues and Dependencies.",
      "Typically, we devise an outline for a solution in 2 workshops (depending on the size and complexity of the problem).",
    ],
    pricing: [
      {
        name: "4 Hour Session",
        list: [
          "2 Consultants",
          "4 Hours",
          "Written report",
          "2 Sessions recommended",
        ],
        priceAmount: "1k",
        currency: "£",
        currencyPosition: "left",
        priceFrequency: null,
        image: LogoDragon,
      },
    ],
  },
  {
    name: "Prototyping",
    slug: "prototyping",
    icon: "pencil-ruler",
    description:
      "Building the wrong thing is expensive. Creating a prototype to validate assumptions is a fast and cost-effective strategy.",
    paragraphs: [
      "Creating a prototype to validate assumptions is a fast and cost-effective strategy to avoid making expensive mistakes.",
      "By starting the development process with a prototype, we get input from users and stakeholders very early on, which shapes the design process. Fast feedback is essential to success.",
    ],
    bulletPoints: [
      "Prototypes usually cost less than 3% of the total project.",
      "It can range from creating wireframes for use in user and stakeholder interviews to building a dynamic proof of concept.",
    ],
    illustration: PrototypingIllustration,
    pricing: [
      {
        name: "Static Prototype",
        list: [
          "20 days",
          "2 User interviews",
          "Clickable wireframes",
          "Test key assumptions",
          "Get fast feedback",
          "UX Research",
        ],
        priceAmount: "8k",
        currency: "£",
        currencyPosition: "left",
        priceFrequency: null,
        image: LogoDragon,
      },
      {
        name: "Dynamic Prototype",
        list: [
          "40 days",
          "4 User interviews",
          "Interactive application",
          "Test key assumptions",
          "Get fast feedback",
          "UX Research",
        ],
        priceAmount: "16k",
        currency: "£",
        priceFrequency: null,
        currencyPosition: "left",
        image: LogoDragon,
      },
    ],
  },
  {
    name: "Software development",
    slug: "software-development",
    icon: "laptop-code",
    description:
      "Build web and native apps, backend systems and entire platforms.",
    paragraphs: [
      "GoDragons offers full software development services, from building web and native apps to backend systems and entire platforms.",
      "We have a strong focus on delivering high quality and reliable software, on time.",
    ],
    bulletPoints: [
      "Our team builds self-healing and scalable microservices and serverless cloud native applications.",
      "We use modern practices including automated testing and continuous deployment.",
      "Our main programming languages are Go (golang), JavaScript (React and node), and Python.",
    ],
    illustration: SoftwareDevelopmentIllustration,
    pricing: [
      {
        name: "Small",
        list: [
          "Up to 3 months",
          "Includes ideation process",
          "Demo every 1-2 weeks",
          "Up to 3 milestones",
        ],
        priceAmount: "£10k-£20k",
        currency: "",
        priceFrequency: null,
        currencyPosition: "left",
        image: LogoDragon,
      },
      {
        name: "Regular",
        list: [
          "3 months",
          "Includes static prototype",
          "Includes ideation process",
          "Dedicated team",
          "Demo every 2 weeks",
          "Milestone every month",
        ],
        priceAmount: "£40k-£60k",
        currency: "",
        priceFrequency: null,
        currencyPosition: "left",
        image: LogoDragon,
      },
      {
        name: "Large",
        list: [
          "6 months",
          "Includes dynamic prototype",
          "Includes ideation process",
          "Dedicated team",
          "Demo every 2 weeks",
          "Milestone every month",
        ],
        priceAmount: "£40k-£60k",
        currency: "",
        priceFrequency: null,
        currencyPosition: "left",
        image: LogoDragon,
      },
    ],
  },

  {
    name: "System design",
    slug: "system-design",
    icon: "project-diagram",
    description:
      "If a picture is worth a thousand words, then a cloud-based systems architecture diagram is worth a million.",
    paragraphs: [
      "GoDragons architects cloud-based apps and platforms. Anything from serverless to real-time, event-driven systems.",
      "The emphasis is on keeping costs low by using native cloud offerings. This strategy lowers the overall cost of development and increases reliability.",
    ],
    bulletPoints: [],
    illustration: SystemDesignIllustration,
    pricing: [
      {
        name: "Per Project",
        list: [
          "Detailed diagrams of system architecture",
          "Written report",
          "Projected timeline",
          "Expected implementation and running costs",
        ],
        priceAmount: "£5k-£15k",
        currency: "",
        priceFrequency: null,
        currencyPosition: "left",
        image: LogoDragon,
      },
    ],
  },
];

export default servicesData;

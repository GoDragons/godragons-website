import LogoDragon from "../assets/godragons_logo_dragon_only_square.png";

import IdeationIllustration from "../assets/godragons-ideation.png";
import PrototypingIllustration from "../assets/godragons-prototyping.jpg";
import SoftwareDevelopmentIllustration from "../assets/godragons-software-development.png";
import SystemDesignIllustration from "../assets/godragons-system-design.png";
import GymPhoto from "../assets/godragons-gym-4.jpg";

const servicesData = [
  {
    name: "Ideation",
    tagline: "Turn your vision into a plan of action.",
    slug: "ideation",
    icon: "lightbulb",
    description: "Turn your vision into a plan of action.",
    illustration: IdeationIllustration,
    paragraphs: [
      "Together we distill the problem and identify the best approach to solve it. Then we envision solutions to make it a reality.",
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
        price: "£1000",
        priceFrequency: null,
        image: LogoDragon,
        discount: {
          line1: "50%",
          line2: "discount",
          newPrice: "£500",
        },
      },
    ],
  },
  {
    name: "Prototyping",
    tagline: "Building the wrong thing is expensive.",
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
        price: "£8k",
        priceFrequency: null,
        image: LogoDragon,
        discount: {
          line1: "50%",
          line2: "discount",
          newPrice: "£4k",
        },
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
        price: "£16k",
        priceFrequency: null,
        image: LogoDragon,
        discount: {
          line1: "50%",
          line2: "discount",
          newPrice: "£8k",
        },
      },
    ],
  },
  {
    name: "Software development",
    tagline: "We agree on an a project price and you never pay extra.",
    slug: "software-development",
    icon: "laptop-code",
    description:
      "We agree on an a project price and you never pay extra. Build web and native apps, backend systems and entire platforms.",
    paragraphs: [
      "We offer a free consultation, during which we work to understand what you need. Then we give you a quote based on the agreed-upon features and milestones.",
      "GoDragons offers full software development services, from building web and native apps to backend systems and entire platforms.",
      "We have a strong focus on delivering high quality and reliable software, on time.",
    ],
    bulletPoints: [
      "Our team builds self-healing and scalable microservices and serverless cloud native applications.",
      "We use modern practices including automated testing and continuous deployment.",
      "Our main programming languages are Go (golang), JavaScript (React and node), and Python.",
    ],
    caseStudy: {
      title: "HIIT Tribe",
      subtitle: "Using software to create a new kind of workout experience",
      img: GymPhoto,
      to: "/case-studies/hiit-tribe",
    },
    illustration: SoftwareDevelopmentIllustration,
    pricing: [
      {
        name: "Agile Development",
        list: [
          "Demo every 2 weeks",
          "Fixed cost per milestone",
          "Milestone every month",
          "Invoice for every milestone",
        ],
        price: "£60",
        priceFrequency: "per hour per developer",
        image: LogoDragon,
        discount: {
          newPrice: "£30",
          line1: "50%",
          line2: "discount",
        },
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
        price: "£5k-£15k",
        image: LogoDragon,
        discount: {
          line1: "50%",
          line2: "discount",
          newPrice: "£2.5k-£7.5k",
        },
      },
    ],
  },
];

export default servicesData;

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  noice,
  kitrum,
  luckytruck,
  citrusbits,
  cloudtek,
  zixsol,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Kitrum - Florida, United States",
    icon: kitrum,
    iconBg: "#31c6c9",
    date: "Jan 2023 - Present",
    points: [
      "Designed and developed an internal tool for Matchmakers to manage clients and dates which added a lot of value to the platform.",
      "Migrated legacy PHP app to faster React and Nodejs Application which greatly improved user experience and platform performance.",
      "Migrated Users data to ElasticSearch for faster search experience and higher performance.",
      "Continuously delivered value, extended the team and supported team members in the war environment.",
      "Fixed bugs and problems across the entire codebase in an efficient, timely manner.",
    ],
    teamStructure: "20+ people: 1 VP Engineering, 1 Engineering Manager, 1 Architect, 10+ Full Stack Engineers, 3 QAs, 1 UI/UX Engineer,  2 Project Managers,  1 Product Owner etc.",
    tools: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Material UI",
      "PHP",
      "Typescript",
      "MySQL",
      "Redis",
      "Bull",
      "Docker",
      "AWS",
      "Microservices",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "NOICE - Jakarta, Indonesia",
    icon: noice,
    iconBg: "#383E56",
    date: "Feb 2022 - June 2023",
    points: [
      "Performed an integral role in design and development of Live Service which is the core component of the platform.",
      "Architected, developed and incorporated the gamification module in the platform which is the core revenue generator for the platform.",
      "Proposed the use of in memory datastore i.e Redis for faster load time and optimization and user experience consequently which was a big success.",
      "Incorporated redis as a caching layer into the codebase to improve the API’s overall performance.",
      "Proposed the use of Pubnub to replace firebase as medium for server to client communication which was a huge success.",
      "Migrated the server to client communication architecture from firebase to Pubnub which greatly improved user experience.",
      "Improved test coverage of the codebase up to 95%."
    ],
    tools: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Nest.js",
      "Node.js",
      "Typescript",
      "TypeORM",
      "ElasticSearch",
      "Redis",
      "Agora",
      "PubNub",
      "Firebase",
      "MySQL",
      "MongoDB",
      "Microservices",
      "Jenkins",
      "Google Cloud"
    ]
  },
  {
    title: "Senior Software Engineer",
    company_name: "Citrusbits - Pasadena, California",
    icon: citrusbits,
    iconBg: "#383E56",
    date: "August 2020 - Jan 2022",
    points: [
      "Named employee of the month, employee of quarter multiple times.",
      "Worked as Backend Team Lead for the top project of the company.",
      "Introduced technologies like GraphQL, Redis , Microservices, GraphDB to the company which added more value to the company development skill set",
      "Implemented design and development of more than 5 web applications using React, Angular, Node.js etc",
      "Learned and worked with Agora and used it in two streaming applications for the company and in the process trained junior developers about agora",
      "Introduced the culture of unit testing to improve test coverage and code robustness.",
      "Developed an npm package to be reusable for other company projects.",
      "Introduced and enforced the culture of project documentation for robust software development.",
      "Introduced best practices and coding standards and monitored projects to make sure processes are followed."
    ],
    tools: [
      "React",
      "Next.js",
      "Angular",
      "Material UI",
      "TailwindCSS",
      "GraphQL",
      "Node.js",
      "Typescript",
      "Agora",
      "Redis",
      "MySQL",
      "MongoDB",
      "CosmosDB",
      "Azure"
    ]
  },
  {
    title: "Senior Software Engineer",
    company_name: "Cloudtek - Islamabad, Pakistan",
    icon: cloudtek,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Aug 2020",
    points: [
      "Employee of the Year 2019.",
      "Promoted to the position of Senior Software Engineer within the first three months of joining.",
      "Assigned to major company projects resulting in generation of stable revenue streams.",
      "Learned a lot of new technologies and provided training to other developers thus improving the company's overall skillset.",
      "Worked as Team Lead on the company's Inhouse product which was an  IOTs-based application.",
      "Learned to effectively communicate with clients."
    ],
    tools: [
      "React",
      "Angular",
      "Vue",
      "Typescript",
      "Node.js",
      "PHP",
      "Pythong",
      "Django",
      "Laravel",
      "GraphQL",
      "Docker",
      "MongoDB",
      "Postgres",
      "MySQL",
      "AWS"
    ]
  }
];

const testimonials = [
  {
    testimonial:"I worked with Malik for over a year at Tawkify through Kitrum. Malik is an engineer that showed great motivation, an ability to quickly ramp up on the javascript stack, and to deliver impact at great spead. I appreciated his efforts to be available on US hours, which is a testimony to his commitment to the project",
    name: "Mikaël CASTELLAN",
    designation: "Engineering Manager",
    company: "Kitrum",
    image: "https://media.licdn.com/dms/image/C4E03AQFKl6hqKYcFEw/profile-displayphoto-shrink_100_100/0/1517507088879?e=1703721600&v=beta&t=0B8xvq-NO6p1QIg3he0EUIbp7SuzU4erZNnvpd6NwEM",
  },
  {
    testimonial:"We contracted Malik through Kitrum. He demonstrated an outstanding ability to consistently deliver quality software solutions with remarkable speed. Despite being on the opposite side of the world, he committed to working our core hours and found resourceful ways to unblock himself while awaiting clarifications. He responded well to feedback and his work demonstrably improved with each code review. Take the time to provide him clear requirements, give him good actionable feedback on deliverables and you'll have a valuable asset for any dev team.",
    name: "Patrick Shih",
    designation: "Founding Engineer",
    company: "Kitrum",
    image: "https://media.licdn.com/dms/image/C4E03AQFKl6hqKYcFEw/profile-displayphoto-shrink_100_100/0/1517507088879?e=1703721600&v=beta&t=0B8xvq-NO6p1QIg3he0EUIbp7SuzU4erZNnvpd6NwEM",
  },
  {
    testimonial:
      "It was a pleasure working with Malik, and I can vouch that he is one of the most dedicated and hard working team member. He would always step up and take responsibilities when needed. He is never shy of expressing his opinions and gives valuable inputs in every discussion. He is also a good multitasker and can take ownership of several features.",
    name: "Tirtha Ghosh",
    designation: "Engineering Manager",
    company: "Noice",
    image: "https://media.licdn.com/dms/image/C4E03AQFKl6hqKYcFEw/profile-displayphoto-shrink_100_100/0/1517507088879?e=1703721600&v=beta&t=0B8xvq-NO6p1QIg3he0EUIbp7SuzU4erZNnvpd6NwEM",
  },
  {
    testimonial:
      `Faizan has been an amazing employee and team member in his role as a Full Stack Developer in our Engineering team. He has done some outstanding work across the
      domains of React,NodeJS, GraphQL, Postgres, AWS, Python, Django, Web Scraping/Crawling and Selenium etc. He's a creative problem solver who is language agnostic when it comes to building solutions. It has been a pleasure to have him as a member of our team.`,
    name: "Haseeb Khizar",
    designation: "Technical Lead",
    company: "Luckytruck",
    image: "https://media.licdn.com/dms/image/D4D03AQEJxZLQZ2VqHQ/profile-displayphoto-shrink_100_100/0/1668662515901?e=1703721600&v=beta&t=XXXHObPRWfXOcYjCiGQeVSxEi3Jp-dXUNXxd1zCuhYg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Noice Indonesia",
    link: 'https://open.noice.id/',
    description:
      "Noice is a multi-vertical audio platform that brings vernacular content to Indonesian listeners. Noice provides a wide array of content like podcast, radio, and audiobook. Noice is also Indonesia's largest podcast network with over 100+ original shows across different genres. Our mission is to let everyone have more delightful screenless moments, one listen at a time.",
    tools: [
      "React",
      "Nest.js",
      "MySQL",
      "MongoDB",
      "Firebase",
      "ElasticSearch",
      "Redis",
      "Microservices",
      "Kafka",
      "Agora",
      "Pubnub",
      "GCP"
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Feed U",
    link: 'https://www.feeduapp.com/',
    description:
      "A dynamic food gifting platform for college students to send and receive the foods they love from their favorite local college-town restaurants AND national merchants.",
    tools: [
      "React",
      "Next.js",
      "Material UI",
      "TailwindCSS",
      "MongoDB",
      "Nest.js",
      "Azure"
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Erupt: News & Debate",
    link: 'https://citrusbits.com/portfolio/erupt/',
    description:
      "Erupt is a livestream audio & video platform for passionate debate and free-flowing discussion among the voices of the future.",
      tools: [
        "React",
        "TailwindCSS",
        "MongoDB",
        "Redis",
        "Nest.js",
        "Agora",
        "Azure"
      ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Alaska Commercial",
    link: 'https://citrusbits.com/portfolio/alaska-commercial-company/',
    description:
      "Alaska Commercial Company is a retail company which provides groceries and general merchandise in stores throughout Alaska.",
      tools: [
        "React",
        "React Native",
        "TailwindCSS",
        "MongoDB",
        "Node.js",
        "Azure"
      ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Urban Plates",
    link: 'https://citrusbits.com/portfolio/urban-plates/',
    description:
      "Urban Plates is a fast-growing restaurant chain, whose focus on delicious, healthy, and affordable food is attracting a legion of passionate customers spanning from California to Washington D.C.",
      tools: [
        "React",
        "React Native",
        "TailwindCSS",
        "MongoDB",
        "Node.js",
        "Azure"
      ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  {
    name: "LoveSac",
    link: 'https://citrusbits.com/portfolio/lovesac/',
    description:
      "LoveSac is a leading modern furniture brand in the United States. Specializing in a patented, modular furniture system called Sactionals — couches that are endlessly configurable and customizable — LoveSac has cultivated a passionate customer base throughout the country.",
      tools: [
        "React",
        "Angular",
        "TailwindCSS",
        "MySQL",
        "Node.js",
        "Azure"
      ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
];

const freelance = [
  {
    name: "Buuk",
    link: 'https://buuk.app/',
    description:
      "A German book tracking platform",
      tools: [
        "Vue",
        "Nuxt.js",
        "Bootstrap",
        "Angular Material",
        "MongoDB",
        "Docker",
        "Nest.js",
        "AWS"
      ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Westage MFG",
    link: 'https://westgatemfg.com/',
    description:
      "A platform for manufacturing and sales of electronic devices",
      tools: [
        "React",
        "Next.js",
        "Bootstrap",
        "Ant Design",
        "Postgres",
        "Sequelize",
        "Node.js",
        "GCP"
      ],
    image: tripguide,
    // source_code_link: "https://github.com/",
  },
  {
    name: "LA Glatt Mart",
    link: 'https://laglattmart.com/',
    description:
      "An E-commeric platform",
      tools: [
        "React",
        "Next.js",
        "Bootstrap",
        "Ant Design",
        "Postgres",
        "Sequelize",
        "Node.js",
        "GCP"
      ],
    image: tripguide,
    // source_code_link: "https://github.com/",
  },
];
export { services, technologies, experiences, testimonials, projects, freelance };

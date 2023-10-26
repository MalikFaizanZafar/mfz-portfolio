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
    date: "August 2022 - Present",
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
    date: "March 2022 - August 2023",
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
    title: "Team Lead Software Enginner",
    company_name: "Luckytruck - McHenry, Illinois",
    icon: luckytruck,
    iconBg: "#E6DEDD",
    date: "August 2021 - July 2022",
    points: [
      "Improved the verification module by scrapping trucking companies data from third party platforms into inhouse database which improved the verification process immensely.",
      "Built a tool to automate the process of getting an insurance quote from third party platforms which reduced the need for the manual way of doing the same process.",
      "Designed and developed Failure Identification Module for notifying the stakeholders in case of a quotation process failure by incorporating slack notifications and API logging resulting in earlier identification of problems and their resolution.",
      "Used Next.js to improve SEO of the company’s website which greatly improved outreach of the platform.",
      "Introduced the culture of unit testing which increased test coverage to a great number eventually resulting in much less bugs.",
      "Forced the implementation of product documentation to ensure a robust software development process.",
      "Was able to cover up for a Python Developer successfully in critical situations without impacting business goals."
    ],
    tools: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Prime React",
      "Node.js",
      "Python",
      "Django",
      "Selenium",
      "Prisma",
      "Postgres",
      "Docker",
      "Lamdas",
      "AWS"
    ]
  },
  {
    title: "Senior Software Engineer",
    company_name: "Citrusbits - Pasadena, California",
    icon: citrusbits,
    iconBg: "#383E56",
    date: "August 2020 - July 2021",
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
    date: "Jan 2019 - July 2020",
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
  },
  {
    title: "Software Engineer",
    company_name: "ZixSols - Islamabad, Pakistan",
    icon: zixsol,
    iconBg: "#E6DEDD",
    date: "September 2017 - December 2018",
    points: [
     "Learned a lot of new technologies in a very short time to enhance the company's overall technologies expertise thus attracting more clients.",
     "Onboarded myself in a very limited time and got the responsibility to work on the main product",
     "Mentored junior developers, improving team productivity and overall knowledge sharing.",
     "Worked as the senior developer when another senior left the company to make sure continuous development and delivery of the on going projects",
     "Lead and participated in design, development and implementation of three new projects adhering to best practices, coding standards and architectural guidelines",
     "Learned best practices and coding standards thus improving my overall efficiency and productivity."
    ],
    tools: [
      "Vue",
      "Nuxt.js",
      "React",
      "Angular",
      "Bootstrap",
      "Material UI",
      "Node.js",
      "Firebase"
    ]
  },
];

const testimonials = [
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

import webcastle from "../public/webcastle.jpg";
import ibm from "../public/ibm.png";

type ExperienceItem = {
  company: string;
  role: string;
  startDate: string;
  logo: any;
  endDate: string;
  current: boolean;
  Responsibilities: string[];
  skillsAquired: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Webcastle Media",
    role: "FullStack Developer",
    startDate: "Feb 2024",
    endDate: "Present",
    current: true,
    logo: webcastle,
    Responsibilities: [
      "Developed StoreDaDa, a PaaS based headless E-Commerce platform that enables businesses to launch online stores with minimal effort.",
      "Scalability: Serves multiple B2B and B2C websites, ensuring performance and reliability",
      "Product Stability and Impact: Played a pivotal role in ensuring product reliability, enabling businesses to scale and manage multiple websites efficiently.",
      "Feature Architecture: Innovated and implemented robust architecture for new features, ensuring scalability and alignment with business goals."
    ],
    skillsAquired: [
      "Next.js",
      "Tailwind CSS",
      "TS/JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Git/Gitlab",
      "SEO",
      "Google analytics",
      "SAAS/PAAS",
    ],
  },
  {
    company: "IBM India Softwware Labs",
    role: "Software Developer",
    startDate: "Jul 2023",
    endDate: "Oct 2023",
    logo: ibm,
    current: false,
    Responsibilities: [
      "Worked as a software developer in the Hyper Blue startup section within IBM",
      "Contributed to frontend development at Pathway Signal Management, an IBM incubator focused on healthcare data management.",
      "Conducted UI testing using Puppeteer and Jest to ensure seamless functionality.",
      "Gained experience with IBM Cloud integration",
      "Worked closely with the design team and utilized JavaScript and React JS for UI development.",
    ],
    skillsAquired: [
      "React Js",
      "TypeScript",
      "SCSS",
      "Open shift",
      "Figma",
      "IBM Cloud",
      "Jest",
      "Git",
      "Pupeteer",
    ],
  },
  {
    company: "IBM India Softwware Labs",
    role: "Software Developer Intern",
    startDate: "Jan 2022",
    endDate: "Jun 2022",
    current: false,
    Responsibilities: [
      "Contributed to UI development and testing processes as a software developer intern",
      "Gained valuable insights into GraphQL, enhancing skills in modern web development practices.",
    ],
    logo: ibm,
    skillsAquired: ["GraphQL", "React Js, Swagger, Postman"],
  },
];

import { JobDetails } from "./types";

export const jobData: JobDetails[] = [
  {
    title: "TAIT COMMUNICATIONS",
    technologies: [
      "C++",
      "JavaScript",
      "Python",
      "C#",
      "HTML/CSS",
      "Vue",
      "ASP.NET Core",
      "Xamarin/MAUI",
      "MongoDB",
      "Redis",
      "GitLab CI/CD",
      "Docker",
    ],
    role: "Full Stack Software Engineer",
    dateStart: "Mar 2022",
    dateEnd: "Feb 2024",
    description: [
      "Developed features and provided maintenance for an internet based, PTT radio solution.",
      "Created a full-stack web application with a frontend, REST API, cache, NO-SQL database for clients to be able to make Voip to PSTN Calls, configure diversion rulesets and monitor system health.",
      "Worked in multiple domains of software development such as mobile apps, web apps, cloud infrastructure, CI/CD processes, application servers/gateways, testing strategies, networking and IOT devices.",
      "Migrated the deployment from a cloud solution to on-prem with HA, SNMP and other features.",
      "Learned OOP and low-level developmental practices to ensure low latency performance in multiple event-based architectures.",
      "Applied tight security practices to meet clients high security requirements and mission critical compliance.",
      "Integrated our software solution with multiple APIs by collaborating across various sectors within a large engineering company and also with external software providers.",
    ],
    link: "https://www.taitcommunications.com/",
  },
  {
    title: "MYRACELAB",
    technologies: ["React-Native", "TypeScript"],
    role: "Developer Intern",
    dateStart: "Nov 2021",
    dateEnd: "Jan 2022",
    description: [
      "Worked independently on research and development for a car racing assistant startup to extract all available sensor data from different devices.",
      "Built a mobile app to record all phone sensor data, interface with a vehicle ECU via ATT commands and strip data from multiple GPS devices via bluetooth.",
    ],
    link: "https://myracelab.com/",
  },
];

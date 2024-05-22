import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I studied software engineering at the University of Western Ontario. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Mediq-sys",
    description: `Designed and developed an administrative dashboard to manage user data and generate reports. Implemented RESTful APIs for data communication between the frontend and backend. Collaborated with the design team to create user-friendly interfaces and improve the overall user experience.`,
    technologies: ["Virtual Box", "Meteor.js", "mongoDB"],
    link: ""
  },
  {
    year: "2022 - 2023",
    role: "Tranco Engineering Technician",
    company: "JFE Shoji Power",
    description: `Oversaw transformer core manufacturing and assembly processes. Conducted quality control inspections to ensure compliance with industry standards. Collaborated with cross-functional teams to troubleshoot and resolve technical issues.`,
    technologies: [],
    link: "https://jfeshojipower.com/"
  },
  {
    year: "2019 - 2020",
    role: "AGI Developer",
    company: "Capreit",
    description: `Developed Above Guideline Increase (AGI) reports for residential properties. Implemented data visualization tools to analyze and present financial data. Collaborated with the finance team to automate data collection and reporting processes.`,
    technologies: ["Exel", "SAP", "Python"],
    link: "https://www.capreit.ca/"

  },
  {
    year: "2016 - 2019",
    role: "Tutor",
    company: "Kumon",
    description: `Provided personalized instruction to students in math and English. Developed lesson plans and learning materials to help students improve their academic performance. Monitored student progress and provided feedback to parents.`,
    technologies: ["Math", "English"],
    link: "https://www.kumon.com/"

  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "mySQL"],
  },
  {
    title: "Social Media App",
    image: project2,
    description:
      "An accessible web application designed to empower individuals with intellectual disabilities and their caretakers.",
    technologies: ["HTML", "CSS", "React", "Firebase", "Google Cloud"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vue.js"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A django CMS platform for creating and publishing blog posts, with features like rich text editing, commenting.",
    technologies: ["Python", "Django", "CSS", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "1151 Richmond St, London, ON N6A 3K7, Canada",
  phoneNo: "+1 (905) 483 6976",
  email: "pagherghel@gmail.com",
};

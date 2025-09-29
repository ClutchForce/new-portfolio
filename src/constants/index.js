import printproj from "../assets/projects/print.png";
import project1 from "../assets/projects/dash.png";
import project2 from "../assets/projects/cheer.png";
import project3 from "../assets/projects/port.png";
import project4 from "../assets/projects/blog.png";
import project5 from "../assets/projects/stock.png";
import project6 from "../assets/projects/fer.png";
import project7 from "../assets/projects/robot.png";
import project8 from "../assets/projects/kademlia.png";
import project9 from "../assets/projects/mern.png";
import project10 from "../assets/projects/reflex.png";
import project11 from "../assets/projects/sudo.png";
import project12 from "../assets/projects/pygame.png";


export const BASE_URL = "/new-portfolio/";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I studied software engineering at the University of Western Ontario. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full Stack Developer",
    company: "Mediqsys",
    description: `Created a custom OAuth reverse proxy nginx authentication with HTTPS. Developed an administrative full stack dashboard for user role and permission assignment. Worked with various virtual machine applications and a unix based VM remotely accessed through SSH. Developed an administrative dashboard to manage user data and generate reports. Implemented RESTful APIs for data communication between the frontend and backend. Collaborated with the design team to create user-friendly interfaces and improve the overall user experience.` ,
    technologies: ["Virtual Box", "Meteor.js", "mongoDB", "Docker", "Nginx"],
    link: "https://mediqsys.com/"
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
    technologies: ["Excel", "SAP", "Python"],
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
    title: "3D-Printing Service",
    image: printproj,
    description:
      "Making custom prints for friends and clients. Using 3D printing for hobby projects.",
    technologies: ["Ender 3", "Cura", "Fusion 360", "Onshape"],
    link: "Print",
  },
  {
    title: "Robotic Arm Platform",
    image: project7, 
    description:
      "An affordable and modular robotic arm system with 3D-printed components, AI vision, and a React control interface designed for students and makers.",
    technologies: ["React", "OpenCV", "YOLO", "Fusion 360", "3D Printing"],
    link: "https://github.com/ColeMcClutch/SE4450_Team21_ArmApplication",
  },
  {
    title: "Stock Price Forecasting AI",
    image: project5, 
    description:
      "A machine learning study comparing XGBoost, LSTM, and Lasso Regression to forecast S&P 500 stock prices using historical data and technical indicators.",
    technologies: ["Python", "XGBoost", "LSTM", "Pandas", "Matplotlib"],
    link: "https://github.com/KaiOnNg/ML_Project",
  },
  {
    title: "Facial Emotion Recognition AI",
    image: project6, 
    description:
      "A deep learning research project focused on improving facial emotion recognition using ResNet architectures and attention mechanisms on FER2013.",
    technologies: ["Python", "PyTorch", "ResNet", "Attention", "FER2013"],
    link: "https://github.com/ClutchForce/AI-Research",
  },
  {
    title: "Social Media App",
    image: project2,
    description:
      "An accessible web application designed to empower individuals with intellectual disabilities and their caretakers.",
    technologies: ["CSS", "React", "Firebase", "Google Cloud"],
    link: "https://github.com/ClutchForce/C.H.E.E.R-app",
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "mySQL"],
    link: "",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A django CMS platform for creating and publishing blog posts, with features like rich text editing, commenting.",
    technologies: ["Python", "Django", "CSS", "PostgreSQL", "GCP"],
    link: "https://github.com/ClutchForce/mysite",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "React", "Vue.js"],
    link: "https://github.com/ClutchForce/new-portfolio",
  },
  {
    title: "Superhero Explorer",
    image: project9, 
    description:
      "A full-stack MERN web app that lets users explore superheroes, create lists, and engage with a community of fans through shared content and comments.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "AWS"],
    link: "https://github.com/ClutchForce/MERN-Fullstack-app",
  },
  {
    title: "Kademlia P2P Network",
    image: project8, 
    description:
      "A Node.js-based peer-to-peer network that simulates a Kademlia DHT protocol, enabling dynamic node communication, decentralized data routing, and scalable P2P topology.",
    technologies: ["Node.js", "Networking", "Sockets", "DHT", "JavaScript"],
    link: "https://github.com/ClutchForce/Kademlia-P2P-network",
  },
  {
    title: "Reflex Master",
    image: project10, 
    description:
      "A microprocessor-based reflex game inspired by Bop It! that challenges players' reaction time and cognition through rapid audio-visual cues and physical inputs.",
    technologies: ["C", "Assembly", "Embedded Systems"],
    link: "https://github.com/ClutchForce/Reflex-Master",
  },
  {
    title: "Sudo Uno",
    image: project11, 
    description:
      "A multi-user terminal-based UNO game built with a C++ server and Python client, featuring real-time multiplayer over a custom TCP protocol and retro-styled CLI gameplay.",
    technologies: ["C++", "Python", "TCP Sockets", "Multithreading"],
    link: "https://github.com/RaddedMC/sudo-uno",
  },
  {
    title: "Pygame Project",
    image: project12,
    description:
      "A 2D RPG dungeon crawler built with Python and Pygame, featuring sprite animations, multiple levels, and a turn-based boss battle inspired by classic Pokémon combat.",
    technologies: ["Python", "Pygame"],
    link: "https://github.com/ClutchForce/Pygame-Project",
  }
  
  
  
  

];

export const CONTACT = {
  address: "1151 Richmond St, London, ON N6A 3K7, Canada",
  phoneNo: "+1 (905) 483 6976",
  email: "pagherghel@gmail.com",
};

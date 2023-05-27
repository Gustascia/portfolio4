import {
    mobile,
    code,
    creator,
    web,
    javascript,
    design,
    html,
    upwork,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    starbucks,
    tesla,
    carrent,
    jobit,
    tripguide,
    project1,
    project2,
    project3
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
      title: "Web Developer",
      icon: web,
    },
 
    {
      title: "Web designer",
      icon: design,
    },
    {
      title: "App developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      index:1,
    },
    {
      name: "CSS 3",
      icon: css,
      index:2,
    },
    {
      name: "JavaScript",
      icon: javascript,
      index:3,
    },
    {
      name: "React JS",
      icon: reactjs,
      index:4,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      index:5,
    },
    {
      name: "Node JS",
      icon: nodejs,
      index:6,
    },
    {
      name: "git",
      icon: git,
      index:7,
    },
    {
      name: "figma",
      icon: figma,
      index:8,
    },
  ];
  
  const experiences = [
    {
      index:1,
      title: "Code Academy full-stack",
      icon: code,
      points: [
        "In the Full-Stack course, I eagerly delve into the world of web development.I refined my skills in both front-end and back-end development,as well as in web design.In the course we learnt about using python, Javascript, Adobe XD to make visually stunning websites ",
      ],
    },
    {
      index:2,
      title: "Upwork Freelance",
      icon: upwork,
      points: [
        "As a freelance web developer, I leverage the power of Upwork to create stunning and functional websites for clients worldwide. With expertise in React, Tailwind and responsive design, I deliver customized solutions tailored to each client's unique requirements. ",
      ],
    },

  ];
  
  
  const projects = [
    {
      name: "Youtube remake",
      description:
        "Impressive YouTube remake project showcasing full-stack skills, attention to detail, and ability to somewhat recreate the platform.",
      image: project3,
      source_code_link: "https://github.com/",
    },
    {
      name: "RPG game",
      description:
        " An rpg game using Javascript and HTML5 Canvas, the project was meant to diversify my skills. Those damn collisions gave me a hard time",
      
      image: project1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Online clothes shop",
      description:
        "An online shop of clothes, old project , used old style of coding, needs improvements but it's in here for the sake of variety, front-end only", 
      image: project2,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };
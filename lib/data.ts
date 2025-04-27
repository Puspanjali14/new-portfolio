import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import resumeScreening from "@/public/resume-screening.png";
import restaurant from "@/public/restaurant.jpg";

import ecommerce from "@/public/ecommerce.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Resume Screening",
    description:
    
    "Web app using NLP/NER to extract resume data & kNN to rank candidates, speeding up hiring ",
    tags: ["Html","Css","Javascript", "Flask", "Mysql"],
       imageUrl: resumeScreening,
       link: "https://github.com/puspanjali123/resume-screening",
  },
  {
    title: "Ecommerce ",
    description:
      "React e-commerce site  with product browsing, cart management, and secure checkout.",
    tags: ["HTML", "CSS", "Javascript", "React"],
    imageUrl:ecommerce,
    link: "https://github.com/puspanjali123/resume-screening",

  },
  {
    title: "Restaurant Menu App",
    description:
      "Responsive restaurant menu app (HTML/Tailwind/JS) for easy browsing and item filtering.",
    tags: ["HTML", "Tailwind CSS", "Javascript"],
    imageUrl: restaurant  ,
    link: "https://resturantmenuuuuuu.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Tailwind",
  "Github",
  "ContextApi",
  "Figma",
  
  ,
] as const;

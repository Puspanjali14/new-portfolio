"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Puspanjali Neupane, currently pursuing my Bachelor's degree in Computer Science.
        I'm passionate about technology and constantly exploring new ways to solve problems through code.
        I enjoy building web applications and learning about different areas within computer science.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy <span className="font-medium">painting</span>, 
        and <span className="font-medium">traveling</span>. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and continuously <span className="font-medium">honing my communication skills</span>.
      </p>
    </motion.section>
  );
}

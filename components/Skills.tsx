// import React from "react";
// import Card from "./Card";
// import { skillsData } from "@/data/skillsData";
// import { IconType } from "react-icons";

// interface CardTypes {
//   Icon: IconType,
//   title: string,
//   desc: string,
//   bgColor: string
//   padd: string,
//   textColor?: string
//   titleColor?: string
//   iconSize?: string
//   iconColor?: string
// }

// const Skills = () => {
//   return (
//     <section className="w-full m-10 max-sm:m-0">
//       <div className="flex justify-center">
//         <h1 className="text-[50px] text-[#6B41FE] font-pop font-[700] relative after:content-[''] after:absolute after:transition-all after:duration-300 after:ease-in-out after:w-0 after:bg-[#6B41FE] after:h-[3px] after:left-0 after:hover:w-full after:bottom-0 max-sm:text-[30px] max-sm:mt-5">
//           Skills
//         </h1>
//       </div>
//       <div className="flex justify-center items-center flex-wrap gap-10 mt-10 p-5">
//         {skillsData.map((skill: CardTypes, index: number) => (
//           <Card key={index} {...skill} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "HTML", level: 95 },     
  { name: "Next.js", level: 85 },     
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Tailwind", level: 80 },
  { name: "Bootstrap", level: 70 },
  { name: "SQL", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "MongoDB", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 80 },
  { name: "JavaScript", level: 90 }
];



export default function Component() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold text-center mb-8">My Skills</h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-200 mb-2">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-blue-500">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

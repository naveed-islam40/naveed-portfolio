import React from "react";
import Card from "./Card";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <section className="w-full m-10 max-sm:m-0">
      <div className="flex justify-center">
        <h1 className="text-[50px] text-[#6B41FE] font-pop font-[700] relative after:content-[''] after:absolute after:transition-all after:duration-300 after:ease-in-out after:w-0 after:bg-[#6B41FE] after:h-[3px] after:left-0 after:hover:w-full after:bottom-0 max-sm:text-[30px] max-sm:mt-5">
          Skills
        </h1>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 mt-10">
        <Card
          Icon={IoLogoHtml5}
          bgColor="bg-[#FAEBFF]"
          desc="An HTML5 expert with a deep understanding of semantic elements, multimedia integration, and advanced APIs. Skilled in creating responsive, accessible, and high-performance web applications following best practices."
          padd="mt-[0px]"
          title="HTML5"
          iconColor="text-[#DD4B25]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />
        <Card
          Icon={FaCss3Alt}
          bgColor="bg-[#FAEBFF]"
          desc="I'm a CSS expert with a mastery of layout techniques, responsive design, and modern frameworks. I excel in creating visually appealing, maintainable, and efficient styles, ensuring consistent user experiences across all devices."
          padd="mt-[0px]"
          title="CSS"
          iconColor="text-[#254BDD]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />
        <Card
          Icon={FaSquareJs}
          bgColor="bg-[#FAEBFF]"
          desc="I'm a JavaScript developer with 1 year of experience, having worked on multiple real-world projects. I specialize in writing clean, efficient code, building dynamic web applications, and leveraging modern JavaScript frameworks."
          padd="mt-[0px]"
          title="JavaScript"
          iconColor="text-[#EFD81D]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />
        <Card
          Icon={FaReact}
          bgColor="bg-[#FAEBFF]"
          desc="I'm a React.js developer with a strong background in building responsive web apps. My experience allows me to create scalable, user-friendly interfaces using React’s component-based architecture, making code more reusable and efficient."
          padd="mt-[0px]"
          title="React JS"
          iconColor="text-[#5ED3F3]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={FaNodeJs}
          bgColor="bg-[#FAEBFF]"
          desc="I'm a Node.js developer with a strong background in building scalable server-side applications. I excel at using Node.js's non-blocking, event-driven architecture, ensuring efficient, high-performance backend systems."
          padd="mt-[0px]"
          title="Node JS"
          iconColor="text-[#72A961]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={SiExpress}
          bgColor="bg-[#FAEBFF]"
          desc="I'm an Express.js developer skilled in building fast, scalable web applications. I use Express's flexible routing and middleware to create robust server-side logic, delivering efficient, reliable, and maintainable backend solutions."
          padd="mt-[0px]"
          title="Express JS"
          iconColor="text-[#000]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={SiNextdotjs}
          bgColor="bg-[#FAEBFF]"
          desc="Next.js developer skilled in building high-performance web apps. I use server-side rendering, static generation, and API routes to create fast, scalable, and SEO-friendly applications with seamless user experiences."
          padd="mt-[0px]"
          title="Next JS"
          iconColor="text-[#000]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={SiMongodb}
          bgColor="bg-[#FAEBFF]"
          desc="Experienced in MongoDB, I design and manage scalable databases for high-performance applications. Skilled in crafting efficient schemas, handling large data sets, and leveraging MongoDB's flexibility for dynamic, data-driven solutions."
          padd="mt-[0px]"
          title="Mongo DB"
          iconColor="text-[#118D4D]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={GrMysql}
          bgColor="bg-[#FAEBFF]"
          desc="Experienced in MySQL, I design and manage robust relational databases. I specialize in creating efficient schemas, writing complex queries, and optimizing database performance to ensure reliable and scalable data management."
          padd="mt-[0px]"
          title="My SQL"
          iconColor="text-[#3D718F]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={FaJava}
          bgColor="bg-[#FAEBFF]"
          desc="Proficient in Java, I develop robust, scalable applications with a focus on object-oriented design and efficient code. My expertise includes building enterprise solutions, integrating APIs, and leveraging Java’s extensive libraries and frameworks."
          padd="mt-[0px]"
          title="Java"
          iconColor="text-[#F0931C]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={SiSpringboot}
          bgColor="bg-[#FAEBFF]"
          desc="Skilled in Spring Boot, I build and deploy scalable, production-ready applications. I leverage its convention-over-configuration approach to create robust, efficient backend services with seamless integration and microservices support."
          padd="mt-[0px]"
          title="Java SpringBoot"
          iconColor="text-[#69AD3C]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />

        <Card
          Icon={SiTypescript}
          bgColor="bg-[#FAEBFF]"
          desc="Proficient in TypeScript, I enhance JavaScript projects with strong typing, improving code reliability and maintainability. I use TypeScript’s features to build scalable, error-free applications with clear, predictable behavior."
          padd="mt-[0px]"
          title="TypeScript"
          iconColor="text-[#2F74C0]"
          iconSize="text-[40px]"
          textColor="text-[#727288]"
          titleColor="text-[#000]"
        />
      </div>
    </section>
  );
};

export default Skills;

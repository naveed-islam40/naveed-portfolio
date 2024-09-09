import React from "react";
import Card from "./Card";
import { CgScreen } from "react-icons/cg";

const Skills = () => {
  return (
    <section className="h-full w-full">
     <div className="flex justify-center">
     <h1 className="relative mt-10 font-[700] text-[50px] font-pop text-center after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[3px] after:bg-[#6B41FE] after:transition-all after:duration-300 after:ease-in-out after:hover:w-full after:hover:left-0 max-sm:text-[30px]">
        About Me
      </h1>
     </div>

      <div className="m-10">
        <h1 className="text-[50px] font-[700] font-pop max-sm:text-[30px]">
          My Superpower Is <br />
          Creating Interactive <br /> <p className="text-[#6B41FE]">Website</p>
        </h1>
        <p className="w-[500px] text-[18px] my-4 text-[#5A5A5A] max-sm:w-full">
          I love to do develop for every category of websites whether it be an
          online eCommerce store, an event page or even a product landing page.
        </p>
      </div>
      <div className="flex justify-center gap-2 flex-wrap max-sm:gap-6">
        <Card
          Icon={CgScreen}
          title="This is a title"
          desc="This  is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus"
          bgColor="bg-[#FBEDE9]"
          padd={"mt-[300px]"}
          textColor="text-[#727288]"
          titleColor={"text-[#000]"}
          iconSize="text-[40px]"
          iconColor="text-[#6C42FF]"
        />
        <Card
          Icon={CgScreen}
          title="This is a title"
          desc="This  is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus"
          bgColor="bg-[#FAEBFF]"
          padd={"mt-[200px]"}
          textColor="text-[#727288]"
          titleColor={"text-[#000]"}
          iconSize="text-[40px]"
          iconColor="text-[#6C42FF]"
        />
        <Card
          Icon={CgScreen}
          title="This is a title"
          desc="This  is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus"
          bgColor="bg-[#6C42FF]"
          padd={"mt-[100px]"}
          textColor="text-[#fff]"
          titleColor={"text-[#fff]"}
          iconSize="text-[40px]"
          iconColor="text-[#fff]"
        />
        <Card
          Icon={CgScreen}
          title="This is a title"
          desc="This  is a desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt autem nam fugit distinctio aliquam maxime est dolorem beatae. Excepturi vel modi tenetur ratione eligendi sint repellendus saepe laudantium minus"
          bgColor="bg-[#FFFFFF]"
          padd={"300"}
          textColor="text-[#727288]"
          titleColor={"text-[#000]"}
          iconSize="text-[40px]"
          iconColor="text-[#6C42FF]"
        />
      </div>
    </section>
  );
};

export default Skills;

'use client'
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// text-[#cfe091ba]
//text-[#a99561]
const Projects = () => {
  const router = useRouter()
  const projects = [
    {
      title: "Dibolky tool",
      description:(
        <>
          Dibolky tool is a <span className="underline text-blue-400">SaaS platform</span> for SMMAs and creators to  <span className=" ">manage content, leads, and scheduling with ease and automation</span>.
        </>
      ),
      icon: "/dibolky.png",
      link: "https://github.com/JasirBasheer/Dibolky",
      isOpenSource: false,
      isWorkingInProgress: true,
      isClientProject: false,
    },
    {
      title: "Inker",
      description:
        "Built backend systems with secure APIs for user and blog management. Led contributor workflows and collaborated across teams on key technical decisions.",
      icon: "/inker.jpg",
      link: "https://github.com/TheByteFlow/Inker",
      isOpenSource: true,
      isWorkingInProgress: false,
      isClientProject: false,
    },
    {
      title: "Reachoutmore",
      description:
        "A platform that helps agencies and creators run campaigns effortlessly through automation.",
      icon: "/reachoutmore1.png",
      link: "https://github.com/JasirBasheer/reachoutmore",
      isOpenSource: false,
      isWorkingInProgress: true,
      isClientProject: false,
    },
    {
      title: "Thefamroot",
      description:(<>A platform that helps to create and explore family trees, <span className="">mapping relationships between members with ease.</span></>),
      icon: "/thefamroot2.png",
      link: "https://github.com/JasirBasheer/thefamroot",
      isOpenSource: false,
      isWorkingInProgress: true,
      isClientProject: false,
    },
    {
      title: "Akmal Groups",
      description:
        (<>A modern landing page built with TailwindCSS and GSAP. Clean design, smooth animations. Made to grab attention and convert clients fast.</>),
      icon: "/akmal.jpg",
      link: "https://github.com/Dibolky-Tech/akmal-groups",
      isOpenSource: false,
      isWorkingInProgress: false,
      isClientProject: true,
    },
    {
      title: "Spy.steps",
      description:
        "An online marketplace for custom rings and necklaces, constructed with HB and Node.js, leverages MongoDB for seamless database management.",
      icon: "/spysteps.png",
      link: "https://github.com/JasirBasheer/Spy.steps",
      isOpenSource: false,
      isWorkingInProgress: false,
      isClientProject: false,
    },
     {
      title: "Netflix clone",
      description:
        "The platform is built with React.js, IMDb API, and Firebase database for efficient data handling and a user-friendly interface.",
      icon: "/netflix.png",
      link: "/",
      isOpenSource: false,
      isWorkingInProgress: false,
      isClientProject: false,
    },
    {
      title: "Online compiler",
      description:
        "An online coding environment, developed with React.js, offers users a platform to code and collaborate seamlessly.",
      icon: "/thecoder.png",
      link: "/link",
      isOpenSource: false,
      isWorkingInProgress: false,
      isClientProject: false,
    },
  ];

  return (
    <div className="w-full text-gray-300 mt-12">
      <h2 className="text-2xl dark:text-white text-black font-poppins font-semibold mb-4">
        Latest projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative  rounded-lg px-6 py-3 shadow-lg flex flex-col justify-between border-[1px] border-[#1e293b] bg-[#1b2537] bg-opacity-80 backdrop-blur-sm mb-1 font-poppins font-normal transition-transform duration-300 ${
              (index + 1) % 2 === 0
                ? "lg:rotate-0 hover:rotate-0"
                : "lg:-rotate-0 hover:rotate-0"
            } cursor-pointer`}
          >
            <div>
              <div className="flex items-center justify-between">
                <Image
                  src={project.icon}
                  alt="icon"
                  className="w-10 h-10 my-2 rounded-full"
                  width={500}
                  height={500}
                />
                <div className="flex gap-2">
                  {project.isOpenSource && (
                    <div className="text-[10px] bg-[#38942691] px-2 py-1 text-white rounded-full">
                      Open-source
                    </div>
                  )}
                  {project.isWorkingInProgress && (
                    <div className="text-[10px] bg-[#264b9491] px-2 py-1 text-white rounded-full">
                      WIP
                    </div>
                  )}
                  {project.isClientProject && (
                    <div className="text-[10px] bg-[#948d2691] px-2 py-1 text-white rounded-full">
                      Client
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-medium mb-1">{project.title}</h3>
              <p className="text-[12px] font-medium text-gray-400">
                {project.description}
              </p>
            </div>
            
            <ChevronRight onClick={()=>router.push(project.link)} className="self-end w-4 mt-1 text-blue-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

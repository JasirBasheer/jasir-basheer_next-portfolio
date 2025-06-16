import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const LatestProjects = () => {
  const projects = [
    {
      title: 'Supermemory',
      description:
        "AI second brain for your team. Supermemory is a tool that helps you capture, organize, and retrieve information from your team's conversations and documents.",
      icon: '🧠',
    },
    {
      title: 'Supermemory DB',
      description:
        'Vector database I made for Supermemory. Fully serverless and infinitely scalable by using Cloudflare R2 and Durable objects.',
      icon: '🗄️',
    },
    {
      title: 'Markdowner',
      description:
        'Converts websites to LLM-ready markdown data. I built this to help me with Supermemory.',
      icon: '⚡',
    },
    {
      title: 'Discord Bot to Portfolio',
      description:
        'A discord bot that creates a website for yours as you talk to it.',
      icon: '🤖',
    },
    {
      title: 'Radish',
      description:
        'Super fast drop-in replacement of the in memory key-value store Redis, made in Golang',
      icon: '🥕',
    },
    {
      title: 'Lecture Chat',
      description:
        'A virtual TA that listens to the lecture and answers your doubts in real time.',
      icon: '💬',
    },
  ];

  return (
    <div className="w-full text-gray-300 mt-12">
      <h2 className="text-2xl text-white font-poppins font-semibold mb-4">Latest projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative  rounded-lg px-6 py-3 shadow-lg flex flex-col justify-between border-[1px] border-[#1e293b] bg-[#1b2537] bg-opacity-80 backdrop-blur-sm mb-1 font-poppins font-normal transition-transform duration-300 ${(index + 1) % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'} cursor-pointer`}
          >
            <div>
              <div className="text-3xl mb-1">{project.icon}</div>
              <h3 className="text-lg font-medium mb-1">{project.title}</h3>
              <p className="text-[12px] font-medium text-gray-400">{project.description}</p>
            </div>
            <ChevronRight className='self-end w-4 mt-1 text-blue-500'/>
          </div>
        ))}
      </div>
      <p className="mt-6 text-white text-sm">
        See list of all my projects{' '}
        <Link href="/projects" className="underline text-blue-500">
          On my projects page
        </Link>
      </p>
    </div>
  );
};

export default LatestProjects;
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Achievements = () => {
  const achievements = [
    {
      title: 'Winner #2 Hackero , fetlla',
      image: '/fetla.png',
      link:'https://x.com/fetlla_llp'
    },
    {
      title: 'ThinkerSpace Member',
      image: '/thinkerspace.jpg',
      link:'https://x.com/TinkerSpaceHQ'
    },
    
    {
      title: 'Core Memeber @ Brogrammers',
      image: '/brogrammerscore.jpg',
      link:'https://www.linkedin.com/in/brogrammers-community/'
    },
    {
      title: 'Fetlla Certified Hacker',
      image: '/fetla2.png',
      link:'https://x.com/fetlla_llp'
    },
  ];

  return (
    <div className="w-full  mt-8 relative overflow-hidden">
      <h2 className="text-2xl font-poppins dark:text-white text-black font-semibold mb-4">Achievements</h2>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`relative bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer  transition-transform duration-300 ${(index + 1) % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}
          >
            <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", 
        }}
      ></div>
            <Image
              src={achievement.image}
              alt={achievement.title}
              width={750}
              height={422}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-16 left-0 text-white font-poppins   right-0 p-4 z-20">
              <h3 className="text-md font-semibold">{achievement.title}</h3>
            </div>
            <Link href={achievement.link || ''} className="absolute bottom-4 right-4 cursor-pointer bg-white rounded-full p-2 z-20">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
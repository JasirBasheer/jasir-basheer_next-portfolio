"use client"
import React from 'react';
import Image from 'next/image';

const Achievements = () => {
  const achievements = [
    {
      title: 'Buildspace s5 Grant',
      image: 'https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Fcloudflare-patent.png&w=750&q=75',
    },
    {
      title: 'Patent (pending) @Cloudflare',
      image: 'https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Fcloudflare-patent.png&w=750&q=75',
    },
    {
      title: 'Mentor @Calhacks',
      image: 'https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Fcloudflare-patent.png&w=750&q=75',
    },
    {
      title: 'Neo Scholar finalist',
      image: 'https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Fcloudflare-patent.png&w=750&q=75',
    },
    {
      title: 'Winner #2, Calhacks',
      image: 'https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Fcloudflare-patent.png&w=750&q=75',
    },
    {
      title: 'Winner #2, Sunhacks',
      image: 'https://dhravya.dev/_next/image?url=https%3A%2F%2Fi.dhr.wtf%2Fr%2Fcloudflare-patent.png&w=750&q=75',
    },
  ];

  return (
    <div className="w-full  mt-8 relative overflow-hidden">
      <h2 className="text-2xl font-poppins text-white font-semibold mb-4">Achievements</h2>
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
            <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 z-20">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
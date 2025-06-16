"use client";
import { calculateReadingTime, formatDate } from "@/utils/blog.utils";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


interface Props {
    categories: string[];
    articles: any[];
}

const LatestArticlesClient: React.FC<Props> = ({ categories, articles: initialArticles }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Latest");
    const [articles, setArticles] = useState<any[]>(initialArticles);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);

        if (category === "Latest") {
            setArticles(initialArticles.slice(0, 5)); 
        } else {
            setArticles(initialArticles.filter((item) => item.category === category));
        }
    };

    return (
        <div className="w-full max-h-[41rem]  text-gray-300 mt-8 ">
            <h1 className="text-2xl font-bold text-white mb-6">Latest Articles</h1>

            <div className="flex gap-8 mb-2 border-b border-gray-800 pb-2 overflow-hidden overflow-x-auto">
                <button
                    key="Latest"
                    onClick={() => handleCategorySelect("Latest")}
                    className={`pb-2 px-1 ${
                        selectedCategory === "Latest"
                            ? "border-b-2 border-blue-500 text-white"
                            : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                    Latest
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`pb-2 px-1 ${
                            selectedCategory === category
                                ? "border-b-2 border-blue-500 text-white"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="space-y-8">
                {articles.map((article, index) => (
                    <Link key={index} href={`/blog/${article.category}/${article.slug}`}>
                    <div className="flex gap-6 group py-3 cursor-pointer border-b border-gray-800" >
                        <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                            {article.img === "backend" && (
                                <div className="relative">
                                    <div className="text-4xl">💀</div>
                                    <div className="absolute inset-0 bg-red-500/20 transform rotate-45"></div>
                                </div>
                            )}
                            {article.img === "roadmap" && <div className="text-4xl">🗺️</div>}
                            {article.img === "api" && <div className="text-4xl">🔌</div>}
                        </div>

                        <div className="flex-1">
                            <div className="flex gap-2 text-sm text-gray-500 mb-1 ">
                                <span>{formatDate(article.createdAt)}</span>
                                <span>•</span>
                                <span>{calculateReadingTime(article.desc)}</span>
                            </div>
                            <h2 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 group-hover:transition duration-300">
                                {article.title}
                            </h2>
                            <p className="text-gray-400 line-clamp-2">{article.desc}</p>
                        </div>

                        <div className="flex items-center text-gray-500 group-hover:text-blue-400 group-hover:transition duration-300">
                        <FaArrowRightLong />
                        </div>
                    </div>
                    </Link>
                ))}
                    
            </div>
        </div>
    );
};

export default LatestArticlesClient;

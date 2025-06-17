/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState, use } from 'react'

import { useRouter } from "next/navigation";
import SignGuestBook from '@/components/sign.guestBook';
import NewsLetter from '@/components/newsLetter';
import { IoIosArrowBack } from "react-icons/io";
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';

const Blog = ({ params }: { params:any }) => {
    const [blog, setBlog] = useState<any>({})
    const { slug }: { slug: string[] } = use(params);
    const [category, blogId] = slug
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    useEffect(() => {
        Prism.highlightAll();
    }, [blog.content]);

    useEffect(() => {
        getBlog()
    }, [slug])

    const wrapImages = (html: string) => {
        return html.replace(
            /<img([^>]*)>/g,
            `<div class="blog-image-wrapper"><img $1></div>`
        );
    };


    const getBlog = async () => {
        try {
            const res = await fetch(`${apiUrl}/api/blogs/${category}/${blogId}`)
            const blog = await res.json()
            if (!blog) return
            blog.content = wrapImages(blog.content);
            setBlog(blog)
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className="min-h-screen w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100">
        <div className="relative grid grid-cols-12 min-h-screen">
          <div className="sm:col-span-11 col-span-12 dark:bg-slate-900 sm:p-4">
            <SignGuestBook />
            <div className="grid grid-cols-12 gap-4 mt-2">
              <div className="md:col-span-8 col-span-12">
                {/* Back Button Section */}
                <div className="w-full flex items-center justify-between h-[11rem]">
                  <button
                    onClick={() => router.back()}
                    className="flex items-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 w-7 h-7 rounded-2xl justify-center transition-colors duration-200"
                  >
                    <IoIosArrowBack className="text-gray-700 dark:text-gray-200" />
                  </button>
                </div>
  
                {/* Blog Content */}
                <div>
                  {blog.title && (
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      {blog.title}
                    </h1>
                  )}
  
                  {blog.content && (
                    <div
                      className="prose dark:prose-invert max-w-none blog-content"
                      dangerouslySetInnerHTML={{
                        __html: blog.content.replace(
                          /<pre/g,
                          '<pre class="whitespace-pre-wrap bg-gray-50 dark:bg-slate-800 p-4 rounded-lg my-4 overflow-x-auto border border-gray-200 dark:border-gray-700"'
                        )
                      }}
                    />
                  )}
                </div>
              </div>
  
              {/* Sidebar */}
              <div className="md:col-span-4 col-span-12 md:flex justify-center px-5 md:mt-[28rem] mt-3">
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
}

export default Blog
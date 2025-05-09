import LatestArticles from "@/components/Home/latest.articles.server";
import { Hero } from "../../components/Home/hero";
import SocialMedias from "../../components/Home/social.medias";
import NewsLetter from "../../components/newsLetter";
import SignGuestBook from "../../components/sign.guestBook";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-900">
      <div className="relative grid grid-cols-12 min-h-screen ">
        <div className="sm:col-span-11 col-span-12  dark:bg-slate-900 sm:p-4">
          <SignGuestBook />
          <div className="grid grid-cols-12 gap-4  mt-5">
            
            <div className="md:col-span-8 col-span-12">
            <div className="sm:px-8 px-5 ">
              <Hero />
            </div>
            <div className="md:col-span-8 col-span-12 sm:px-8 px-5">
                <div className="sm:col-span-7 col-span-12 sm:h-20 mt-5 flex items-center justify-start gap-6">
                  <SocialMedias />
                </div>
                <div className="mt-3">
                  <p className="font-normal max-w-2xl text-slate-600 dark:text-slate-400 textg">
                    I also create content to inspire and help others get started with coding, and share my experiences 
                    as a developer and entrepreneur. With more than 20,000 followers on instagram, I have a small but 
                    growing community of developers. Check it out here - dhravya.dev
                  </p>
                </div>
             
              <LatestArticles/>
            </div>
            </div>
            <div className="md:col-span-4 col-span-12  md:flex justify-center px-5 md:mt-[28rem] mt-3">
                <NewsLetter />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
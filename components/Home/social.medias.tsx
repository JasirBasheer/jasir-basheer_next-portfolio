import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import { LuMailOpen } from 'react-icons/lu'

const SocialMedias = () => {
  return (
    <>
      <div className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200">
        <FaGithub className="w-full h-full" />
      </div>
      <div className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200">
        <FaTwitter className="w-full h-full" />
      </div>
      <div className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200">
        <SiDiscord className="w-full h-full" />
      </div>
      <div className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200">
        <FaLinkedinIn className="w-full h-full" />
      </div>
      <div className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200">
        <LuMailOpen className="w-full h-full" />
      </div>
    </>
  )
}

export default SocialMedias
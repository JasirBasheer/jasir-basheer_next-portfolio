import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { LuMailOpen } from "react-icons/lu";
import Link from "next/link";

const SocialMedias = () => {
  return (
    <>
      <Link
        href={"https://github.com/JasirBasheer"}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <FaGithub className="w-full h-full" />
      </Link>
      <Link
        href={"https://x.com/jasirbasheerpp"}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <FaTwitter className="w-full h-full" />
      </Link>
      <Link
        href={""}
        className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <SiDiscord className="w-full h-full" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/jasirbasheerpp/"}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <FaLinkedinIn className="w-full h-full" />
      </Link>
      <Link
        href={"mailto:hi@jasirbasheer.dev"}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:w-[3rem] sm:h-[2rem]  w-[3rem] h-[2rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <LuMailOpen className="w-full h-full" />
      </Link>
    </>
  );
};

export default SocialMedias;

import { BriefcaseBusiness, Menu, Navigation } from "lucide-react";
import Link from "next/link";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { RiHome2Line, RiStackLine } from "react-icons/ri";

export function Navbar() {
  return (
    <nav className="fixed sm:relative bottom-0 sm:h-screen w-full sm:w-20 lg:w-52 sm:dark:bg-slate-900 bg-transparent backdrop-blur-md z-50  ">
      <div className="h-20 sm:h-full flex items-center sm:items-center justify-center border-t sm:border-t-0 sm:border-r border-slate-200 dark:border-slate-800">
        <div className="flex sm:flex-col justify-center items-center gap-8 sm:gap-8  sm:ml-28 sm:px-0">
          <Link href={`/`}>
          <div className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ">
            <RiHome2Line className="w-full h-full" />
          </div>
          </Link>
          <div className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ">
            <PiWarningCircleDuotone className="w-full h-full rotate-180" />
          </div>
          <div className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ">
            <RiStackLine className="w-full h-full" />
          </div>
          <div className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ">
            <BriefcaseBusiness className="w-full h-full" />
          </div>
          <div className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ">
            <Menu className="w-full h-full" />
          </div>
          <div className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors cursor-pointer ">
            <Navigation className="w-full h-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
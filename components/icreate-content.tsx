import Link from "next/link";
import React from "react";

const IcreateContent = () => {
  return (
    <div className="lg:w-[20rem] h-[6rem] rounded-lg p-5 bg-[#1b2537] bg-opacity-80 backdrop-blur-sm border-[1px] border-[#1e293b] font-poppins font-normal">
      <h1 className="text-white text-md text-center font-bold">I create content!</h1>
      <div className="flex items-center justify-center mt-2 group">
        <Link href="https://www.youtube.com/@itsjasirhere" className=" text-blue-400 group-hover:underline">
          Check out itsjasirhere
        </Link>
        <span className="text-blue-400 transition-transform duration-300 ml-2 group-hover:translate-x-2">→</span>
      </div>
    </div>
  );
};

export default IcreateContent;
import Link from "next/link";
import React from "react";

const Playlist = () => {
  return (
    <Link href={'https://open.spotify.com/playlist/5vEMk9RjzHKMHA4GTft6vd?si=FS8MWpMSQCC12lSUBhgNSQ'}>
    <div
      className="lg:w-[20rem] h-[11rem] border-[1px] border-[#1e293b] rounded-2xl p-5 bg-[#1b2537] bg-opacity-80 backdrop-blur-sm mb-2 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://i.scdn.co/image/ab67706c0000da84b80903ef954198f942abfe6d')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", 
        }}
      ></div>
      <div className="text-white z-30">
        <h3 className="text-lg font-bold mb-2">
          playlist: songs I was once hooked to
        </h3>
        <p className="text-sm">
          these songs are the ones that I was atleast once in my life obsessed
          with. obsessed as in, listen to it on repeat kinda obsessed
        </p>
      </div>
    </div>
    </Link>
  );
};

export default Playlist;
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import { MorphingText } from "./magicui/morphing-text";

const Hero = () => {
  const texts = [
    "Introducing Nirvana",
    "Nirvana",
    "Tech Fest",
    "By",
    "Tech Geeks",
  ];
  
  return (
    <div className="h-screen w-full relative bg-black">
      <div className="container mx-auto overflow-hidden mt-30 z-99 flex justify-center">
        <img src="/forwebsite.png" className="w-[90%] rounded-md" />
      </div>
      <MorphingText texts={texts} className={"z-90 text-white text-[160px]"}/>
      <BackgroundBeams className={"-z-0"} />
    </div>
  );
};

export default Hero;

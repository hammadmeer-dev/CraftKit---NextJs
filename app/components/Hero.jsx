"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Hero = () => {
    const router = useRouter();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-15 px-4 md:px-10 pb-20 gap-10 md:gap-16">
      {/* Left content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Craft Your <br /> Perfect Resume, <br /> Instantly.
        </h1>
        <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
          Build a professional, ATS-friendly resume with modern templates and
          live previews. Get hired faster.
        </p>
        <Button className="bg-primary text-white px-6 py-4 mt-8 rounded-md hover:bg-primary/90" onClick={()=>router.push("/Dashboard")}>
          Build Your Resume
        </Button>
      </div>

      {/* Right image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 ">
        <img
          src="/resume-preview.png"
          alt="Resume Builder Preview"
          className="w-full max-w-md h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;

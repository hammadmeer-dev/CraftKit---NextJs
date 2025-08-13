"use client";
import React from "react";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <footer className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-4 text-center md:text-left">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/craftkitlogo.png"
            alt="CraftKit Logo"
            width={250}
            className="mb-4 h-auto"
          />
          <p className="text-color4 font-medium">
            <span className="block">Craft professional resumes</span>
            <span className="block">effortlessly with modern</span>
            <span className="block">templates and live previews.</span>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg mt-5 text-black">
            <a onClick={()=>router.push("/AboutPage")} className="hover:text-primary transition-colors">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FiLinkedin />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FiGithub />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center md:justify-start gap-14">
          <ul className="space-y-2">
            <li className="font-semibold">Products</li>
            <li onClick={()=>router.push("/AboutPage")}>Features</li>
            <li onClick={()=>router.push("/AboutPage")}>Templates</li>
            <li onClick={()=>router.push("/AboutPage")}>Pricing</li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold">Company</li>
            <li onClick={()=>router.push("/AboutPage")}>About Us</li>
            <li onClick={()=>router.push("/AboutPage")}>Blogs</li>
            <li onClick={()=>router.push("/AboutPage")}>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li className="font-semibold">Support</li>
            <li onClick={()=>router.push("/AboutPage")}>Contact</li>
            <li onClick={()=>router.push("/AboutPage")}>FAQ</li>
            <li onClick={()=>router.push("/AboutPage")}>Help Center</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center md:items-end">
          <p className="font-bold text-lg">Ready to build your resume?</p>
          <Button className="bg-primary text-white hover:bg-primary/90 px-20 py-3 mt-5 rounded-lg shadow-md" onClick={()=>router.push("/Dashboard")}>
            Get Started
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

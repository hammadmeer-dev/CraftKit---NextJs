"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();
  return (
    <div className="flex flex-col">
      <header className="w-full flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/craftkitlogo.png" alt="Logo" className="h-6" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a className="hover:text-primary">
            Blog
          </a>
          <a onClick={()=>router.push("/AboutPage")} className="hover:text-primary">
            About
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="px-4 py-1">
            Login
          </Button>
          <Button className="bg-primary text-black px-4 py-1 hover:bg-primary/90">
            Sign Up
          </Button>
        </div>
      </header>
      </div>
  )
}

export default Navbar;
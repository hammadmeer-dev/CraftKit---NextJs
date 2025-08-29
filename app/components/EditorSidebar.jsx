"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  FileText,
  SquareMousePointer,
  Download,
  Settings,
  LogOut,
  ArrowRightFromLine,
  ArrowLeftFromLine,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function EditorSidebar({ saveStatus }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const currentView = pathname.startsWith("/Dashboard")
    ? "dashboard"
    : pathname.startsWith("/editor")
    ? "editor"
    : pathname.startsWith("/Templates")
    ? "templates"
    : "";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={` ${
        isOpen ? "w-64" : "w-16"
      } bg-white shadow-sm border-r flex flex-col transition-all duration-300`}
    >
      {/* Top Toggle Button (Mobile / Desktop) */}
      {isMobile ? (
        ""
      ) : (
        <div className="p-4 border-b items-center justify-between hidden md:flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isOpen ? (
              <span
              onClick={() => {
                router.push("/Dashboard");
              }}
              className={`flex items-center rounded-lg w-full text-left transition-colors `}
            >
              <ArrowLeftFromLine className="w-5 h-5" />
              {isOpen && <span className="ml-3">Close Sidebar</span>}
            </span>
            ) : (
              <ArrowRightFromLine className="w-5 h-5" />
            )}
          </button>
        </div>
      )}

      {/* Scrollable Nav */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => {
                router.push("/Dashboard");
              }}
              className={`flex items-center px-3 py-2 rounded-lg w-full text-left transition-colors ${
                currentView === "dashboard"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Home className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">Dashboard Home</span>}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                router.push("/ResumeEditor");
              }}
              className={`flex items-center px-3 py-2 rounded-lg w-full text-left transition-colors ${
                currentView === "editor"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <FileText className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">Resume Editor</span>}
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                router.push("/Templates");
              }}
              className={`flex items-center px-3 py-2 rounded-lg w-full text-left transition-colors ${
                currentView === "templates"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <SquareMousePointer className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">Select Template</span>}
            </button>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Download className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">PDF Export</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Settings className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">Settings</span>}
            </a>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        {currentView === "editor" && isOpen && (
          <p className="text-xs text-gray-500 mb-2">{saveStatus}</p>
        )}

      </div>
    </div>
  );
}

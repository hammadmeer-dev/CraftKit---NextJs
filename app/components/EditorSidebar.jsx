import React from "react";
import { Home, FileText, Download, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
export default function EditorSidebar({ currentView, setCurrentView, saveStatus }) {
  const router = useRouter();
  return (
    <div className="w-64 bg-white shadow-sm border-r flex flex-col">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() =>  router.push("/Dashboard")}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full text-left ${
                currentView === "dashboard"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Dashboard Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={() =>  router.push("/ResumeEditor")}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full text-left ${
                currentView === "editor"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Resume Editor</span>
            </button>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Download className="w-5 h-5" />
              <span>PDF Export</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t">
        {currentView === "editor" && <p className="text-xs text-gray-500 mb-2">{saveStatus}</p>}
        <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 w-full">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

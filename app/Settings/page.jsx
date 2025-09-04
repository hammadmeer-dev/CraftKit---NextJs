"use client";
import EditorSidebar from "../components/EditorSidebar";
import * as React from "react";
import * as Label from "@radix-ui/react-label";
import * as Separator from "@radix-ui/react-separator";
export default function Settings() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <EditorSidebar />
        <div className="px-4 py-8 w-dvw">
          <h1 className="text-2xl font-semibold mb-6 text-center">Settings</h1>
          <p className="text-gray-500 mb-8 text-center">
            Customize your CraftKit experience.
          </p>

          {/* Theme Preferences */}
          {/* <div className="bg-white w-full rounded-xl border shadow-sm p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Theme Preferences</h2>
            <p className="text-sm text-gray-500 mb-4">
              Adjust the visual theme of the application to your liking.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Label.Root htmlFor="dark-mode" className="font-medium">
                  Dark Mode
                </Label.Root>
              </div>

              <button
                id="dark-mode"
                role="switch"
                aria-checked={darkMode}
                onClick={() => setDarkMode((prev) => !prev)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div> */}

          {/* Separator */}
          <Separator.Root className="bg-gray-200 h-px w-full mb-6" />

          {/* Application Info */}
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">
              Application Information
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Details about the ResuCraft application.
            </p>

            <div className="flex items-center justify-between py-2">
              <Label.Root className="font-medium">App Version</Label.Root>
              <span className="text-gray-600 text-sm">1.0.0</span>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Restore Defaults
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

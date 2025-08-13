import { FC } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiTool, FiLayers, FiTarget } from "react-icons/fi";

const features = [
  {
    icon: <FiTool className="w-8 h-8 text-indigo-600" />,
    title: "All-in-One Toolkit",
    description: "Build resumes, portfolios, and more with one flexible platform.",
  },
  {
    icon: <FiLayers className="w-8 h-8 text-indigo-600" />,
    title: "Flexible & Customizable",
    description: "Choose templates, adjust layouts, and personalize every detail.",
  },
  {
    icon: <FiTarget className="w-8 h-8 text-indigo-600" />,
    title: "Future-Ready",
    description: "Easily expand with new career tools, AI integrations, and features.",
  },
];

const AboutPage = () => {
  return (
    <main className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About CraftKit</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          CraftKit is your all-in-one professional toolkit, designed to help you create resumes, portfolios, and other career tools with ease. Build, polish, and shine—everything from one workspace.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="mt-20 grid gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <Card key={idx} className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center text-center space-y-4">
              {feature.icon}
              <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              <CardDescription className="text-gray-600">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Illustration Section */}
      <section className="mt-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why CraftKit?</h2>
          <p className="text-gray-600 text-lg">
            CraftKit combines a simple, intuitive interface with powerful features to help professionals of all levels. Whether you're crafting your first resume or designing a portfolio, CraftKit makes it fast, flexible, and future-ready.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">
            Explore Features
          </Button>
        </div>
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/Resume-Live-Preview.png"
            alt="CraftKit Illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

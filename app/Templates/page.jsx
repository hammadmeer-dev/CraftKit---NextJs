"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTemplateStore } from "../Store/templateStore"; // adjust path

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import EditorSidebar from "../components/EditorSidebar";

const TemplateSelector = () => {
  const categories = ['All', 'Professional', 'Modern', 'Creative', 'Technical'];

 const allTemplates = [
    {
      id: 1,
      name: 'Minimalist Professional',
      description: 'A clean and professional layout, perfect for corporate and business environments.',
      category: 'Professional',
      selected: false
    },
    {
      id: 2,
      name: 'Modern Creative',
      description: 'Showcase your personality with a contemporary design featuring vibrant accents.',
      category: 'Creative',
      selected: false
    },
    {
      id: 3,
      name: 'Classic Elegant',
      description: 'Timeless design with refined typography and a balanced layout for traditional industries.',
      category: 'Professional',
      selected: false
    },
    {
      id: 4,
      name: 'Bold Impact',
      description: 'Make a strong statement with a template designed to highlight key achievements prominently.',
      category: 'Modern',
      selected: false
    },
    {
      id: 5,
      name: 'Functional Focused',
      description: 'Organize your experience by skill set, ideal for career changers or specialized roles.',
      category: 'Professional',
      selected: false
    },
    {
      id: 6,
      name: 'Academic & Research',
      description: 'Designed for scholars and researchers, with ample space for publications and projects.',
      category: 'Technical',
      selected: false
    },
    {
      id: 7,
      name: 'Entry-Level Friendly',
      description: 'Simple and intuitive, perfect for recent graduates or those with limited experience.',
      category: 'Professional',
      selected: false
    },
    {
      id: 8,
      name: 'Tech & Developer',
      description: 'A modern template for tech professionals, highlighting coding skills and technical projects.',
      category: 'Technical',
      selected: false
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [templates, setTemplates] = useState(allTemplates);
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 4;

  const router = useRouter();
  const setTemplate = useTemplateStore((state) => state.setTemplate);

  const filterTemplates = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
    if (category === 'All') {
      setTemplates(allTemplates);
    } else {
      setTemplates(allTemplates.filter(t => t.category === category));
    }
  };

  const goToEditor = (template) => {
    setTemplate(template);
    router.push("ResumeEditor");
  };

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = templates.slice(indexOfFirstTemplate, indexOfLastTemplate);
  const totalPages = Math.ceil(templates.length / templatesPerPage);

  return (
    <div className="flex">
      <EditorSidebar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Select a Resume Template</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our curated collection of professional, modern, and creative resume templates to perfectly match your style and industry.
          </p>
        </div>

        <div className="flex items-center mb-4">
          <span className="font-semibold mr-3 text-gray-700">Filter by:</span>
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => filterTemplates(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentTemplates.map(template => (
            <Card
              key={template.id}
              className="cursor-pointer transition-all hover:shadow-md hover:border-gray-300"
              onClick={() => goToEditor(template)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{template.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{template.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 my-8">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <Button
              key={number}
              variant={currentPage === number ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </Button>
          ))}

          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          Made with <span className="font-semibold">Love</span>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;

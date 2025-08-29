"use client";
import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import EditorSidebar from "../components/EditorSidebar";
import PreviewPanal from "../components/PreviewPanal";
import EditContentSection from "../components/EditContentSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTemplateStore } from "../Store/templateStore";
export default function ResumeEditor() {
  const previewRef = useRef();
  const { selectedTemplate: template, setTemplate } = useTemplateStore();
  const [resumeData, setResumeData] = useState({
    title: "Untitled Resume",
    templateId: { template },
    data: {
      personalInfo: {
        fullName: "",
        profession: "",
        location: "",
        phone: "",
        email: "",
        portfolioWebsite: "",
        profileImage: "", // 🆕 Added image field
      },
      summary: "",
      workExperience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: [],
    },
  });
  const handleExportPDF = async () => {
    const input = previewRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${resumeData.title || "resume"}.pdf`);
  };

  return (
    <div className="min-h-screen max-w-screen bg-gray-50 flex">
      {/* Sidebar */}
      <EditorSidebar />

      {/* Editor Content */}
      <div className="flex-1 flex flex-col">
        {/* Form Panel */}
        <div className="w-full border-b">
          <EditContentSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            onExportPDF={handleExportPDF}
          />
        </div>

        {/* Preview Panel */}
        <div className="w-full flex-1">
          <PreviewPanal ref={previewRef} resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

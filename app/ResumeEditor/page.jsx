"use client";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import EditorSidebar from "../components/EditorSidebar";
import PreviewPanal from "../components/PreviewPanal";
import EditContentSection from "../components/EditContentSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTemplateStore } from "../Store/templateStore";
import { useResumeStore } from "../Store/resumeStore";
import { generateId } from "@/utils/resumeStorage";

export default function ResumeEditor() {
  const previewRef = useRef();
  const { id } = useParams(); // missing!
  const { selectedTemplate: template, setTemplate } = useTemplateStore();
  const {resume,setResume} = useResumeStore();
  const resumeData = {
    id:generateId(),
    title: "Untitled Resume",
    templateId: { template },
    data: {
      personalInfo: {
        fullName: "",
        profession: "",
        location: "",
        citizenship: "",
        dateOfBirth: "",
        maritalStatus: "",
        phone: "",
        email: "",
        portfolioWebsite: "",
        profileImage: "",
      },
      summary: "",
      hobby: "",
      languages: [],
      workExperience: [],
      education: [],
      skills: [],
      projects: [],
      certifications: [],
      achievements: [],
    },
  };

  useEffect(()=>{
    console.log(useResumeStore.getState())
  },[]);
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
  useEffect(() => {
      if (!id) {
        setResume(resumeData);
      }
    }, []);

  return (
    <div className="min-h-screen max-w-screen bg-gray-50 flex">
      {/* Sidebar */}
      <EditorSidebar />

      {/* Editor Content */}
      <div className="flex-1 flex flex-col">
        {/* Form Panel */}
        <div className="w-full border-b">
          <EditContentSection
            onExportPDF={handleExportPDF}
          />
        </div>

        {/* Preview Panel */}
        <div className="w-full flex-1">
          <PreviewPanal ref={previewRef} resumeData={resume} />
        </div>
      </div>
    </div>
  );
}




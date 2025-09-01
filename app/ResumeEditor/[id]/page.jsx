"use client";
import { useEffect, useState,useRef } from "react";
import { useParams } from "next/navigation";
import EditorSidebar from "../../components/EditorSidebar";
import PreviewPanal from "../../components/PreviewPanal";
import EditContentSection from "../../components/EditContentSection";
import { loadResumeById } from "@/utils/resumeStorage";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useResumeStore } from "@/app/Store/resumeStore";
export default function ResumeEditorPage() {
  const { id } = useParams();
  const previewRef = useRef();
  const {setResume, resume} = useResumeStore()
  const handleExportPDF = async () => {
    const input = previewRef.current;
    const canvas = await html2canvas(input, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${resume.title || "resume"}.pdf`);
  };
  useEffect(() => {
    if (id) {
      loadResumeById(id).then((resume) => {console.log(resume); setResume(resume);});
      
    }
  }, [id]);

  if (!resume) return <p className="p-6">Loading resume...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <EditorSidebar />

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

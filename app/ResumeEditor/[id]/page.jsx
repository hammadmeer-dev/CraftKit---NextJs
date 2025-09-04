"use client";
import { useEffect, useState, useRef } from "react";
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
  const { setResume, resume } = useResumeStore();
  const handleExportPDF = async () => {
    if (!previewRef.current) return;

    // Grab actual HTML from preview
    const html = previewRef.current.outerHTML;

    // Send to backend
    const response = await fetch("/api/export-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html }),
    });

    if (!response.ok) {
      alert("Failed to generate PDF");
      return;
    }

    // Convert response to Blob and download
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resume?.title || "resume"}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  };
  useEffect(() => {
    if (id) {
      loadResumeById(id).then((resume) => {
        console.log(resume);
        setResume(resume);
      });
    }
  }, [id]);

  if (!resume) return <p className="p-6">Loading resume...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <EditorSidebar />

      <div className="flex-1 flex flex-col">
        {/* Form Panel */}
        <div className="w-full border-b">
          <EditContentSection onExportPDF={handleExportPDF} />
        </div>

        {/* Preview Panel */}
        <div className="w-full flex-1">
          <PreviewPanal ref={previewRef} resumeData={resume} />
        </div>
      </div>
    </div>
  );
}

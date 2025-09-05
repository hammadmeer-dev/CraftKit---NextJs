"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import EditorSidebar from "../../components/EditorSidebar";
import PreviewPanal from "../../components/PreviewPanal";
import EditContentSection from "../../components/EditContentSection";
import { loadResumeById } from "@/utils/resumeStorage";
import { useResumeStore } from "@/app/Store/resumeStore";
import { Progress } from "@/components/ui/progress"; // shadcn/ui Progress

export default function ResumeEditorPage() {
  const { id } = useParams();
  const previewRef = useRef();
  const { setResume, resume } = useResumeStore();
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleExportPDF = async () => {
    if (!previewRef.current) return;

    try {
      setIsExporting(true);
      setProgress(20);

      // Grab actual HTML from preview
      const html = previewRef.current.outerHTML;
      setProgress(40);

      // Send to backend
      const response = await fetch("/api/export-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html }),
      });
      setProgress(70);

      if (!response.ok) {
        alert("Failed to generate PDF");
        setIsExporting(false);
        setProgress(0);
        return;
      }

      // Convert response to Blob and download
      const blob = await response.blob();
      setProgress(90);

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${resume?.title || "resume"}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);

      setProgress(100);
      setTimeout(() => {
        setIsExporting(false);
        setProgress(0);
      }, 1200);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
      setIsExporting(false);
      setProgress(0);
    }
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
        <div className="w-full border-b p-4">
          <EditContentSection
            onExportPDF={handleExportPDF}
            isExporting={isExporting} // pass state down
          />

          {isExporting && (
            <div className="mt-2 min-w-full">
              <Progress value={progress} className="w-64 h-2 mx-auto" />
              <p className="text-sm text-gray-500 mt-1 text-center">Generating PDF...</p>
            </div>
          )}
        </div>

        {/* Preview Panel */}
        <div className="w-full flex-1">
          <PreviewPanal ref={previewRef} resumeData={resume} />
        </div>
      </div>
    </div>
  );
}

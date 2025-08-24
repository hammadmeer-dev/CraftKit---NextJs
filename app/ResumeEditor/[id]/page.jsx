"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EditorSidebar from "../../components/EditorSidebar";
import PreviewPanal from "../../components/PreviewPanal";
import EditContentSection from "../../components/EditContentSection";
import { loadResumeById } from "@/utils/resumeStorage";

export default function ResumeEditorPage() {
  const { id } = useParams();
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    if (id) {
      loadResumeById(id).then((data) => {setResumeData(data);console.log(data);});
      
    }
  }, [id]);

  if (!resumeData) return <p className="p-6">Loading resume...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <EditorSidebar />

      <div className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r">
          <EditContentSection resumeData={resumeData} setResumeData={setResumeData} />
        </div>

        <div className="w-full md:w-1/2">
          <PreviewPanal resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

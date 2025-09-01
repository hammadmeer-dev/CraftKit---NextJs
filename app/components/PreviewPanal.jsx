import React, { forwardRef } from "react";
import { useTemplateStore } from "../Store/templateStore";
import { templates } from "../Templates/TemplateRegistry";

const PreviewPanal = forwardRef(({ resumeData }, ref) => {
  const templateId = useTemplateStore((state) => state.selectedTemplate);
  const template = templates.find((t) => t.id === templateId) || templates[0];
  const TemplateComponent = template.component;

  // Default background (child can override with style or prop)
  const backgroundColor = resumeData?.data?.personalInfo?.bgColor || "bg-white";

  return (
    <div className="flex justify-center p-4 bg-gray-100 overflow-auto">
      {/* A4 Container with responsive scaling */}
      <div
        ref={ref}
        className={`shadow-lg rounded-lg overflow-hidden transform origin-top ${backgroundColor}`}
        style={{
          width: "794px",   // A4 width @ 96dpi
          height: "1123px", // A4 height @ 96dpi
          fontSize: "12px",
          lineHeight: "1.4",
        }}
      >
        <TemplateComponent resumeData={resumeData} />
      </div>
    </div>
  );
});

export default PreviewPanal;

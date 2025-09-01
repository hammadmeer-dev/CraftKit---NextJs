"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useTemplateStore } from "../Store/templateStore";
import { useResumeStore } from "../Store/resumeStore";
import { templates } from "../Templates/TemplateRegistry";
import { PersonalInfoSection } from "../components/Form/PersonelInfoSection";
import { SummarySection } from "../components/Form/SummarySection";
import { SaveExportSection } from "../components/Form/SaveExportSection";
import { WorkExperienceSection } from "./Form/WorkExperianceSection";
import { EducationSection } from "./Form/EducationSection";
import SkillsSection from "./Form/SkillSection";
import { ProjectsSection } from "./Form/ProjectSection";
import { CertificationsSection } from "./Form/CertificationsSection";
import { AchievementsSection } from "./Form/AchievementsSection";
import { HobbySection } from "./Form/HobbySection";
import { saveResume } from "@/utils/resumeStorage";

const EditContentSection = ({ onExportPDF }) => {
  const { resume,setResume } =
    useResumeStore();
  const { selectedTemplate: template, setTemplate } = useTemplateStore();

  const [saveStatus, setSaveStatus] = useState("All changes saved");
  const [isExpanded, setIsExpanded] = useState(false);

  // 🔹 Sync template from resume store
  useEffect(() => {
    if (resume.data?.selectedTemplate) {
      setTemplate(resume.data.selectedTemplate);
    }
  }, [resume, setTemplate]);

  const updateDataField = (field, value) => {
  useResumeStore.setState((state) => ({
    resume: {
      ...state.resume,
      [field]: value,
      data: {
        ...state.resume.data,
      },
    },
  }));
  setSaveStatus("Unsaved changes");
};


  const handleSaveResume = async () => {
    try {
      setSaveStatus("Saving...");
      await saveResume(resume);
      setSaveStatus("All changes saved");
    } catch (error) {
      console.error("Error saving resume:", error);
      setSaveStatus("Error saving");
    }
  };

  return (
    <div className="bg-white border-r overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{resume.title}</h1>
          <Select
            value={template}
            onValueChange={(t) => {
              updateDataField("templateId", t);
              setTemplate(t);
              setSaveStatus("Unsaved changes");
            }}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder={template} />
            </SelectTrigger>
            <SelectContent>
              {templates.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Title */}
        <Card className="mb-4">
          <CardHeader
            className="cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Title</CardTitle>
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CardHeader>
          {isExpanded && (
            <CardContent className="space-y-4">
              <Label htmlFor="resumeTitle">Title</Label>
              <Input
                id="resumeTitle"
                value={resume.title || ""}
                onChange={(e) => setResume({ ...resume, title: e.target.value })}
                placeholder="Enter resume title"
              />
            </CardContent>
          )}
        </Card>

        {/* Sections */}
        <PersonalInfoSection />
        <SummarySection />
        <HobbySection />
        <WorkExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />

        <SaveExportSection
          onSave={handleSaveResume}
          saveStatus={saveStatus}
          onExportPDF={onExportPDF}
        />
      </div>
    </div>
  );
};

export default EditContentSection;

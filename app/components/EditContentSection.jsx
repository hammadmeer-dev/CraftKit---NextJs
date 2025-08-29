import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PersonalInfoSection } from "../components/Form/PersonelInfoSection";
import { SummarySection } from "../components/Form/SummarySection";
import { SaveExportSection } from "../components/Form/SaveExportSection";
import { loadResumes, generateId, saveResume } from "@/utils/resumeStorage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useTemplateStore } from "../Store/templateStore";
import { WorkExperienceSection } from "./Form/WorkExperianceSection";
import { ProjectsSection } from "./Form/ProjectSection";
import SkillsSection from "./Form/SkillSection";
import { CertificationsSection } from "./Form/CertificationsSection";
import { EducationSection } from "./Form/EducationSection";
import { templates } from "../Templates/TemplateRegistry";

const EditContentSection = ({ resumeData, setResumeData, onExportPDF }) => {
  const [currentResumeId, setCurrentResumeId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("All changes saved");
  const { selectedTemplate: template, setTemplate } = useTemplateStore();
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    summary: false,
    workExperience: false,
    education: false,
    skills: false,
    projects: false,
    certifications: false,
  });
  const handleSaveResume = async () => {
    try {
      setSaveStatus("Saving...");
      const resumeToSave = {
        id: currentResumeId || generateId(),
        ...resumeData,
      };
      await saveResume(resumeToSave);
      if (!currentResumeId) setCurrentResumeId(resumeToSave.id);
      setSaveStatus("All changes saved");
    } catch (error) {
      console.error("Error saving resume:", error);
      setSaveStatus("Error saving");
    }
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  const toggleTitleExpantion = (section) => {
    setIsExpanded(!isExpanded);
  };

  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        personalInfo: { ...prev.data.personalInfo, [field]: value },
      },
    }));
    setSaveStatus("Unsaved changes");
  };
  const updateTitle = (value) => {
    setResumeData((prev) => ({
      ...prev,
      title: value, // ✅ direct update at root
    }));
    setSaveStatus("Unsaved changes");
  };

  const updateResumeField = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      data: { ...prev.data, [field]: value },
    }));
    setSaveStatus("Unsaved changes");
  };

  return (
    <div className="bg-white border-r overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {resumeData.title}
          </h1>
          <Select
            value={template}
            onValueChange={(t) => {
              setResumeData((prev) => ({ ...prev, templateId: t }));
              setTemplate(t); // update global store
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
        <Card className="mb-4">
          <CardHeader className="cursor-pointer" onClick={toggleTitleExpantion}>
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
                value={resumeData.title || ""}
                onChange={(e) => updateTitle(e.target.value)}
                placeholder="Enter resume title"
              />
            </CardContent>
          )}
        </Card>

        {/* Sections */}
        <PersonalInfoSection
          personalInfo={resumeData.data.personalInfo}
          updatePersonalInfo={updatePersonalInfo}
          isExpanded={expandedSections.personalInfo}
          toggleSection={() => toggleSection("personalInfo")}
        />

        <SummarySection
          summary={resumeData.data.summary}
          updateSummary={(value) => updateResumeField("summary", value)}
          isExpanded={expandedSections.summary}
          toggleSection={() => toggleSection("summary")}
        />
        <WorkExperienceSection initialItems={resumeData.data.workExperience} />
        <EducationSection initialItems={resumeData.data.education} />
        <SkillsSection initialItems={resumeData.data.skills} />
        <ProjectsSection initialItems={resumeData.data.projects} />
        <CertificationsSection initialItems={resumeData.data.certifications} />

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

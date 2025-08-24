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
import { ListSection } from "../components/Form/ListSection";
import { SaveExportSection } from "../components/Form/SaveExportSection";
import { loadResumes, generateId, saveResume } from "@/utils/resumeStorage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useTemplateStore } from "../Store/templateStore";
const EditContentSection = ({ resumeData, setResumeData }) => {
  const [currentResumeId, setCurrentResumeId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("All changes saved");
  const template = useTemplateStore((state) => state.selectedTemplate);
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    summary: false,
    workExperience: false,
    education: false,
    skills: false,
    projects: false,
    certifications: false,
  });

  useEffect(() => {
    loadResumesFromDB();
  }, []);

  const loadResumesFromDB = async () => {
    try {
      const savedResumes = await loadResumes();
      // Handle loaded resumes if needed
    } catch (error) {
      console.error("Error loading resumes:", error);
    }
  };

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

  const addEntry = (section) => {
    const newEntry = { id: generateId(), ...defaultFields(section) };
    setResumeData((prev) => ({
      ...prev,
      data: { ...prev.data, [section]: [...prev.data[section], newEntry] },
    }));
    setSaveStatus("Unsaved changes");
  };
const updateEntryField = (section, id, field, value) => {
  setResumeData((prev) => ({
    ...prev,
    data: {
      ...prev.data,
      [section]: prev.data[section].map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    },
  }));
  setSaveStatus("Unsaved changes");
};


  const deleteEntry = (section, id) => {
    setResumeData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [section]: prev.data[section].filter((item) => item.id !== id),
      },
    }));
    setSaveStatus("Unsaved changes");
  };

  const defaultFields = (section) => {
    switch (section) {
      case "workExperience":
        return {
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        };
      case "education":
        return {
          degree: "",
          school: "",
          startDate: "",
          endDate: "",
          description: "",
        };
      case "skills":
        return { name: "" };
      case "projects":
        return { name: "", description: "", link: "" };
      case "certifications":
        return { name: "", issuer: "", date: "" };
      default:
        return {};
    }
  };

  const handleSubmitEntry = (section, id) => {
    const entry = resumeData.data[section].find((item) => item.id === id);

    // Validation
     if (section === "education") {
      if (!entry.degree?.trim() || !entry.school?.trim()) {
        alert("Please fill in both degree and school fields");
        return;
      }
    }

    // Mark as submitted
    setResumeData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [section]: prev.data[section].map((item) =>
          item.id === id ? { ...item, submitted: true } : item
        ),
      },
    }));

    setSaveStatus("Unsaved changes");
    console.log(`${section.slice(0, -1)} entry submitted successfully`);
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
            value={resumeData.templateId}
            onValueChange={(value) =>
              setResumeData((prev) => ({ ...prev, templateId: value }))
            }
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern-minimalist">
                {template?.name || "Modern Minimalist"}
              </SelectItem>

              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Card className="mb-4">
          <CardHeader className="cursor-pointer" onClick={toggleTitleExpantion}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Title</CardTitle>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
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

        {[
          "workExperience",
          "education",
          "skills",
          "projects",
          "certifications",
        ].map((section) => (
          <ListSection
            key={section}
            title={section}
            items={resumeData.data[section]}
            defaultItem={defaultFields(section)}
            onAdd={() => addEntry(section)}
            onUpdate={(id, field, value) =>
              updateEntryField(section, id, field, value)
            }
            onDelete={(id) => deleteEntry(section, id)}
            onSubmit={(id) => {
              handleSubmitEntry(section, id);
            }}
            isExpanded={expandedSections[section]}
            toggleSection={() => toggleSection(section)}
          />
        ))}

        <SaveExportSection onSave={handleSaveResume} saveStatus={saveStatus} />
      </div>
    </div>
  );
};

export default EditContentSection;

"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";
import { generateId } from "@/utils/resumeStorage"; // 🔹 same helper as WorkSection

export const EducationSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 🔹 load data from store
  const education = useResumeStore(
    (s) => s.resume.data.education || []
  );

  // 🔹 updater for education array
  const updateEducation = (newItems) => {
    useResumeStore.setState((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          education: newItems,
        },
      },
    }));
  };

  // 🔹 add new entry
  const addEntry = () => {
    updateEducation([
      ...education,
      {
        id: generateId(),
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
        description: "",
        submitted: false,
      },
    ]);
  };

  // 🔹 update field
  const updateEntry = (id, field, value) => {
    updateEducation(
      education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // 🔹 delete entry
  const deleteEntry = (id) => {
    updateEducation(education.filter((item) => item.id !== id));
  };

  // 🔹 mark as submitted
  const submitEntry = (id) => {
    updateEducation(
      education.map((item) =>
        item.id === id ? { ...item, submitted: true } : item
      )
    );
  };

  return (
    <Card className="mb-4">
      <CardHeader
        onClick={() => setIsExpanded((prev) => !prev)}
        className="cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Education</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          {education.map((item) => (
            <div
              key={item.id}
               className={`p-4 border rounded-lg relative space-y-2 transition-colors ${
                item.submitted ? "bg-green-50 border-green-200" : "bg-white"
              }`}
            >
              <Input
                placeholder="Degree"
                value={item.degree}
                onChange={(e) => updateEntry(item.id, "degree", e.target.value)}
              />
              <Input
                placeholder="School"
                value={item.school}
                onChange={(e) => updateEntry(item.id, "school", e.target.value)}
              />
              <Input
                type="date"
                value={item.startDate}
                onChange={(e) =>
                  updateEntry(item.id, "startDate", e.target.value)
                }
              />
              <Input
                type="date"
                value={item.endDate}
                onChange={(e) =>
                  updateEntry(item.id, "endDate", e.target.value)
                }
              />
              <Input
                placeholder="Description"
                value={item.description}
                onChange={(e) =>
                  updateEntry(item.id, "description", e.target.value)
                }
              />

              <div className="flex gap-2">
                <Button size="sm" onClick={() => submitEntry(item.id)}>
                  Submit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteEntry(item.id)}
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            onClick={addEntry}
            className="w-full flex items-center justify-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Add Education
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

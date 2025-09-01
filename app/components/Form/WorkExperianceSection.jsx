"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2 } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";
import { generateId } from "@/utils/resumeStorage";

export const WorkExperienceSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 🔹 get workExperience from store
  const workExperience = useResumeStore((s) => s.resume.data.workExperience || []);

  // 🔹 updater
  const updateWorkExperience = (newItems) => {
    useResumeStore.setState((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          workExperience: newItems,
        },
      },
    }));
  };

  const addEntry = () => {
    updateWorkExperience([
      ...workExperience,
      { id: generateId(), role: "", company: "", startDate: "", endDate: "", description: "", submitted: false },
    ]);
  };

  const updateEntry = (id, field, value) => {
    updateWorkExperience(
      workExperience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const deleteEntry = (id) => {
    updateWorkExperience(workExperience.filter((item) => item.id !== id));
  };

  const submitEntry = (id) => {
    updateWorkExperience(
      workExperience.map((item) =>
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
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Work Experience</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          {workExperience.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg relative space-y-2 transition-colors ${
                item.submitted ? "bg-green-50 border-green-200" : "bg-white"
              }`}
            >
              <Input
                placeholder="Role"
                value={item.role}
                onChange={(e) => updateEntry(item.id, "role", e.target.value)}
              />
              <Input
                placeholder="Company"
                value={item.company}
                onChange={(e) => updateEntry(item.id, "company", e.target.value)}
              />
              <Input
                type="date"
                value={item.startDate}
                onChange={(e) => updateEntry(item.id, "startDate", e.target.value)}
              />
              <Input
                type="date"
                value={item.endDate}
                onChange={(e) => updateEntry(item.id, "endDate", e.target.value)}
              />
              <Input
                placeholder="Description"
                value={item.description}
                onChange={(e) => updateEntry(item.id, "description", e.target.value)}
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

          <Button variant="outline" onClick={addEntry} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Add Experience
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

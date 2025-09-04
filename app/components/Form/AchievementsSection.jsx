"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";
import { generateId, loadResumes, saveResume } from "@/utils/resumeStorage";
import { useResumeStore } from "@/app/Store/resumeStore";

export const AchievementsSection = () => {
    const achivements = useResumeStore((s) => s.resume.data.achievements || []);
  const [items, setItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("All changes saved");

  const toggleSection = () => setIsExpanded(!isExpanded);

  const addEntry = () => {
    setItems([
      ...items,
      {
        id: generateId(),
        title: "",
        description: "",
        year: "",
        submitted: false,
      },
    ]);
    setSaveStatus("Unsaved changes");
  };

  const updateEntry = (id, field, value) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
    setSaveStatus("Unsaved changes");
  };

  const deleteEntry = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSaveStatus("Unsaved changes");
  };

const submitEntry = (id) => {
  useResumeStore.setState((state) => ({
    resume: {
      ...state.resume,
      data: {
        ...state.resume.data,
        achievements: state.resume.data.achievements.map((item) =>
          item.id === id ? { ...item, submitted: true } : item
        ),
      },
    },
  }));
  setSaveStatus("Saved changes");
};


  return (
    <Card className="mb-4">
      <CardHeader onClick={toggleSection} className="cursor-pointer">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Achievements</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg space-y-2 transition-colors ${
                item.submitted
                  ? "bg-green-50 border-green-200"
                  : "bg-white"
              }`}
            >
              <Input
                placeholder="Achievement Title"
                value={item.title ?? ""}
                onChange={(e) => updateEntry(item.id, "title", e.target.value)}
                disabled={item.submitted}
              />
              <Input
                placeholder="Description"
                value={item.description ?? ""}
                onChange={(e) =>
                  updateEntry(item.id, "description", e.target.value)
                }
                disabled={item.submitted}
              />
              <Input
                placeholder="Year / Date"
                value={item.year ?? ""}
                onChange={(e) => updateEntry(item.id, "year", e.target.value)}
                disabled={item.submitted}
              />

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => submitEntry(item.id)}
                  disabled={item.submitted}
                >
                  {item.submitted ? (
                    <>
                      <Check className="w-4 h-4 mr-2" /> Added
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteEntry(item.id)}
                >
                  <Trash2 className="w-4 h-4 mr-2" /> Delete
                </Button>
              </div>
            </div>
          ))}

          <Button onClick={addEntry} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Add Achievement
          </Button>

          <p className="text-sm text-gray-500 mt-2">{saveStatus}</p>
        </CardContent>
      )}
    </Card>
  );
};

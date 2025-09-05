"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";
import { generateId } from "@/utils/resumeStorage";

const LanguageSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 🔹 Get languages from Zustand
  const languages = useResumeStore((s) => s.resume.data.languages || []);

  // 🔹 Update languages list in Zustand
  const updateLanguages = (newItems) => {
    useResumeStore.setState((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          languages: newItems,
        },
      },
    }));
  };

  // 🔹 Convert rating (0–10) into Level
  const getLevel = (rating) => {
    if (rating === "") return "";
    if (rating <= 3) return "Beginner";
    if (rating <= 6) return "Intermediate";
    if (rating <= 8) return "Advanced";
    return "Expert";
  };

  // 🔹 CRUD
  const addEntry = () => {
    updateLanguages([
      ...languages,
      { id: generateId(), name: "", rating: "", level: "", submitted: false },
    ]);
  };

  const updateEntry = (id, field, value) => {
    updateLanguages(
      languages.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
              ...(field === "rating" && { level: getLevel(value) }),
            }
          : item
      )
    );
  };

  const deleteEntry = (id) => {
    updateLanguages(languages.filter((item) => item.id !== id));
  };

  const submitEntry = (id) => {
    updateLanguages(
      languages.map((item) =>
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
          <CardTitle className="text-lg">Languages</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <div className="space-y-4">
            {languages.map((item) => (
              <div
                key={item.id}
                className={`flex gap-2 items-center p-2 rounded-lg border transition-colors ${
                  item.submitted ? "bg-green-50 border-green-200" : "bg-white"
                }`}
              >
                {/* Language Name */}
                <Input
                  placeholder="Language"
                  value={item.name}
                  onChange={(e) => updateEntry(item.id, "name", e.target.value)}
                />

                {/* Rating Input */}
                <Input
                  type="number"
                  placeholder="0 - 10"
                  value={item.rating ?? ""}
                  min={0}
                  max={10}
                  onChange={(e) => {
                    const value =
                      e.target.value === ""
                        ? ""
                        : Math.min(10, Math.max(0, Number(e.target.value)));
                    updateEntry(item.id, "rating", value);
                  }}
                />

                {/* Submit Button */}
                <Button
                  variant={item.submitted ? "secondary" : "default"}
                  size="sm"
                  className="gap-2"
                  onClick={() => submitEntry(item.id)}
                  disabled={item.submitted}
                >
                  {item.submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added
                    </>
                  ) : (
                    "Add"
                  )}
                </Button>

                {/* Delete Button */}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteEntry(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}

            <Button variant="outline" onClick={addEntry} className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Add Language
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default LanguageSection;

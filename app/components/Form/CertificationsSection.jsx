"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";
import { generateId } from "@/utils/resumeStorage";

export const CertificationsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 🔹 get certifications from store
  const certifications = useResumeStore(
    (s) => s.resume.data.certifications || []
  );

  // 🔹 updater
  const updateCertifications = (newItems) => {
    useResumeStore.setState((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          certifications: newItems,
        },
      },
    }));
  };

  // 🔹 actions
  const addEntry = () => {
    updateCertifications([
      ...certifications,
      {
        id: generateId(),
        name: "",
        organization: "",
        year: "",
        submitted: false,
      },
    ]);
  };

  const updateEntry = (id, field, value) => {
    updateCertifications(
      certifications.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const deleteEntry = (id) => {
    updateCertifications(certifications.filter((item) => item.id !== id));
  };

  const submitEntry = (id) => {
    updateCertifications(
      certifications.map((item) =>
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
          <CardTitle className="text-lg">Certifications</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          {certifications.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg space-y-2 transition-colors ${
                item.submitted ? "bg-green-50 border-green-200" : "bg-white"
              }`}
            >
              <Input
                placeholder="Certification Name"
                value={item.name}
                onChange={(e) => updateEntry(item.id, "name", e.target.value)}
              />
              <Input
                placeholder="Issuing Organization"
                value={item.organization}
                onChange={(e) =>
                  updateEntry(item.id, "organization", e.target.value)
                }
              />
              <Input
                placeholder="Year / Date"
                value={item.year}
                onChange={(e) => updateEntry(item.id, "year", e.target.value)}
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

          <Button variant="outline" onClick={addEntry} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Add Certification
          </Button>
        </CardContent>
      )}
    </Card>
  );
};

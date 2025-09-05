"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";

export const SummarySection = () => {
  const [isExpanded, setIsExpanded] = useState(false); // 🔹 local expand/collapse state

  // 🔹 Get summary from the store
  const summary = useResumeStore((s) => s.resume.data.summary);
  const setSummary = useResumeStore((s) => s.setResume); // OR add a dedicated updater

  // Better: create a small wrapper updater
  const updateSummary = (value) => {
    useResumeStore.setState((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          summary: value,
        },
      },
    }));
  };

  return (
    <Card className="mb-4">
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Summary</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <Textarea
            value={summary}
            onChange={(e) => updateSummary(e.target.value)}
            placeholder="Write your professional summary here..."
            rows={4}
          />
        </CardContent>
      )}
    </Card>
  );
};

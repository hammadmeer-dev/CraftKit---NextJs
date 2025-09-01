"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";

export const HobbySection = () => {
  const [isExpanded, setIsExpanded] = useState(true); // 🔹 local expand/collapse state

  // 🔹 Get hobby from the store
  const hobby = useResumeStore((s) => s.resume.data.hobby);

  // 🔹 updater for hobby
  const updateHobby = (value) => {
    useResumeStore.setState((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          hobby: value,
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
          <CardTitle className="text-lg">Hobby</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <Textarea
            value={hobby}
            onChange={(e) => updateHobby(e.target.value)}
            placeholder="Write about your hobbies or interests..."
            rows={4}
          />
        </CardContent>
      )}
    </Card>
  );
};

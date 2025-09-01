"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useResumeStore } from "../../Store/resumeStore";

export const PersonalInfoSection = () => {
  const [isExpanded, setIsExpanded] = useState(true); // 🔹 state to toggle

  // 🔹 Access fields one by one
  const fullName = useResumeStore((s) => s.resume.data.personalInfo.fullName);
  const profession = useResumeStore((s) => s.resume.data.personalInfo.profession);
  const location = useResumeStore((s) => s.resume.data.personalInfo.location);
  const phone = useResumeStore((s) => s.resume.data.personalInfo.phone);
  const email = useResumeStore((s) => s.resume.data.personalInfo.email);
  const portfolioWebsite = useResumeStore((s) => s.resume.data.personalInfo.portfolioWebsite);
  const profileImage = useResumeStore((s) => s.resume.data.personalInfo.profileImage);

  const updatePersonalInfo = useResumeStore((s) => s.updatePersonalInfo);

  return (
    <Card className="mb-4">
      <CardHeader 
        className="cursor-pointer" 
        onClick={() => setIsExpanded((prev) => !prev)} // 🔹 toggle on click
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Personal Information</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="pb-2">Full Name</Label>
            <Input
              value={fullName}
              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            />
          </div>
          <div>
            <Label className="pb-2">Profession</Label>
            <Input
              value={profession}
              onChange={(e) => updatePersonalInfo("profession", e.target.value)}
            />
          </div>
          <div>
            <Label className="pb-2">Location</Label>
            <Input
              value={location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
            />
          </div>
          <div>
            <Label className="pb-2">Phone</Label>
            <Input
              value={phone}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            />
          </div>
          <div>
            <Label className="pb-2">Email</Label>
            <Input
              value={email}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />
          </div>
          <div>
            <Label className="pb-2">Portfolio Website</Label>
            <Input
              value={portfolioWebsite}
              onChange={(e) => updatePersonalInfo("portfolioWebsite", e.target.value)}
            />
          </div>
          <div>
            <Label className="pb-2">Profile Image URL</Label>
            <Input
              value={profileImage}
              onChange={(e) => updatePersonalInfo("profileImage", e.target.value)}
            />
          </div>
        </CardContent>
      )}
    </Card>
  );
};

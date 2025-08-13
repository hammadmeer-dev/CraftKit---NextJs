import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export default function SummarySection({ expanded, toggleSection, summary, updateSummary }) {
  return (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={() => toggleSection("summary")}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Summary</CardTitle>
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </CardHeader>
      {expanded && (
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
}

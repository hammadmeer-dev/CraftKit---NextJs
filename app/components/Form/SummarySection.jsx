import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const SummarySection = ({ summary, updateSummary, isExpanded, toggleSection }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={toggleSection}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Summary</CardTitle>
          {isExpanded ? <ChevronUp/> : <ChevronDown />}
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
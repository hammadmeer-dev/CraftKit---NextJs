import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const PersonalInfoSection = ({ personalInfo, updatePersonalInfo, isExpanded, toggleSection }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={toggleSection}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Personal Info</CardTitle>
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-4">
          {Object.entries(personalInfo).map(([key, value]) => (
            <div key={key}>
              <Label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</Label>
              <Input 
                id={key}
                value={value}
                onChange={(e) => updatePersonalInfo(key, e.target.value)}
                placeholder={key}
              />
            </div>
          ))}
        </CardContent>
      )}
    </Card>
  );
};
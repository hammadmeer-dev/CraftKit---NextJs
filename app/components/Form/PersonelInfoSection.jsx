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
          {/* Loop through fields except profileImage */}
          {Object.entries(personalInfo)
            .filter(([key]) => key !== "profileImage")
            .map(([key, value]) => (
              <div key={key}>
                <Label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</Label>
                <Input
                  id={key}
                  value={value}
                  onChange={(e) => updatePersonalInfo(key, e.target.value)}
                  placeholder={key}
                />
              </div>
            ))}

          {/* Profile Image upload */}
          <div>
            <Label htmlFor="profileImage">Profile Picture</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    updatePersonalInfo("profileImage", reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />

            {personalInfo.profileImage && (
              <div className="mt-2">
                <img
                  src={personalInfo.profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border"
                />
                <button
                  type="button"
                  className="text-red-500 text-sm mt-1"
                  onClick={() => updatePersonalInfo("profileImage", "")}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

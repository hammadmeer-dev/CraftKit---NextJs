import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";
import { generateId, loadResumes, saveResume } from "@/utils/resumeStorage";

const SkillsSection = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("All changes saved");

  // keep items synced with props
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const toggleSection = () => setIsExpanded(!isExpanded);

  const addEntry = () => {
    setItems([
      ...items,
      { id: generateId(), name: "", rating: "", submitted: false },
    ]);
    setSaveStatus("Unsaved changes");
  };

  const updateEntry = (id, field, value) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
    setSaveStatus("Unsaved changes");
  };

  const deleteEntry = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSaveStatus("Unsaved changes");
  };

  const submitEntry = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, submitted: true } : item)));
    setSaveStatus("Unsaved changes");
  };

  const handleSave = async () => {
    setSaveStatus("Saving...");
    try {
      const savedResumes = await loadResumes();
      if (!savedResumes || savedResumes.length === 0) {
        setSaveStatus("No resume found to save!");
        return;
      }
      const updatedResume = {
        ...savedResumes[0],
        data: { ...savedResumes[0].data, skills: items },
      };
      await saveResume(updatedResume);
      setSaveStatus("All changes saved");
    } catch (err) {
      console.error(err);
      setSaveStatus("Error saving");
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader onClick={toggleSection} className="cursor-pointer">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Skills</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex gap-2 items-center p-2 rounded-lg border transition-colors ${
                  item.submitted ? "bg-green-50 border-green-200" : "bg-white"
                }`}
              >
                {/* Skill Name */}
                <Input
                  placeholder="Skill"
                  value={item.name}
                  onChange={(e) => updateEntry(item.id, "name", e.target.value)}
                />

                {/* Rating */}
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
              <Plus className="w-4 h-4 mr-2" /> Add Skill
            </Button>

            <Button onClick={handleSave} className="w-full mt-3">
              Save Skills
            </Button>
            <p className="text-sm text-gray-500 mt-2">{saveStatus}</p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SkillsSection;

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2 } from "lucide-react";
import { generateId, loadResumes, saveResume } from "@/utils/resumeStorage";

export const EducationSection = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("All changes saved");

  // 🔑 Keep items in sync with props (reload/update)
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const toggleSection = () => setIsExpanded(!isExpanded);

  const addEntry = () => {
    setItems([
      ...items,
      {
        id: generateId(),
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
        description: "",
        submitted: false,
      },
    ]);
    setSaveStatus("Unsaved changes");
  };

  const updateEntry = (id, field, value) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    ));
    setSaveStatus("Unsaved changes");
  };

  const deleteEntry = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSaveStatus("Unsaved changes");
  };

  const submitEntry = (id) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, submitted: true } : item
    ));
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
        data: {
          ...savedResumes[0].data,
          education: items, // ⬅️ save education section only
        },
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
          <CardTitle className="text-lg">Education</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg relative space-y-2 transition-colors ${
                item.submitted ? "bg-green-50 border-green-200" : "bg-white"
              }`}
            >
              <Input
                placeholder="Degree"
                value={item.degree ?? ""}
                onChange={(e) => updateEntry(item.id, "degree", e.target.value)}
              />
              <Input
                placeholder="School"
                value={item.school ?? ""}
                onChange={(e) => updateEntry(item.id, "school", e.target.value)}
              />
              <Input
                type="date"
                placeholder="Start Date"
                value={item.startDate ?? ""}
                onChange={(e) => updateEntry(item.id, "startDate", e.target.value)}
              />
              <Input
                type="date"
                placeholder="End Date"
                value={item.endDate ?? ""}
                onChange={(e) => updateEntry(item.id, "endDate", e.target.value)}
              />
              <Input
                placeholder="Description"
                value={item.description ?? ""}
                onChange={(e) => updateEntry(item.id, "description", e.target.value)}
              />

              <div className="flex gap-2">
                <Button size="sm" onClick={() => submitEntry(item.id)}>
                  Submit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteEntry(item.id)}
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" onClick={addEntry} className="w-full">
            <Plus className="w-4 h-4 mr-2" /> Add Education
          </Button>
          <Button onClick={handleSave} className="w-full mt-3">
            Save Education
          </Button>
          <p className="text-sm text-gray-500 mt-2">{saveStatus}</p>
        </CardContent>
      )}
    </Card>
  );
};

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";
import { generateId, loadResumes, saveResume } from "@/utils/resumeStorage";

export const ProjectsSection = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("All changes saved");

  // 🔑 Sync items with props after reload
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const toggleSection = () => setIsExpanded(!isExpanded);

  const addEntry = () => {
    setItems([
      ...items,
      {
        id: generateId(),
        name: "",
        description: "",
        link: "",
        submitted: false,
      },
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
        data: {
          ...savedResumes[0].data,
          projects: items,
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
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Projects</CardTitle>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 border rounded-lg space-y-2 transition-colors ${
                item.submitted ? "bg-green-50 border-green-200" : "bg-white"
              }`}
            >
              <Input
                placeholder="Project Name"
                value={item.name ?? ""}
                onChange={(e) => updateEntry(item.id, "name", e.target.value)}
                disabled={item.submitted}
              />
              <Input
                placeholder="Description"
                value={item.description ?? ""}
                onChange={(e) => updateEntry(item.id, "description", e.target.value)}
                disabled={item.submitted}
              />
              <Input
                placeholder="Link (optional)"
                value={item.link ?? ""}
                onChange={(e) => updateEntry(item.id, "link", e.target.value)}
                disabled={item.submitted}
              />

              <div className="flex justify-between gap-2">
                <Button
                  variant={item.submitted ? "secondary" : "default"}
                  size="sm"
                  className="flex-1 gap-2"
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

                <Button
                  variant="destructive"
                  size="sm"
                  className="flex-1 gap-2"
                  onClick={() => deleteEntry(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </div>
            </div>
          ))}

          <Button onClick={addEntry} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>

          <Button onClick={handleSave} className="w-full mt-3">
            Save Projects
          </Button>

          <p className="text-sm text-gray-500 mt-2">{saveStatus}</p>
        </CardContent>
      )}
    </Card>
  );
};

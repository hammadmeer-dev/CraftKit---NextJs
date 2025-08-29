import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Plus, Trash2, Check } from "lucide-react";

export const ListSection = ({
  title,
  items,
  defaultItem,
  onAdd,
  onUpdate,
  onDelete,
  onSubmit,
  isExpanded,
  toggleSection,
}) => {
  return (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={toggleSection}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg capitalize">
            {title === "workExperience"
              ? "Work Experience"
              : title === "skills"
              ? "Skills"
              : title.charAt(0).toUpperCase() + title.slice(1)}
          </CardTitle>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-lg relative space-y-2 transition-colors ${
                  item.submitted ? "bg-green-50 border-green-200" : "bg-white"
                }`}
              >
                {Object.entries(item)
                  .filter(([k]) => !["id", "submitted"].includes(k))
                  .map(([field, value]) => (
                    <Input
                      key={field}
                      placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                      value={
                        typeof value === "string"
                          ? value
                          : value?.toString() || ""
                      }
                      onChange={(e) => onUpdate(item.id, field, e.target.value)}
                      disabled={item.submitted}
                      className={item.submitted ? "bg-gray-50" : ""}
                    />
                  ))}
                <div className="flex justify-between gap-2">
                  <Button
                    variant={item.submitted ? "secondary" : "default"}
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={() => onSubmit(item.id)}
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
                    onClick={() => onDelete(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={onAdd}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add{" "}
              {title === "workExperience"
                ? "Experience"
                : title === "skills"
                ? "Skill"
                : title.slice(0, -1)}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

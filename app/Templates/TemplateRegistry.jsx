// app/Templates/TemplateRegistry.js
import CreativeResume from "./[name]/Creative";
import FormalResumeTemplate from "./[name]/Formal";
import ModernTemplate from "./[name]/modern";

export const templates = [
  {
    id: "modern",
    name: "Modern Resume",
    description: "A clean and professional modern resume template.",
    category: "Modern",
    component: ModernTemplate,
  },
  {
    id: "creative",
    name: "Creative Resume",
    description: "Showcase your personality with creative visuals.",
    category: "Creative",
    component: CreativeResume,
  },
  {
    id: "formal",
    name: "Formal Resume",
    description: "Perfect for developers and engineers.",
    category: "Technical",
    component: FormalResumeTemplate,
  },
];


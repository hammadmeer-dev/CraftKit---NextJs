import { create } from "zustand";

export const useTemplateStore = create((set) => ({
  selectedTemplate: "modern",
  setTemplate: (template) => set({ selectedTemplate: template }),
}));

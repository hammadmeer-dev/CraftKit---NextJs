import { create } from "zustand";

export const useTemplateStore = create((set) => ({
  selectedTemplate: null,
  setTemplate: (template) => set({ selectedTemplate: template }),
}));

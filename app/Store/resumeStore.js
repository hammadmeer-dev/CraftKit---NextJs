// /Store/resumeStore.js
import { create } from "zustand";

export const useResumeStore = create((set) => ({
  resume: {
    id: "",
    title: "Untitled Resume",
    templateId: "",
    created:"",
    data: {
      personalInfo: {
        fullName: "",
        profession: "",
        location: "",
        phone: "",
        email: "",
        citizenship: "",
        dateOfBirth: "",
        maritalStatus: "",
        portfolioWebsite: "",
        profileImage: "",
      },
      hobby: "",
      summary: "",
      workExperience: [],
      languages: [],
      education: [],
      skills: [],
      projects: [],
      certifications: [],
      achievements: [],
    },
  },

  // --- Actions ---
  setResume: (resume) => set({ resume }),

  updatePersonalInfo: (field, value) =>
    set((state) => ({
      resume: {
        ...state.resume,
        data: {
          ...state.resume.data,
          personalInfo: {
            ...state.resume.data.personalInfo,
            [field]: value,
          },
        },
      },
    })),
}));

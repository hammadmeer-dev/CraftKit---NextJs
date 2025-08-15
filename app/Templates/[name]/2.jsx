import React from "react";

export default function Resume(resumeData) {
    const resumeData = {
  name: "Prabha Din",
  title: "Project Manager",
  summary:
    "Goal-oriented project manager with 5+ years of experience and a background in graphic design...",
  workHistory: [
    {
      startDate: "2016-09",
      endDate: "present",
      position: "Project Manager",
      company: "ImagineYou, Ahmedabad",
      responsibilities: [
        "Coordinated graphic design projects with 97% delivered before deadlines.",
        "Created concept design for an educational application with 4.9 rating...",
        "Communicated regular project updates to stakeholders...",
      ],
    },
    {
      startDate: "2013-06",
      endDate: "2016-08",
      position: "Graphic Designer",
      company: "Vision Publishing, Ahmedabad",
      responsibilities: [
        "Created illustrations for children's storybooks nominated for award.",
        "Collaborated with illustrators and copywriters...",
      ],
    },
  ],
  education: [
    {
      startDate: "2010-08",
      endDate: "2013-04",
      degree: "Graphic Design, Bachelor of Arts",
      institution: "C. U. Shah Arts College, Ahmedabad",
    },
  ],
  certificates: [{ year: "2020-09", name: "Project Management Professional" }],
  hobby:
    "Running a YouTube channel with advice for young artists...",
  personalInfo: {
    image: "/profile.jpg",
    email: "prabha.din@zetymail.in",
    phone: "0555 7480621",
    linkedin: "linkedin.com/in/prabha.din6",
    citizenship: "Indian",
    dob: "1992-06-10",
    maritalStatus: "Married",
  },
  skills: [
    "Project Coordination",
    "Strategic Planning",
    "Project Lifecycle Management",
    "Budgets",
    "Time Management",
    "Problem-Solving",
    "Communication",
    "Graphic Design",
  ],
  languages: [
    { language: "English", level: "C1" },
    { language: "Hindi", level: "C2" },
    { language: "Gujarati", level: "C2" },
  ],
};

  return (
    <div className="flex w-full min-h-screen bg-gray-100 p-6">
      {/* Left Section */}
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-green-700">{resumeData.name}</h1>
        <h2 className="text-lg font-medium text-gray-600">
          {resumeData.title}
        </h2>
        <p className="mt-3 text-sm text-gray-700">{resumeData.summary}</p>

        {/* Work History */}
        <section className="mt-6">
          <h3 className="text-xl font-bold text-green-700 border-b pb-1">
            Work History
          </h3>
          {resumeData.workHistory.map((job, idx) => (
            <div key={idx} className="mt-4">
              <p className="text-sm text-gray-500">
                {job.startDate} - {job.endDate}
              </p>
              <h4 className="font-semibold">{job.position}</h4>
              <p className="italic">{job.company}</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mt-6">
          <h3 className="text-xl font-bold text-green-700 border-b pb-1">
            Education
          </h3>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mt-4">
              <p className="text-sm text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="italic">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Certificates */}
        <section className="mt-6">
          <h3 className="text-xl font-bold text-green-700 border-b pb-1">
            Certificates
          </h3>
          {resumeData.certificates.map((cert, idx) => (
            <div key={idx} className="mt-2">
              <p className="text-sm text-gray-500">{cert.year}</p>
              <p>{cert.name}</p>
            </div>
          ))}
        </section>

        {/* Hobby */}
        <section className="mt-6">
          <h3 className="text-xl font-bold text-green-700 border-b pb-1">
            Hobby
          </h3>
          <p className="mt-2 text-sm text-gray-700">{resumeData.hobby}</p>
        </section>
      </div>

      {/* Right Section */}
      <div className="w-1/3 bg-gray-50 shadow-lg rounded-lg p-6 ml-6">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src={resumeData.personalInfo.image}
            alt="Profile"
            className="rounded-lg w-40 h-40 object-cover"
          />
        </div>

        {/* Personal Info */}
        <section className="mt-6">
          <h3 className="text-lg font-bold text-green-700">Personal Info</h3>
          <p className="mt-2 text-sm"><strong>Email:</strong> {resumeData.personalInfo.email}</p>
          <p className="text-sm"><strong>Phone:</strong> {resumeData.personalInfo.phone}</p>
          <p className="text-sm"><strong>LinkedIn:</strong> {resumeData.personalInfo.linkedin}</p>
          <p className="text-sm"><strong>Citizenship:</strong> {resumeData.personalInfo.citizenship}</p>
          <p className="text-sm"><strong>DOB:</strong> {resumeData.personalInfo.dob}</p>
          <p className="text-sm"><strong>Marital Status:</strong> {resumeData.personalInfo.maritalStatus}</p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h3 className="text-lg font-bold text-green-700">Skills</h3>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
            {resumeData.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section className="mt-6">
          <h3 className="text-lg font-bold text-green-700">Languages</h3>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
            {resumeData.languages.map((lang, idx) => (
              <li key={idx}>
                {lang.language} - {lang.level}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
import React from "react";

const clamp = (n, min = 0, max = 100) => Math.max(min, Math.min(max, n || 0));

function SectionTitle({ children }) {
  return (
    <h2 className="tracking-[0.35em] text-gray-800 uppercase text-2xl font-semibold mb-6">
      {children}
    </h2>
  );
}

function SkillBar({ label, level = 70 }) {
  return (
    <div className="mb-4">
      <div className="text-gray-300 text-sm mb-1">{label}</div>
      <div className="h-2 bg-gray-700/50 rounded">
        <div
          className="h-2 bg-gray-200 rounded"
          style={{ width: `${clamp(level)}%` }}
        />
      </div>
    </div>
  );
}

export default function ResumePreview(props) {
  const data = props?.ResumeData || props?.resumeData || {};

  const {
    photo,
    name = "AUSTIN BRONSON",
    location = "4710 Bus Boulevard, Flintstone, GA 30725",
    phone = "+(0) 1 2345 555",
    email = "contact@yourdomain.com",
    website,
    about =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    skills = [
      { label: "Graphic Design", level: 80 },
      { label: "Web Develop", level: 65 },
      { label: "Lorem Ipsum", level: 55 },
      { label: "Dolor sit amet", level: 75 },
      { label: "Consectetur elit", level: 40 },
    ],
    experience = [
      {
        role: "SALES FORCE TEAM LEADER",
        start: "2006",
        end: "NOW",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
      },
      {
        role: "SALES MANAGER",
        start: "2003",
        end: "2006",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        role: "SALESPERSON",
        start: "1999",
        end: "2003",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    education = [
      {
        school: "HIGH SCHOOL OF DESIGN",
        start: "1996",
        end: "1999",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        school: "SCHOOL 2",
        start: "1994",
        end: "1996",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  } = data;

  return (
    <div className="w-full mx-auto bg-gray-200 p-6">
      <div className="mx-auto bg-white shadow-sm max-w-5xl grid grid-cols-12 min-h-[1123px]">
        <aside className="col-span-4 bg-gray-900 text-white">
          <div className="h-64 bg-gray-800 flex items-end justify-center overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Upload photo</span>
              </div>
            )}
          </div>

          <div className="p-8">
            <h3 className="tracking-[0.35em] text-gray-300 uppercase text-xl mb-4">
              About Me
            </h3>
            <p className="text-gray-200/90 leading-relaxed text-sm mb-6">{about}</p>

            <h3 className="tracking-[0.35em] text-gray-300 uppercase text-xl mb-4">
              Skills
            </h3>
            <div>
              {skills?.map((s, idx) => (
                <SkillBar key={idx} label={s.label} level={s.level} />
              ))}
            </div>
          </div>
        </aside>

        <main className="col-span-8 bg-white p-12">
          <header className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-5xl font-extrabold tracking-widest text-gray-900 uppercase relative z-10">
                {name}
              </h1>
              <div className="absolute left-0 right-0 h-3 bg-yellow-400 -bottom-1" />
            </div>

            <div className="mt-6 text-gray-500 space-y-1">
              {location && <div>{location}</div>}
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {phone && <span>phone: {phone}</span>}
                {email && <span>email: {email}</span>}
                {website && <span>web: {website}</span>}
              </div>
            </div>
          </header>

          <section className="mb-10">
            <SectionTitle>Experience</SectionTitle>
            <div className="space-y-6">
              {experience?.map((job, idx) => (
                <div key={idx}>
                  <div className="text-gray-800 font-semibold tracking-widest uppercase">
                    {job.role}
                    {job.start || job.end ? (
                      <span className="ml-2 text-gray-500 font-normal">
                        ({job.start || ""}
                        {job.start || job.end ? " - " : ""}
                        {job.end || ""})
                      </span>
                    ) : null}
                  </div>
                  {job.summary && (
                    <p className="text-gray-600 leading-relaxed mt-2 text-sm">
                      {job.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-6">
              {education?.map((ed, idx) => (
                <div key={idx}>
                  <div className="text-gray-800 font-semibold tracking-widest uppercase">
                    {ed.school}
                    <span className="ml-2 text-gray-500 font-normal">
                      ({ed.start || ""}
                      {ed.start || ed.end ? " - " : ""}
                      {ed.end || ""})
                    </span>
                  </div>
                  {ed.summary && (
                    <p className="text-gray-600 leading-relaxed mt-2 text-sm">
                      {ed.summary}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
import { notFound } from "next/navigation";

const blogPosts = [
  {
    title: "How to Write an ATS-Friendly Resume",
    slug: "ats-friendly-resume",
    content: `
### Why ATS-Friendly Resumes Matter
Applicant Tracking Systems (ATS) are used by most companies to screen resumes...
`,
    date: "August 14, 2025",
  },
  {
    title: "Top Resume Templates for 2025",
    slug: "top-resume-templates-2025",
    content: `
### Modern Templates That Impress
Using modern templates can improve readability and impact...
`,
    date: "August 12, 2025",
  },
  {
    title: "Crafting Your Professional Summary",
    slug: "professional-summary-tips",
    content: `
### Writing a Standout Summary
Your professional summary is the first impression recruiters get...
`,
    date: "August 10, 2025",
  },
];

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="px-6 md:px-16 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-8">{post.date}</p>
      <div className="prose prose-indigo max-w-full">
        {post.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </main>
  );
}

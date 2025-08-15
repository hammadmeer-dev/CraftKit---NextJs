import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    title: "How to Write an ATS-Friendly Resume",
    description: "Tips to get your resume noticed by applicant tracking systems.",
    slug: "ats-friendly-resume",
    date: "August 14, 2025",
  },
  {
    title: "Top Resume Templates for 2025",
    description: "Modern templates that impress recruiters and hiring managers.",
    slug: "top-resume-templates-2025",
    date: "August 12, 2025",
  },
  {
    title: "Crafting Your Professional Summary",
    description: "Learn how to create a summary that stands out.",
    slug: "professional-summary-tips",
    date: "August 10, 2025",
  },
];

export default function BlogPage() {
  return (
    <main className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">CraftKit Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}

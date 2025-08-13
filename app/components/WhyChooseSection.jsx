import { ShieldCheck, Layout, FileDown } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "ATS-Friendly",
    description:
      "Optimize your resume to pass Applicant Tracking Systems with templates designed to get seen by recruiters."
  },
  {
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    title: "Modern Templates",
    description:
      "Choose from a curated collection of professionally designed templates that make your resume stand out."
  },
  {
    icon: <FileDown className="w-8 h-8 text-pink-500" />,
    title: "Instant PDF Export",
    description:
      "Generate and download your resume instantly in a high-quality PDF, ready for immediate submission."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-10">
        Why Choose CraftKit?
      </h2>
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

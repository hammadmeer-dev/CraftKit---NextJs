import Image from "next/image";

const testimonials = [
  {
    text: `"CraftKit transformed my job search! The templates are stunning, and the live preview saved me so much time. Highly recommend!"`,
    name: "Sarah Chen",
    role: "Marketing Specialist",
    image: "/users/user1.jpg" // replace with your image path
  },
  {
    text: `"The ATS-friendly feature is a game-changer. I started getting interviews immediately after using ResuCraft. Best resume builder out there!"`,
    name: "David Lee",
    role: "Software Engineer",
    image: "/users/user2.jpg"
  },
  {
    text: `"An incredible experience! Creating my resume and using the export options was a breeze with CraftKit!"`,
    name: "Maria Gomez",
    role: "Project Manager",
    image: "/users/user3.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10">
        What Our Users Say
      </h2>
      <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto px-4 scrollbar-hide">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 text min-w-[300px] flex-shrink-0"
          >
            <p className="text-gray-700 mb-4 w-70 text-justify">{t.text}</p>
            <div className="flex items-center gap-3 rounded-full">
              <Image
                src={t.image}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full h-10 w-10 object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

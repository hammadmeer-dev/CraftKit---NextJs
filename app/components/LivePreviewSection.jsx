import Image from "next/image";

export default function LivePreviewSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/Resume-Live-Preview.png" // Replace with your actual image path
            alt="Resume Live Preview"
            width={600}
            height={400}
            className=""
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">
            See Your Resume Come to Life
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our intuitive live preview updates in real-time as you type,
            ensuring you always know how your resume will look. No more
            guesswork, just perfect results.
          </p>
        </div>
      </div>
    </section>
  );
}

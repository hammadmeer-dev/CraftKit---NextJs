"use client";
import { useRouter } from "next/navigation";
export default function CTASection() {
    const router = useRouter();
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-2xl font-bold mb-6">
        Ready to Land Your Dream Job?
      </h2>
      <button onClick={()=>router.push("/Dashboard")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
        Start Building Now
      </button>
    </section>
  );
}

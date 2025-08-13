import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseSection from "./components/WhyChooseSection";
import LivePreviewSection from "./components/LivePreviewSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="font-sans flex flex-col max-w-screen-xl mx-auto gap-16">
      <Hero />
      <WhyChooseSection/>
      <LivePreviewSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}

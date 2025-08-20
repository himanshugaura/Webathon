import { TabsDemo } from "@/components/Events";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <ScrollProgress className="top-0" />
      <Navbar />
      <Hero />
      <TabsDemo />
    </div>
  );
}

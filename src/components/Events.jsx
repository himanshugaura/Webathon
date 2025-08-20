"use client";

import { Tabs } from "../components/ui/tabs";
import { SchoolEvents } from "./SchoolEvents";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function TabsDemo() {
  const tabs = [
    {
      title: "School Level",
      value: "schools",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <p>School Level Events</p>
          <SchoolEvents />
        </div>
      ),
    },
    {
      title: "College Level",
      value: "college",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Outdoor Events",
      value: "outdoor",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <p>Playground tab</p>
        </div>
      ),
    },
   
  ];

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
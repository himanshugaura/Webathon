"use client";

import { Tabs } from "../components/ui/tabs";
import { CollegeEvents, OutdoorEvents, SchoolEvents } from "./EventsDetails";
import { SparklesText } from "./magicui/sparkles-text";
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
          <p>College Level Events</p>
          <CollegeEvents />
        </div>
      ),
    },
    {
      title: "Outdoor Events",
      value: "outdoor",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <p>Outdoor Events</p>
          <OutdoorEvents />
        </div>
      ),
    },
   
  ];

  return (
    <section className="mb-60">
       <SparklesText className={"text-white mb-0 text-center"}>Events</SparklesText>
      <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
       
      <Tabs tabs={tabs} />
    </div>
    </section>
  );
}
"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { schoolEventsData } from "@/data/events";

export function SchoolEvents() {  
  return <div>
     <AnimatedTestimonials testimonials={schoolEventsData} />
  </div>
}

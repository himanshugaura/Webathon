"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { schoolEventsData, collegeEventsData, outdoorEventsData } from "@/data/events";

export function SchoolEvents() {  
  return <div>
     <AnimatedTestimonials testimonials={schoolEventsData} ctaUrl={"/events/school"} />
  </div>
}

export function CollegeEvents() {  
  return <div>
     <AnimatedTestimonials testimonials={collegeEventsData} ctaUrl={"/events/college"} />
  </div>
}

export function OutdoorEvents() {  
  return <div>
     <AnimatedTestimonials testimonials={outdoorEventsData} ctaUrl={"/events/outdoor"} />
  </div>
}
import React from 'react'
import { Marquee } from './magicui/marquee'
import Image from 'next/image'
import { SparklesText } from './magicui/sparkles-text'

const EventMarquee = () => {
    const marqueDetails1 = [
        {
            image : "/events/event1.JPG",
        },
        {
            image : "/events/event2.JPG",
        },
        {
            image : "/events/event3.JPG",
        },
        {
            image : "/events/event4.JPG",
        },
        {
            image : "/events/event5.JPG",
        },
    ]

    const marqueDetails2 = [
        {
            image : "/events/event6.JPG",
        },
        {
            image : "/events/event7.JPG",
        },
        {
            image : "/events/event8.JPG",
        },
        {
            image : "/events/event9.JPG",
        },
        {
            image : "/events/event10.JPG",
        },
    ]
  return (
    <div className="w-full h-fit p-10 flex flex-col items-center justify-center gap-7">
        <SparklesText>
            <h1 className="text-white">Glimpses Of Previous Events</h1>
        </SparklesText>
        <Marquee >
           {marqueDetails1.map((item, index) => (
            <div key={index} className="flex items-center w-md  p-6 justify-center">
                <img src={item.image} alt="event Image" />
            </div>
           ))}
        </Marquee>
           
            <Marquee reverse="true">
           {marqueDetails2.map((item, index) => (
            <div key={index} className="flex items-center w-md  p-6 justify-center">
                <img src={item.image} alt="event Image" className="w-full" />
            </div>
           ))}
        </Marquee>
       
    </div>
  )
}

export default EventMarquee
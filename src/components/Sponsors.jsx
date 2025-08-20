import React from 'react'
import { SparklesText } from './magicui/sparkles-text'
import { Marquee } from './magicui/marquee'

const Sponsors = () => {
  return (
    <div className="w-full h-fit p-10 flex flex-col items-center justify-center gap-7 relative">
        <SparklesText>
        <h1 className="text-center  text-white font-bold">Our Sponsors</h1>
        </SparklesText>
        <div className="relative overflow-hidden h-[500px] w-full">
        <Marquee>
            
             <img src="./logo.png" alt="Sponsor Logo" className="full h-full object-contain p-6 ml-20" />
             <img src="./logo.png" alt="Sponsor Logo" className="full h-full object-contain p-6 ml-20" />
             <img src="./logo.png" alt="Sponsor Logo" className="full h-full object-contain p-6 ml-20" />
             <img src="./logo.png" alt="Sponsor Logo" className="full h-full object-contain p-6 ml-20" />
             <img src="./logo.png" alt="Sponsor Logo" className="full h-full object-contain p-6 ml-20" />
            
        </Marquee>
</div>
    </div>
  )
}

export default Sponsors
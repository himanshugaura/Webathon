import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full p-8 bg-black flex justify-between">
        <div>
            <Image src="/logo_white.png" alt="Logo" width={50} height={50} />
        </div>
        <div>
            <ul className="flex gap-8 text-white text-2xl">
                <li><a href="">Home</a></li>
                <li><a href="">Event</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
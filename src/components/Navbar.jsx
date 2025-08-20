import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full fixed z-10 top-0 px-20 bg-transparent flex justify-between items-center">
        <div>
            <Image src="/logo_color.png" alt="Logo" width={100} height={50} />
        </div>
        <div>
            <ul className="flex gap-8 text-white text-lg ">
                <li className="hover:text-blue-600"><a href="">Home</a></li>
                <li className="hover:text-blue-600"><a href="">Event</a></li>
                <li className="hover:text-blue-600"><a href="">About</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
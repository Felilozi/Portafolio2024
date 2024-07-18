'use client'
import Image from "next/image"


const Avatar3 = () => {
    return (
        <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatar3.png" width="250" height="250" className="w-full h-full " alt="Particles " />
        </div>
    )
}

export default Avatar3

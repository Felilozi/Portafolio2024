'use client'

import Image from "next/image";
import { MotionTransition } from "./transition - component";


const Avatar = () => {
    return (
        <MotionTransition className="bottom-0 right-0 hidden  md:absolute  md:inline-block " position='bottom' >
            <Image src="/avatar-works.png" width={300} height={300} alt="Avatar" className="w-3/4 h-3/4	" />            
        </MotionTransition>
    )
}

export default Avatar;
'use client'

import Image from "next/image";
import { MotionTransition } from "../transition - component";



const Avatar = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 right-0 hidden  md:inline-block md:absolute "  >
            <Image src="/avatar-works.png" width={280} height={270} alt="Avatar" className=" mr-6 " />            
        </MotionTransition>
    )
}

export default Avatar;
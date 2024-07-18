'use client'

import Image from "next/image";
import { MotionTransition } from "./transition - component";

const AvatarServices = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden  md:inline-block md:absolute "  >
            <Image src="/demostracion.png" width="250" height="250" className="h-full " alt="Particles " />            
        </MotionTransition>
    )
}

export default AvatarServices;
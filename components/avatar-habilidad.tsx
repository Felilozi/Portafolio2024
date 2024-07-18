'use client'

import Image from "next/image";
import { MotionTransition } from "./transition - component";

const Avatarhabilidad = () => {
    return (
        <MotionTransition position='right' className="bottom-0 left-0 hidden  md:inline-block md:absolute "  >
            <Image src="/demostracion1.png" width="400" height="400" className="h-full " alt="Particles " />            
        </MotionTransition>
    )
}

export default Avatarhabilidad;
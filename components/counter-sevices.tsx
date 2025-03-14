'use client'
import CountUp from "react-countup";

import {dataCounter} from '@/data'

const CounterServices =()=>{
    return(
        <div className='  grid justify-between grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6 '> 
        {dataCounter.map(({id,endCounter,text,lineRight,lineRightMobile})=>(

            <div key={id} className={` ${lineRight && 'ltr'} `}> 
                <div className={`${lineRight  && 'md:px-2 border-2 border-transparent  md:border-e-gray-100'} 
                ${lineRightMobile && 'border-e-gray-100 mx-2 sm:mx-20 md:mx-5 place-content-center  '}`}>
                <p className="flex  max-w-[100px] mb-2 text-2xl font-extrabold md:text-4xl  text-secondary">+ <CountUp end={endCounter} start={0} duration={5} /> </p>
                <p className= "text-xs uppercase md:w-[95px] mt-4 ">{text}</p>
                    
                </div>
                

            </div>
        ))}     
        </div>
        )
}
export default  CounterServices;


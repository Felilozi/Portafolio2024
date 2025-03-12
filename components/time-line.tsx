'use client'

import { dataAboutPage } from "@/data"
import { Github } from "lucide-react"
import Link from "next/link"

const TimeLine = () => {
    return (
        <>
            <div className='flex flex-col justify-center divide-y divide-slate-200  '>
                <div className=' w-full max-w-3xl mx-auto md:pb-40 md:pt-20  '>
                    <div className='-my-6' > {dataAboutPage.map((data) => (

                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group " >
                            <h3 className=" mb-1 text-2xl font-bold sm:mb-0 ">{data.title}</h3>
                            <div className=' flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50   after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 mx-4'>
                                <time className='sm:absolute mx-3 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold 
                            uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-zinc-50 rounded-full'>{data.date}
                                </time>
                                <p className='text-xl font-bold text-secondary '>{data.subtitle}</p>
                            </div>
                            <p className='text-slate-400 max-w-md'>{data.description}</p>
                            <Link
                                className="flex px-3 py-2 my-2 mt-3 transition-all border-2 cursor-pointer  border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'"
                                href={data.urlGithub}
                               
                            >
                                <Github className="h-4 w-4" />
                                Código
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>

            </div >
        </>
    )
}
export default TimeLine
//id, title, subtitle, description, date
'use client'

import BoxContacto from "@/components/box-contacto";
import ContactForm from "@/components/contacto/form-contacto";
import TransitionPage from "@/components/transition-page";
import { dataContacto } from '@/data';



// import ConteinerPage from "@/components/container";
// import TransitionPage from "@/components/transition-page";

const Contacto = () => {
    return (
        //  cabecera
        <>
            <TransitionPage />
            <div className="max-w-5xl  mx-auto md:grid md:grid-cols-2 md:gap-2">
                <div className="isolate  px-6 py-24 sm:py-32 lg:px-8">

                    <div className=" ">
                        <h1 className=" text-4xl leading-tight  md:text-5xl mt-10">Contacta {' '}
                            <span className='fond-bold text-secondary'>conmigo</span>
                        </h1>
                        <p className="mt-2 text-lg leading-8 ">
                            ¿Interesado en trabajar juntos? Rellena tus datos abajo y contáctate conmigo.
                        </p>
                    </div>
                    <div className="mx-auto mt-2 "> {dataContacto.map((data) => (<BoxContacto key={data.id} data={data} />
                    ))}


                    </div>

                </div>
                <div><ContactForm /></div>

            </div>
        </>







    )
}
export default Contacto;














// const Contacto = () => {
//     return (
//         <>
//             <TransitionPage />
//             <ConteinerPage >
//             <h1 className=" text-4xl leading-tight text-center md:text-5xl md:mt-10">Contacta {' '}
//                     <span className='fond-bold text-secondary'>conmigo</span>
//                 </h1>

//             </ConteinerPage>

//         </>
//     )
// }

// export default Contacto;
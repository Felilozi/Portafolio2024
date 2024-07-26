import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '@/emailConfig';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';



const MySwal = withReactContent(Swal);


const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        country: 'AR',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formState, USER_ID)
            .then((result) => {
                let timerInterval: NodeJS.Timeout;
                MySwal.fire({
                    title: '¡Éxito!',
                    html: '¡Mensaje enviado correctamente!',
                    timer: 2000,
                    width: '300px',                    
                    timerProgressBar: true,
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    background: '#0b625a',
                    color: '#fff',
                    iconColor: '#1cf5e1',
                    confirmButtonColor: "#f54257",
                    didOpen: () => {
                        MySwal.showLoading();
                        const b = MySwal.getHtmlContainer()?.querySelector('b');
                        timerInterval = setInterval(() => {
                            if (b) {
                                b.textContent = String(MySwal.getTimerLeft());
                            }
                        }, 150);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                });
                setFormState({
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    phoneNumber: '',
                    country: 'AR',
                    message: '',
                });
            }, (error) => {
                MySwal.fire({
                    title: '¡Error!',
                    text: 'No se pudo enviar el mensaje. Intenta nuevamente más tarde.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                    background: '#0b625a',
                    color: '#fff',
                    iconColor: '#1cf5e1',
                    confirmButtonColor: '#f54257'
                });
            });
    };
    return (
        <>
            <div className="w-100 pt-20">
                <form onSubmit={handleSubmit} method="POST" className="mx-auto md:mt-10 max-w-96 md:max-w-lg pb-20 md:pb-40">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold leading-6">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    value={formState.firstName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold leading-6">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    value={formState.lastName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6">
                                Company
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    autoComplete="organization"
                                    value={formState.company}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formState.country}
                                        onChange={handleChange}
                                        className="h-full rounded-md border-0 bg-transparent text-black bg-none py-1 pl-4 pr-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option value="AR">AR</option>
                                        <option value="PY">PY</option>
                                        <option value="BR">BR</option>
                                        <option value="EU">EU</option>
                                    </select>
                                </div>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="namer"
                                    autoComplete="tel"
                                    value={formState.phoneNumber}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-4 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="px-3 py-2 my-2 transition-all border-2 cursor-pointer border-secondary text-md w-fit rounded-xl"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default ContactForm;









































// 'use client'

// const FormContacto = () => {
//     return (
// <>
//     <div className="w-100 pt-20">
//         <form action="#" method="POST" className="mx-auto md:mt-10 max-w-96 md:max-w-lg pb-20 md:pb-40 ">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                 <div>
//                     <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
//                         First name
//                     </label>
//                     <div className="mt-2.5">
//                     <input id="first-name" name="first-name" type="text"  autoComplete="given-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                     </div>
//                 </div>
//                 <div>
//                     <label htmlFor="last-name" className="block text-sm font-semibold leading-6 ">
//                         Last name
//                     </label>
//                     <div className="mt-2.5">
//                     <input  id="last-name" name="last-name" type="text" autoComplete="family-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"    />
//                     </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                     <label htmlFor="company" className="block text-sm font-semibold leading-6 ">
//                         Company
//                     </label>
//                     <div className="mt-2.5">
//                     <input id="company" name="company"  type="text"  autoComplete="organization"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//                     </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                     <label htmlFor="email" className="block text-sm font-semibold leading-6 ">
//                         Email
//                     </label>
//                     <div className="mt-2.5">
//                         <input
//                             id="email"
//                             name="email"
//                             type="email"
//                             autoComplete="email"
//                             className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                     </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                     <label htmlFor="phone-number" className="block text-sm font-semibold leading-6">
//                         Phone number
//                     </label>
//                     <div className="relative mt-2.5">
//                         <div className="absolute inset-y-0 left-0 flex items-center">
//                             <label htmlFor="country" className="sr-only">
//                                 Country
//                             </label>
//                             <select
//                                 id="country"
//                                 name="country"
//                                 className="h-full rounded-md border-0 bg-transparent  text-black bg-none py-1 pl-4 pr-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
//                             >
//                                 <option>AR</option>
//                                 <option>PY</option>
//                                 <option>BR</option>
//                                 <option>EU</option>
//                             </select>

//                         </div>
//                         <input
//                             id="phone-number"
//                             name="phone-number"
//                             type="tel"
//                             autoComplete="tel"
//                             className="block w-full rounded-md border-0 px-4 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         />
//                     </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                     <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
//                         Message
//                     </label>
//                     <div className="mt-2.5">
//                         <textarea
//                             id="message"
//                             name="message"
//                             rows={4}
//                             className="block w-full rounded-md border-0 px-3.5 py-2  text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             defaultValue={''}
//                         />
//                     </div>
//                 </div>

//             </div>
//             <div className="mt-10">
//                 <button className="px-3 py-2 my-2 transition-all border-2 cursor-pointer  border-secondary text-md w-fit rounded-xl"
//                     type="submit"

//                 > Enviar
//                 </button>
//             </div>
//         </form>
//     </div>

// </>
//     )
// }

// export default FormContacto;


'use client'

import AvatarPortafolio from "@/components/avatar/avatar-portafolio";
import Avatar3 from "@/components/avatar/avatar3";
import ConteinerPage1 from "@/components/conteiner2";

import PortfolioBox from "@/components/portfolioBox";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const Portafolio = () => {
    return (
        <>      
        <ConteinerPage1 >
                <TransitionPage />
                <Avatar3 />
                <AvatarPortafolio />
                
                <div className="flex flex-col justify-center h-full  ">
                    <h1 className=" text-2xl leading-tight text-center md:text-4xl ">Galeria{' '}
                        <span className='fond-bold text-secondary'> de Proyectos</span>
                    </h1>
                    <div className="z-4 grid max-w-4xl gap-6 mx-auto mt-2 md:grid-cols-4">
                        {dataPortfolio.map((data) => (
                            <PortfolioBox key={data.id} data={data} />
                        ))}
                    </div>
                </div>

                </ConteinerPage1>
            

        </>
    );
}

    ;

export default Portafolio;
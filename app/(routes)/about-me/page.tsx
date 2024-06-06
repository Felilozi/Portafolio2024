'use client'

import Avatar from "@/components/avatar";
import ConteinerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";




const PageAboutMe = () => {
    return(
        <>
            <TransitionPage/>
            <ConteinerPage >
                From Chindren
                <Avatar/> 
            </ConteinerPage>
            
        </>
        );
}

export default PageAboutMe;



//sfc stateless function component 
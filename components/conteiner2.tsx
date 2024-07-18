'use client'
interface ContainerProps{
    children : React.ReactNode
    
}


const ConteinerPage1 = (props:ContainerProps)=>{
    const {children}= props
    return (
        <div className=" w-full max-w-6xl px-4 pb-36
        mx-auto mt-32 md:pb-24 md: md:mt-16
        ">{children}
        </div>
        //w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6
    );
}  


export default ConteinerPage1;
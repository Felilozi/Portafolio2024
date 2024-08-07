'use client'
interface ContainerProps{
    children : React.ReactNode
    
}


const ConteinerPage = (props:ContainerProps)=>{
    const {children}= props
    return (
        <div className=" w-full max-w-5xl px-4 pb-40
        mx-auto mt-40  md:pb-0 md:px-6
        ">{children}
        </div>
        //w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6
    );
}  


export default ConteinerPage;
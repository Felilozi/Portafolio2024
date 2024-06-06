'use client'
interface ContainerProps{
    children : React.ReactNode
    
}


const ConteinerPage = (props:ContainerProps)=>{
    const {children}= props
    return (
        <div className="m-full max-w-6xl px-4 pb-40
        mx-auto mt-40  md:pb-0 md:px-6
        ">{children}
        </div>
    );
}  


export default ConteinerPage;
'use client'

interface ContactoBoxProps {
    data: {
        id: number,
        logo:JSX.Element,
        description: string 

    }
}
const BoxContacto = (props: ContactoBoxProps) => {
    const { data } = props
    const { id, logo, description } = data

    return (
        <div
            key={id}
            className="p-2  "
        >
            <h3 className="mb-2 text-xl">{logo}</h3>
            <h3 className="mb-2 text-xl">{description}</h3>


        </div>
    );
}
export default BoxContacto;
import {ReactNode} from "react";

type KnowTechProps = {
    tech: {
        name: string
        icon: ReactNode
        startDate: string
    }
}

export const KnowTech = ({ tech }: KnowTechProps) => {
    return (
        <div>
            <div>
                <p>{tech.name}</p>
                {tech.icon}
            </div>
        </div>
    )
}
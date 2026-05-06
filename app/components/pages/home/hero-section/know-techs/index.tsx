import { SectionTitle } from "@/app/components/section-title"
import { KnowTech } from "./known-tech"
import { TbBrandPython } from "react-icons/tb"
import { HorizontalDivider } from "@/app/components/divider/horizontal"

export const KnowTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competencies" title="Skills" />
        
            <div className="mt-10 grid grid-cols-4 [repeat(auto-fit,minmax(264px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
               {Array.from({ length: 8 }).map((_, index) => (
                    <KnowTech key={index} tech={{
                        icon: <TbBrandPython />,
                        name: "Python",
                        startDate: "2022-02-10"
                    }} />
                ))}
            </div>
            
        </section>
    )
}
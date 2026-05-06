import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"

export const HighlightedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="highlights" title="Highlighted Projects" />
            <HorizontalDivider className="mb-16" />
        </section>

    )
}
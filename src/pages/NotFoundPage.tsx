import { Link } from "react-router-dom"
import PageHeader from "../components/ui/PageHeader"

function NotFoundPage() {
    return (
        <section>
            <PageHeader
                title="Sidan kunde inte hittas"
                description="Sidan du söker finns inte."
            />

            <Link
                to="/"
                className="inline-flex min-h-11 items-center rounded-xl font-medium text-[#8C6843] underline underline-offset-4 transition-colors hover:text-[#6B625A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6843]"
            >
                Tillbaka till översikten
            </Link>
        </section>
    )
}

export default NotFoundPage
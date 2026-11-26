import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <section>
            <h1 className="mb-2 text-3xl font-semibold text-[#342D26]">
                Sidan kunde inte hittas
            </h1>

            <p className="mb-4 text-[#6B625A]">
                Sidan du söker finns inte.
            </p>

            <Link
                to="/"
                className="font-medium text-[#8C6843] underline underline-offset-4 transition-colors hover:text-[#6B625A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6843]"
            >
                Tillbaka till översikten
            </Link>
        </section>
    )
}

export default NotFoundPage;
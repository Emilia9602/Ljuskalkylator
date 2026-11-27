import { Link } from "react-router-dom"
import { SearchX } from "lucide-react"

function NotFoundPage() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE4D2] text-[#8C6843]">
                <SearchX size={26} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-[#342D26]">
                Sidan kunde inte hittas
            </h1>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6B625A]">
                Sidan du försöker nå finns inte eller har flyttats.
            </p>

            <Link
                to="/"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border border-[#8C6843] bg-[#8C6843] px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] no-underline transition-colors hover:bg-[#7A5A39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843]"
            >
                Tillbaka till översikten
            </Link>
        </section>
    )
}

export default NotFoundPage
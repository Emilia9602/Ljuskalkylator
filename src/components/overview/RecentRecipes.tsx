import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import StatusBadge from "../ui/StatusBadge"

const RECENT_RECIPES = [
    {
        name: "[Receptnamn]",
        date: "[datum]",
        sizes: "[antal]",
        status: "utkast" as const,
    },
    {
        name: "[Receptnamn]",
        date: "[datum]",
        sizes: "[antal]",
        status: "ejTestat" as const,
    },
    {
        name: "[Receptnamn]",
        date: "[datum]",
        sizes: "[antal]",
        status: "godkant" as const,
    },
    {
        name: "[Receptnamn]",
        date: "[datum]",
        sizes: "[antal]",
        status: "utkast" as const,
    },
]

function RecentRecipes() {
    return (
        <section className="overflow-hidden rounded-[20px] border border-[#E6D3B4] bg-[#FAF7F2] shadow-[0_1px_3px_rgba(52,45,38,0.06)] max-sm:rounded-[18px]">
            <div className="flex items-center justify-between gap-3 border-b border-[#E6D3B4] px-6 py-5 max-sm:px-4 max-sm:py-3.5">
                <h2 className="text-lg font-semibold text-[#342D26] max-sm:text-base">
                    <span className="max-sm:hidden">
                        Senast skapade eller ändrade
                    </span>
                    <span className="sm:hidden">
                        Senaste recept
                    </span>
                </h2>

                <Link
                    to="/recipes"
                    className="group relative flex min-h-11 items-center text-sm font-semibold text-[#8C6843] no-underline transition-colors duration-200 hover:text-[#6F4E2E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843] after:absolute after:bottom-[10px] after:left-0 after:h-[1.5px] after:rounded-full after:bg-[#D9BE95] after:transition-all after:duration-200 after:w-0 hover:after:w-full"                >
                    <span className="max-sm:hidden">Visa alla recept</span>
                    <span className="sm:hidden">Visa alla</span>
                </Link>
            </div>

            <ul className="m-0 list-none p-0">
                {RECENT_RECIPES.map((recipe, index) => (
                    <li
                        key={index}
                        className="border-b border-[#EFE4D2] last:border-b-0"
                    >
                        <Link
                            to="/recipes"
                            className="flex min-h-16 items-center gap-4 px-6 py-4 text-[#342D26] no-underline transition-colors hover:bg-[#F6EFE3] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#8C6843] max-sm:min-h-[72px] max-sm:gap-3 max-sm:px-4 max-sm:py-3.5"
                        >
                            <div className="flex min-w-0 flex-1 flex-col gap-1 max-sm:gap-1.5">
                                <span className="text-[15px] font-semibold">
                                    {recipe.name}
                                </span>

                                <span className="hidden text-[13px] text-[#6B625A] sm:block">
                                    Ändrat {recipe.date} · {recipe.sizes} ljusstorlekar
                                </span>

                                <div className="flex flex-wrap items-center gap-2 sm:hidden">
                                    <StatusBadge
                                        status={recipe.status}
                                        size="sm"
                                    />
                                    <span className="text-xs text-[#6B625A]">
                                        Ändrat {recipe.date}
                                    </span>
                                </div>
                            </div>

                            <span className="hidden sm:block">
                                <StatusBadge status={recipe.status} />
                            </span>

                            <ChevronRight
                                size={18}
                                strokeWidth={1.8}
                                className="shrink-0 text-[#8C6843]"
                                aria-hidden="true"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default RecentRecipes
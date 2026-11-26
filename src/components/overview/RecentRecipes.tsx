import { Link } from "react-router-dom"
import Card from "../ui/Card"
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
        <Card>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-semibold text-[#342D26]">
                    Senast skapade eller ändrade
                </h2>

                <Link
                    to="/recipes"
                    className="text-sm font-medium text-[#8C6843] underline underline-offset-4 hover:text-[#6B625A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6843]"
                >
                    Visa alla recept
                </Link>
            </div>

            <div className="divide-y divide-[#E6D3B4]">
                {RECENT_RECIPES.map((recipe, index) => (
                    <Link
                        key={index}
                        to="/recipes"
                        className="flex flex-col gap-2 py-4 transition-colors hover:bg-[#F8F4EC] focus-visible:outline-2 focus-visible:outline-[#8C6843] sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div>
                            <p className="font-semibold text-[#342D26]">
                                {recipe.name}
                            </p>

                            <p className="mt-1 text-sm text-[#6B625A]">
                                Ändrat {recipe.date} · {recipe.sizes} ljusstorlekar
                            </p>
                        </div>

                        <StatusBadge status={recipe.status} />
                    </Link>
                ))}
            </div>
        </Card>
    )
}

export default RecentRecipes
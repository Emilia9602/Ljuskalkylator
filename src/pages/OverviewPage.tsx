import QuickAccess from "../components/overview/QuickAccess"
import RecentRecipes from "../components/overview/RecentRecipes"
import RecipeStatusSummary from "../components/overview/RecipesStatusSummary"
import StatusBreakdown from "../components/overview/StatusBreakdown"
import StatCard from "../components/overview/StatCard"
import PageHeader from "../components/ui/PageHeader"
import { NotebookText, Package } from "lucide-react"

function OverviewPage() {
    const recipeCounts = {
        utkast: "[antal]",
        ejTestat: "[antal]",
        godkant: "[antal]",
    }

    return (
        <section>
            <PageHeader
                title="Översikt"
                description="En snabb sammanfattning av dina recept och material."
            />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <StatCard
                    title="Sparade recept"
                    value="[antal]"
                    icon={<NotebookText size={20} strokeWidth={1.8} />}
                >
                    <div className="hidden border-t border-[#EFE4D2] pt-3.5 sm:block">
                        <RecipeStatusSummary />
                    </div>
                </StatCard>

                <StatCard
                    title="Aktiva material"
                    value="[antal]"
                    description="Arkiverade material räknas inte"
                    icon={<Package size={20} strokeWidth={1.8} />}
                />

                <QuickAccess />

                <section className="col-span-full flex flex-col gap-3 rounded-[18px] border border-[#E6D3B4] bg-[#FAF7F2] p-4 shadow-[0_1px_3px_rgba(52,45,38,0.06)] sm:hidden">
                    <h2 className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-[#8C6843]">
                        Recept per status
                    </h2>

                    <StatusBreakdown counts={recipeCounts} large />
                </section>
            </div>

            <div className="mt-4">
                <RecentRecipes />
            </div>
        </section>
    )
}

export default OverviewPage
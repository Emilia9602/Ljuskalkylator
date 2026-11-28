import QuickAccess from "../components/overview/QuickAccess"
import RecentRecipes from "../components/overview/RecentRecipes"
import StatusBreakdown from "../components/overview/StatusBreakdown"
import StatCard from "../components/overview/StatCard"
import PageHeader from "../components/ui/PageHeader"
import { NotebookText, Package } from "lucide-react"

function OverviewPage() {
    const recipeCounts = {
        utkast: 0,
        ejTestat: 0,
        godkant: 0,
    }

    const hasRecipes = Object.values(recipeCounts).some((count) => count > 0)

    const materialCount = 0
    const hasMaterials = materialCount > 0

    return (
        <section>
            <PageHeader
                title="Översikt"
                description="En snabb sammanfattning av dina recept och material."
            />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <StatCard
                    title="Sparade recept"
                    value="0"
                    icon={<NotebookText size={20} strokeWidth={1.8} />}
                >
                    <div className="hidden border-t border-[#EFE4D2] pt-3.5 sm:block">
                        {hasRecipes ? (
                            <StatusBreakdown counts={recipeCounts} />
                        ) : (
                            <p className="mt-4 text-sm text-[#6B625A]">
                                Dina recept och deras status visas här när du har skapat ditt första recept.
                            </p>
                        )}
                    </div>
                </StatCard>

                <StatCard
                    title="Aktiva material"
                    value={String(materialCount)}
                    description="Arkiverade material räknas inte."
                    icon={<Package size={20} strokeWidth={1.8} />}
                >
                    {hasMaterials ? (
                        <p className="text-sm text-[#6B625A]">
                            Dina aktiva material visas här.
                        </p>
                    ) : (
                        <p className="text-sm text-[#6B625A]">
                            Dina material visas här när du har lagt till ditt första material.
                        </p>
                    )}
                </StatCard>

                <section className="col-span-full flex flex-col gap-3 rounded-[18px] border border-[#E6D3B4] bg-[#FAF7F2] p-4 shadow-[0_1px_3px_rgba(52,45,38,0.06)] sm:hidden">
                    <h2 className="m-0 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[#8C6843]">
                        Recept per status
                    </h2>

                    <StatusBreakdown counts={recipeCounts} large />
                </section>

                <div className="col-span-full h-full lg:col-span-1">
                    <QuickAccess />
                </div>
            </div>

            <div className="mt-4">
                <RecentRecipes />
            </div>
        </section>
    )
}

export default OverviewPage
import QuickAccess from "../components/overview/QuickAccess";
import RecentRecipes from "../components/overview/RecentRecipes";
import RecipeStatusSummary from "../components/overview/RecipesStatusSummary";
import StatCard from "../components/overview/StatCard";
import PageHeader from "../components/ui/PageHeader";

function OverviewPage() {
    return (
        <section>
            <PageHeader
                title="Översikt"
                description="Välkommen till Ljuskalkylatorn" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    title="Sparade recept"
                    value="[antal]"
                />

                <StatCard
                    title="Aktiva material"
                    value="[antal]"
                    description="Arkiverade material räknas inte"
                />

                <QuickAccess />
            </div>

            <div className="mt-4">
                <RecipeStatusSummary />
            </div>

            <div className="mt-4">
                <RecentRecipes />
            </div>
        </section>
    )
}

export default OverviewPage;
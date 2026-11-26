import Card from "../ui/Card"
import StatusBadge from "../ui/StatusBadge"

function RecipeStatusSummary() {
    return (
        <Card>
            <h2 className="mb-4 text-lg font-semibold text-[#342D26]">
                Receptstatus
            </h2>

            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <StatusBadge status="utkast" />
                    <span className="font-medium text-[#342D26]">[antal]</span>
                </div>

                <div className="flex items-center gap-2">
                    <StatusBadge status="ejTestat" />
                    <span className="font-medium text-[#342D26]">[antal]</span>
                </div>

                <div className="flex items-center gap-2">
                    <StatusBadge status="godkant" />
                    <span className="font-medium text-[#342D26]">[antal]</span>
                </div>
            </div>
        </Card>
    )
}

export default RecipeStatusSummary
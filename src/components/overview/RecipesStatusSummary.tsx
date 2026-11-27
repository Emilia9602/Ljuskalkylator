import StatusBreakdown from "./StatusBreakdown"

function RecipeStatusSummary() {
    return (
        <StatusBreakdown
            counts={{
                utkast: "[antal]",
                ejTestat: "[antal]",
                godkant: "[antal]",
            }}
        />
    )
}

export default RecipeStatusSummary
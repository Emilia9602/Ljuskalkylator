import Card from "../ui/Card"

type StatCardProps = {
    title: string
    value: string
    description?: string
}

function StatCard({ title, value, description }: StatCardProps) {
    return (
        <Card>
            <p className="mb-2 text-sm font-medium text-[#8C6843]">
                {title}
            </p>

            <p className="text-3xl font-semibold text-[#342D26]">
                {value}
            </p>

            {description && (
                <p className="mt-2 text-sm text-[#6B625A]">
                    {description}
                </p>
            )}
        </Card>
    )
}

export default StatCard
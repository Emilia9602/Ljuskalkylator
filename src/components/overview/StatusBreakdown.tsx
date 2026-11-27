import StatusBadge from "../ui/StatusBadge"

type Counts = {
    utkast: number | string
    ejTestat: number | string
    godkant: number | string
}

type StatusBreakdownProps = {
    counts: Counts
    large?: boolean
}

function StatusBreakdown({ counts, large = false }: StatusBreakdownProps) {
    const items = [
        { status: "utkast" as const, value: counts.utkast },
        { status: "ejTestat" as const, value: counts.ejTestat },
        { status: "godkant" as const, value: counts.godkant },
    ]

    return (
        <dl className="m-0 grid grid-cols-3 gap-2">
            {items.map(({ status, value }) => (
                <div key={status} className="flex flex-col items-start gap-1.5">
                    <dt className="order-2">
                        <StatusBadge status={status} size="sm" />
                    </dt>

                    <dd
                        className={`order-1 m-0 font-bold text-[#342D26] ${large ? "text-lg" : "text-base"
                            }`}
                    >
                        {value}
                    </dd>
                </div>
            ))}
        </dl>
    )
}

export default StatusBreakdown
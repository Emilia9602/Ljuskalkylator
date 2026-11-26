type StatusBadgeProps = {
    status: "utkast" | "ejTestat" | "godkant"
}

const STATUS_STYLES = {
    utkast: {
        label: "Utkast",
        style: "border border-dashed border-[#D9BE95] bg-[#F1E8DA] text-[#6B625A]",
        dot: "bg-transparent border border-[#8C6843]",
    },
    ejTestat: {
        label: "Ej testat",
        style: "border border-[#D9BE95] bg-[#E9D6B6] text-[#5C4630]",
        dot: "bg-[#8C6843]",
    },
    godkant: {
        label: "Godkänt",
        style: "border border-[#C5D0B8] bg-[#DCE3D0] text-[#3F5434]",
        dot: "bg-[#3F5434]",
    },
}

function StatusBadge({ status }: StatusBadgeProps) {
    const config = STATUS_STYLES[status]

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${config.style}`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    )
}

export default StatusBadge
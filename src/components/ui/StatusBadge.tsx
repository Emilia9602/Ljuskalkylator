type StatusBadgeProps = {
    status: "utkast" | "ejTestat" | "godkant"
    size?: "sm" | "md"
}

const STATUS_STYLES = {
    utkast: {
        label: "Utkast",
        style: "border border-dashed border-[#D9BE95] bg-[#F1E8DA] text-[#6B625A]",
        dot: "border-[1.5px] border-[#6B625A] bg-transparent",
    },
    ejTestat: {
        label: "Ej testat",
        style: "bg-[#E9D6B6] text-[#5C4630]",
        dot: "bg-[#5C4630]",
    },
    godkant: {
        label: "Godkänt",
        style: "bg-[#DCE3D0] text-[#3F5434]",
        dot: "bg-[#3F5434]",
    },
}

const SIZES = {
    sm: "gap-[5px] px-2 py-[3px] text-[11px]",
    md: "gap-1.5 px-2.5 py-1 text-xs",
}

function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
    const config = STATUS_STYLES[status]

    return (
        <span
            className={`inline-flex items-center whitespace-nowrap rounded-full font-semibold ${SIZES[size]} ${config.style}`}
        >
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${config.dot}`} />
            {config.label}
        </span>
    )
}

export default StatusBadge
import type { ReactNode } from "react"

type IconBoxSize = "sm" | "md" | "lg" | "xl"
type IconBoxTone = "default" | "success" | "danger"
type IconBoxShape = "square" | "circle"

type IconBoxProps = {
    children: ReactNode
    size?: IconBoxSize
    tone?: IconBoxTone
    shape?: IconBoxShape
    className?: string
    label?: string
}

const sizeClasses: Record<IconBoxSize, { box: string; radius: string }> = {
    sm: {
        box: "h-8 w-8 text-[13px] [&>svg]:h-4 [&>svg]:w-4",
        radius: "rounded-[9px]",
    },
    md: {
        box: "h-9 w-9 text-[14px] [&>svg]:h-[18px] [&>svg]:w-[18px]",
        radius: "rounded-[10px]",
    },
    lg: {
        box: "h-10 w-10 text-[15px] [&>svg]:h-5 [&>svg]:w-5",
        radius: "rounded-xl",
    },
    xl: {
        box: "h-16 w-16 text-[20px] [&>svg]:h-[26px] [&>svg]:w-[26px]",
        radius: "rounded-[20px]",
    },
}

const toneClasses: Record<IconBoxTone, string> = {
    default: "bg-[#EFE4D2] text-[#8C6843]",
    success: "bg-[#DCE3D0] text-[#3F5434]",
    danger: "bg-[#F3E3DE] text-[#9B6257]",
}

export default function IconBox({
    children,
    size = "md",
    tone = "default",
    shape = "square",
    className = "",
    label,
}: IconBoxProps) {
    const s = sizeClasses[size]
    const radius = shape === "circle" ? "rounded-full" : s.radius

    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center font-bold ${s.box} ${radius} ${toneClasses[tone]} ${className}`}
            {...(label
                ? { role: "img", "aria-label": label }
                : { "aria-hidden": true })}
        >
            {children}
        </span>
    )
}
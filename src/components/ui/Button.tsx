import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    variant?: "primary" | "secondary" | "destructive"
    className?: string
}

function Button({
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const variants = {
        primary:
            "border border-[#8C6843] bg-[#8C6843] text-[#FAF7F2] hover:bg-[#725333]",
        secondary:
            "border border-[#E6D3B4] bg-[#F8F4EC] text-[#6B625A] hover:bg-[#F0E7D9]",
        destructive:
            "border border-[#E7B4B4] bg-[#F4DADA] text-[#9B6257] hover:bg-[#EBCACA]",
    }

    return (
        <button
            className={`min-h-11 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843] ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
}

export default Button;
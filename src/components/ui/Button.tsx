import type { ReactNode, ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: "primary" | "secondary" | "destructive"
    className?: string
}

function Button({
    children,
    variant = "primary",
    className = "",
    type = "button",
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "border border-[#8C6843] bg-[#8C6843] text-[#FAF7F2] hover:bg-[#7A5A39] hover:text-[#FAF7F2]",
        secondary:
            "border border-[#D9BE95] bg-[#FAF7F2] text-[#8C6843] hover:bg-[#F1E8DA]",
        destructive:
            "border border-[#E7B4B4] bg-[#F4DADA] text-[#9B6257] hover:bg-[#EBCACA]",
    }

    return (
        <button
            type={type}
            className={`min-h-12 rounded-xl px-4 py-2 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843] disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
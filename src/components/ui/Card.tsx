import type { ReactNode } from "react"

type CardProps = {
    children: ReactNode
    className?: string
}

function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`rounded-2xl border border-[#E6D3B4] bg-[#FAF7F2] p-5 shadow-sm ${className}`}>
            {children}
        </div>
    )
}

export default Card;
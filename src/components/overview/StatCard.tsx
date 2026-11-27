import type { ReactNode } from "react"
import Card from "../ui/Card"
import IconBox from "../ui/IconBox"

type StatCardProps = {
    title: string
    value: string
    description?: string
    children?: ReactNode
    icon?: ReactNode
}

function StatCard({
    title,
    value,
    description,
    children,
    icon,
}: StatCardProps) {
    return (
        <Card>
            <div className="mb-3 flex items-center gap-2.5">
                {icon && (
                    <IconBox size="md">
                        {icon}
                    </IconBox>
                )}

                <p className="text-sm font-medium text-[#8C6843]">
                    {title}
                </p>
            </div>

            <p className="text-3xl font-semibold text-[#342D26]">
                {value}
            </p>

            {description && (
                <p className="mt-2 text-sm leading-relaxed text-[#6B625A]">
                    {description}
                </p>
            )}

            {children && (
                <div className="mt-4 pt-3">
                    {children}
                </div>
            )}
        </Card>
    )
}

export default StatCard
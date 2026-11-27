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
            <div className="mb-3 flex items-start gap-2.5">
                {icon && (
                    <IconBox size="md">
                        {icon}
                    </IconBox>
                )}

                <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium text-[#8C6843]">
                        {title}
                    </p>

                    <p className="text-3xl font-semibold text-[#342D26]">
                        {value}
                    </p>
                </div>
            </div>

            {description && (
                <p className="mt-2 text-sm leading-relaxed text-[#6B625A]">
                    {description}
                </p>
            )}

            {children && (
                <div className="mt-2 pt-2">
                    {children}
                </div>
            )}
        </Card>
    )
}

export default StatCard
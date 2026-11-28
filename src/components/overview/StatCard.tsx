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
        <Card className="max-sm:p-4">
            <div className="mb-1 flex flex-col items-start gap-2.5 sm:mb-3 sm:flex-row sm:gap-2.5">
                {icon && (
                    <IconBox
                        size="md"
                        className="max-sm:h-8 max-sm:w-8 max-sm:rounded-[10px] max-sm:[&>svg]:h-4 max-sm:[&>svg]:w-4"
                    >
                        {icon}
                    </IconBox>
                )}

                <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-4">
                    <p className="order-2 text-center text-xs font-semibold uppercase tracking-[0.07em] text-[#8C6843] sm:order-1 sm:text-left sm:text-sm sm:font-medium sm:normal-case sm:tracking-normal">
                        {title}
                    </p>

                    <p className="order-1 text-center text-[30px] font-bold leading-none text-[#342D26] sm:order-2 sm:text-left sm:text-3xl sm:font-semibold">
                        {value}
                    </p>
                </div>
            </div>

            {description && (
                <p className="mt-2 hidden text-sm leading-relaxed text-[#6B625A] sm:block">
                    {description}
                </p>
            )}

            {children && (
                <div className="mt-2 hidden pt-2 sm:block">
                    {children}
                </div>
            )}
        </Card>
    )
}

export default StatCard
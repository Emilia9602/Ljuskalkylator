import { Link } from "react-router-dom"
import { Package, Plus } from "lucide-react"
import Card from "../ui/Card"

function QuickAccess() {
    return (
        <Card className="flex flex-col gap-4 p-6">
            <h2 className="mb-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8C6843]">
                Snabbåtkomst
            </h2>

            <div className="flex flex-col gap-3">
                <Link
                    to="/calculator"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#8C6843] bg-[#8C6843] px-4 py-2 text-[15px] font-semibold text-[#FAF7F2] no-underline transition-colors hover:bg-[#7A5A39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843]"
                >
                    <Plus size={18} strokeWidth={2} aria-hidden="true" />
                    Nytt recept
                </Link>

                <Link
                    to="/materials"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D9BE95] bg-[#FAF7F2] px-4 py-2 text-[15px] font-semibold text-[#8C6843] no-underline transition-colors hover:bg-[#F1E8DA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843]"
                >
                    <Package size={18} strokeWidth={1.8} aria-hidden="true" />
                    Materialregister
                </Link>
            </div>
        </Card>
    )
}

export default QuickAccess
import { Link } from "react-router-dom"
import { Package, Plus } from "lucide-react"

function QuickAccess() {
    return (
        <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#E6D3B4] bg-[#FAF7F2] p-5 shadow-sm max-sm:rounded-none max-sm:border-0 max-sm:bg-transparent max-sm:p-0 max-sm:shadow-none sm:p-6">            <h2 className="mb-0.5 hidden text-xs font-semibold uppercase tracking-[0.12em] text-[#8C6843] sm:block">
            Snabbåtkomst
        </h2>

            <div className="flex flex-col gap-2.5 sm:gap-3">
                <Link
                    to="/calculator"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#8C6843] bg-[#8C6843] px-4 py-2 text-[15px] font-semibold text-[#FAF7F2] no-underline transition-colors hover:bg-[#7A5A39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843]"
                >
                    <Plus size={18} strokeWidth={2} aria-hidden="true" />
                    Nytt recept
                </Link>

                <Link
                    to="/materials"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#D9BE95] bg-[#FAF7F2] px-4 py-2 text-[15px] font-semibold text-[#8C6843] no-underline transition-colors hover:bg-[#F1E8DA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843]"
                >
                    <Package size={18} strokeWidth={1.8} aria-hidden="true" />
                    Materialregister
                </Link>
            </div>
        </div>
    )
}

export default QuickAccess
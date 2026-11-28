import { Link } from "react-router-dom"
import CandleIcon from "../ui/CandleIcon"
import IconBox from "../ui/IconBox"

function Header() {
    return (
        <Link
            to="/"
            className="flex items-center gap-2.5 rounded-xl text-[#342D26] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6843]"
        >
            <IconBox
                size="lg"
                className="max-sm:h-9 max-sm:w-9 max-sm:rounded-[10px] max-sm:[&>svg]:h-[18px] max-sm:[&>svg]:w-[18px]"
            >
                <CandleIcon />
            </IconBox>

            <span className="text-[17px] font-bold max-sm:text-base">
                Ljuskalkylator
            </span>
        </Link>
    )
}

export default Header
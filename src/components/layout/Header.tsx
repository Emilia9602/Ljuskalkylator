import { Link } from "react-router-dom"

function Header() {
    return (
        <Link
            to="/"
            className="flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6843]"
        >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFE4D2] text-xl">
                🕯️
            </span>

            <span className="text-xl font-semibold text-[#342D26]">
                Ljuskalkylator
            </span>
        </Link>
    )
}

export default Header;
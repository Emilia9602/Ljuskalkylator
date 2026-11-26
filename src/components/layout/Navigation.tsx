import { NavLink } from "react-router-dom"

const NAV_LINKS = [
    { label: "Översikt", path: "/" },
    { label: "Receptkalkylator", path: "/calculator" },
    { label: "Mina recept", path: "/recipes" },
    { label: "Materialregister", path: "/materials" },
    { label: "Inställningar", path: "/settings" },
]

function Navigation() {
    return (
        <nav
            aria-label="Huvudmeny"
            className="mx-6 mb-4 rounded-xl border border-[#D9BE95] bg-[#FAF7F2] p-2"
        >
            <ul className="flex flex-wrap items-center gap-2">
                {NAV_LINKS.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `block rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843] ${isActive
                                    ? "bg-[#D9BE95] text-[#342D26]"
                                    : "text-[#6B625A] hover:bg-[#F0E7D9] hover:text-[#342D26]"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;
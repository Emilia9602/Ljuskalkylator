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
            className="rounded-2xl bg-[#EFE4D2] p-1.5"
        >
            <ul className="grid grid-cols-6 gap-1.5 lg:flex lg:items-center">
                {NAV_LINKS.map((link, index) => (
                    <li
                        key={link.path}
                        className={`${index < 3 ? "col-span-2" : "col-span-3"
                            } lg:col-span-1`}
                    >
                        <NavLink
                            to={link.path}
                            end={link.path === "/"}
                            className={({ isActive }) =>
                                `flex min-h-12 items-center justify-center rounded-xl border px-2 py-2 text-center text-xs font-semibold transition-colors sm:text-sm ${isActive
                                    ? "border-[#C8A97E] bg-[#D9BE95] text-[#342D26]"
                                    : "border-[#EADBC2] bg-[#F8F4EC] text-[#6B625A] hover:bg-[#F0E7D9] hover:text-[#342D26]"
                                } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843]`
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
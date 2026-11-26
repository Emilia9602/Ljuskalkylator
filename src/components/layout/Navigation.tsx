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
        <nav aria-label="Huvudmeny">
            <ul>
                {NAV_LINKS.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) => isActive ? "bg-green-200" : ""}
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
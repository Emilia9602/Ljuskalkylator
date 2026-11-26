import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? "bg-green-200" : "")}>
                Översikt
            </NavLink>
            <NavLink to="/calculator"
                className={({ isActive }) => (isActive ? "bg-green-200" : "")}>
                Receptkalkylator
            </NavLink>
            <NavLink to="/recipes"
                className={({ isActive }) => (isActive ? "bg-green-200" : "")}>
                Mina recept
            </NavLink>
            <NavLink to="/materials"
                className={({ isActive }) => (isActive ? "bg-green-200" : "")}>
                Materialregister
            </NavLink>
            <NavLink to="/settings"
                className={({ isActive }) => (isActive ? "bg-green-200" : "")}>
                Inställningar
            </NavLink>
        </nav>
    )
}

export default Navigation;
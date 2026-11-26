import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <NavLink to="/">Översikt</NavLink>
            <NavLink to="/calculator">Receptkalkylator</NavLink>
            <NavLink to="/recipes">Mina recept</NavLink>
            <NavLink to="/materials">Materialregister</NavLink>
            <NavLink to="/settings">Inställningar</NavLink>
        </nav>
    )
}

export default Navigation;
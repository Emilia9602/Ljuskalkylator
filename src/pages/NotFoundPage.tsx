import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <section>
            <h1>Sidan kunde inte hittas</h1>
            <p>Sidan du söker finns inte.</p>
            <Link to="/">Tillbaka till översikten</Link>
        </section>
    )
}

export default NotFoundPage;
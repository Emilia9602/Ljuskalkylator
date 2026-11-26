import { Link } from "react-router-dom"
import Card from "../ui/Card"
import Button from "../ui/Button"

function QuickAccess() {
    return (
        <Card>
            <h2 className="mb-4 text-lg font-semibold text-[#342D26]">
                Snabbåtkomst
            </h2>

            <div className="flex flex-col gap-3">
                <Link to="/calculator" className="block">
                    <Button className="w-full">
                        + Nytt recept
                    </Button>
                </Link>

                <Link to="/materials" className="block">
                    <Button variant="secondary" className="w-full">
                        Materialregister
                    </Button>
                </Link>
            </div>
        </Card>
    )
}

export default QuickAccess
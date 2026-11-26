import type { ReactNode } from "react"
import Navigation from "./Navigation"

type AppLayoutProps = {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    )
}

export default AppLayout;
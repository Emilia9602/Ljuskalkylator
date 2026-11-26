import type { ReactNode } from "react"
import Navigation from "./Navigation"
import Header from "./Header"

type AppLayoutProps = {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                <div className="mx-auto w-full max-w-7xl px-4">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AppLayout;
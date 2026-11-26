import type { ReactNode } from "react"
import Navigation from "./Navigation"
import Header from "./Header"

type AppLayoutProps = {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-[#FAF6EE]">
            <Header />
            <Navigation />

            <main className="py-8">
                <div className="mx-auto w-full max-w-7xl rounded-2xl bg-[#FAF7F2] px-6 py-8 shadow-sm">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AppLayout;
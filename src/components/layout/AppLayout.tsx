import type { ReactNode } from "react"
import Navigation from "./Navigation"
import Header from "./Header"

type AppLayoutProps = {
    children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-[#FAF6EE]">
            <header className="border-b border-[#E6D3B4] bg-[#FAF7F2]">
                <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                    <Header />
                    <Navigation />
                </div>
            </header>

            <main className="mx-auto w-full max-w-[1120px] px-4 py-8 sm:px-6">
                {children}
            </main>
        </div>
    )
}

export default AppLayout;
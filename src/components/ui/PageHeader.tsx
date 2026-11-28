type PageHeaderProps = {
    title: string
    description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="mb-6 sm:mb-8">
            <h1 className="mb-2 text-[26px] font-semibold tracking-wide text-[#342D26]">
                {title}
            </h1>

            <p className="text-[15px] leading-relaxed text-[#6B625A]">
                {description}
            </p>
        </div>
    )
}

export default PageHeader
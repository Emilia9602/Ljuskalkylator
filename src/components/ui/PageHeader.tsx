type PageHeaderProps = {
    title: string
    description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="mb-6">
            <h1 className="mb-2 text-3xl font-semibold text-[#342D26]">
                {title}
            </h1>

            <p className="text-[#6B625A]">
                {description}
            </p>
        </div>
    )
}

export default PageHeader;
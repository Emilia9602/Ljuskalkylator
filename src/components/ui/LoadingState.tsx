type LoadingStateProps = {
    message?: string
}

function LoadingState({
    message = "Laddar...",
}: LoadingStateProps) {
    return (
        <div
            role="status"
            className="flex flex-col items-center justify-center px-4 py-8"
        >
            <div
                className="h-8 w-8 animate-spin rounded-full border-[3px] border-[#D9BE95]/40 border-t-[#8C6843]"
                aria-hidden="true"
            />

            <p className="mt-4 text-sm font-medium tracking-wide text-[#8C6843] sm:text-base">
                {message}
            </p>
        </div>
    )
}

export default LoadingState
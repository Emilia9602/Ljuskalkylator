type ErrorStateProps = {
    message?: string
    onRetry?: () => void
    isRetrying?: boolean
}

function ErrorState({
    message = "Något gick fel. Försök igen.",
    onRetry,
    isRetrying = false,
}: ErrorStateProps) {
    return (
        <div
            role="alert"
            className="flex flex-col items-center justify-center px-4 py-8 text-center"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4DADA] text-[#9B6257]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                </svg>
            </div>

            <h2 className="mt-4 text-lg font-semibold text-[#342D26]">
                Något gick fel
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6B625A]">
                {message}
            </p>

            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    disabled={isRetrying}
                    className="mt-5 rounded-xl border border-[#D9BE95]/50 bg-[#D9BE95] px-5 py-2.5 text-sm font-semibold text-[#342D26] transition-colors hover:bg-[#CFB58C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6843] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isRetrying ? "Försöker igen..." : "Försök igen"}
                </button>
            )}
        </div>
    )
}

export default ErrorState
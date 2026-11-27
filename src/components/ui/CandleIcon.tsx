type CandleIconProps = {
    size?: number;
    strokeWidth?: number;
    className?: string;
};

export default function CandleIcon({ size = 20, strokeWidth = 1.8, className }: CandleIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 3c1.6 1.8 1.6 3.3 0 4.6-1.6-1.3-1.6-2.8 0-4.6z" />
            <rect x="8" y="10" width="8" height="11" rx="1.5" />
        </svg>
    );
}
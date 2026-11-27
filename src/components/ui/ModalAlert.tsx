import { useEffect } from "react"
import Button from "./Button"
import IconBox from "./IconBox"

export type ModalAlertData = {
    type: "success" | "error" | "info" | "confirm"
    title: string
    message: string
    confirmText?: string
    confirmVariant?: "primary" | "destructive"
    onConfirm?: () => void
    isLoading?: boolean
}

type Props = {
    modal: ModalAlertData | null
    onClose: () => void
}

export default function ModalAlert({ modal, onClose }: Props) {
    useEffect(() => {
        if (!modal) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && !modal.isLoading) {
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [modal, onClose])

    if (!modal) return null

    const isConfirm = modal.type === "confirm"
    const confirmVariant = modal.confirmVariant ?? "destructive"

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#342D26]/50 p-4 backdrop-blur-sm"
            onClick={(event) => {
                if (
                    event.target === event.currentTarget &&
                    !modal.isLoading
                ) {
                    onClose()
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                className="w-full max-w-sm rounded-2xl border border-[#D9BE95]/50 bg-[#FAF6EE] p-6 shadow-2xl"
            >
                <div className="flex items-start gap-3">
                    <IconBox
                        size="lg"
                        shape="circle"
                        tone={
                            modal.type === "success"
                                ? "success"
                                : modal.type === "error"
                                    ? "danger"
                                    : "default"
                        }
                    >
                        {modal.type === "success"
                            ? "✓"
                            : modal.type === "error"
                                ? "!"
                                : modal.type === "confirm"
                                    ? "?"
                                    : "i"}
                    </IconBox>

                    <div>
                        <h2
                            id="modal-title"
                            className="text-lg font-semibold text-[#342D26]"
                        >
                            {modal.title}
                        </h2>

                        <p
                            id="modal-description"
                            className="mt-2 text-sm leading-relaxed text-[#6B625A]"
                        >
                            {modal.message}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                    {isConfirm && (
                        <Button
                            variant="secondary"
                            onClick={onClose}
                            disabled={modal.isLoading}
                        >
                            Avbryt
                        </Button>
                    )}

                    {isConfirm ? (
                        <Button
                            variant={confirmVariant}
                            onClick={modal.onConfirm}
                            disabled={modal.isLoading || !modal.onConfirm}
                        >
                            {modal.isLoading
                                ? "Arbetar..."
                                : modal.confirmText ?? "Bekräfta"}
                        </Button>
                    ) : (
                        <Button onClick={onClose}>
                            Tack
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
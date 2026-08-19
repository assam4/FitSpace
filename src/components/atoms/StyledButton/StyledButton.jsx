import './style.css'

export default function StyledButton({
    variant,
    mode,
    innerText,
    onClick,
    isDisabled,
    spanComponent,
    type = 'button',
}) {
    return (
        <button
            type={type}
            className={['styled_button', variant, mode, spanComponent && 'with-span'].filter(Boolean).join(' ')}
            onClick={onClick}
            disabled={isDisabled}
        >
            {innerText}
            {spanComponent}
        </button>
    )
}
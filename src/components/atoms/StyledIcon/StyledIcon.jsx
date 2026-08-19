import './style.css'

export default function StyledIcon({
    variant,
    align,
    fit = 'padded',
    src,
    alt,
    onClick,
}) {
    const className = ['styled_icon', variant, align, fit].filter(Boolean).join(' ');
    return (
        <div className={className} onClick={onClick}>
            <img className="styled_icon_image" src={src} alt={alt} />
        </div>
    )
}

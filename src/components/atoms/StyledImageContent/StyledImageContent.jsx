import './style.css'

export default function StyledImageContent({
    outTop,
    outBottom,
    src,
    alt,
}) {
    const className = [
        'styled_image_content',
        outTop && 'out_top',
        outBottom && 'out_bottom',
    ].filter(Boolean).join(' ')

    return (
        <div className={className}>
            <img src={src} alt={alt} className="styled_image_content_image" />
        </div>
    )
}

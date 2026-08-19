import './style.css';

export default function StyledHeading({
    align = 'left',
    isEnabled = false,
    iconSrc,
    iconAlt,
    title,
    backgroundSrc,
}) {
    return (
        <div className={`styled_heading_container container-${align}`}>
            {backgroundSrc && (
                <img
                    className={`styled_heading_background_image image-${align}`}
                    src={backgroundSrc}
                    alt=""
                />
            )}
            <div className="styled_heading_content">
                {iconSrc && (
                    <img
                        width="34"
                        height="34"
                        className="styled_heading_content_image"
                        src={iconSrc}
                        alt={iconAlt}
                    />
                )}
                <h2 className="styled_heading_content_title">{title}</h2>
            </div>
        </div>
    )
}

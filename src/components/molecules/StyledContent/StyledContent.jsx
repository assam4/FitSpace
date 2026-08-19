import './style.css'

export default function StyledContent({
    heading,
    text,
    contentFutter,
    align = 'left',
}) {
  const className = ['styled_content_container', `align-${align}`].filter(Boolean).join(' ')

  return (
      <div className={className}>
        {heading && (
          <div className="styled_content_heading_container">
            {heading}
          </div>
        )}
        {text && (
          <div className="styled_text_container">
            {text}
          </div>
        )}
        {contentFutter && (
          <div className="styled_content_footer_container">
            {contentFutter}
          </div>
        )}
      </div>
  )
}

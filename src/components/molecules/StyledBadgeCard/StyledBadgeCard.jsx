import StyledIcon from '../../atoms/StyledIcon/StyledIcon'
import './style.css'

export default function StyledBadgeCard({ src, text, arrowSrc, arrowAlt }) {
  return (
    <div className="styled_badge_card_container">
      <div className="styled_badge_card_content">
        <div className="styled_badge_card_content_img">
          {arrowSrc && (
            <div className="styled_badge_card_arrow">
              <StyledIcon src={arrowSrc} alt={arrowAlt} fit="fill" />
            </div>
          )}
          <StyledIcon src={src} alt={text} fit="fill" />
        </div>
        {text && <p className="styled_badge_card_text">{text}</p>}
      </div>
    </div>
  )
}

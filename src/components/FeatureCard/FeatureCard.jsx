import './style.css';

export default function FeatureCard({ backgroundSrcs, media, buttonText, bottomHeaderTitle }) {
    return (
        <div className="feature_card_container">
            <div className="feature_card_content">
                <div className="feature_card_content_img_container">
                    <img src={backgroundSrcs} alt="feature_card_content_img" />
                </div>
                <div className="feature_card_content_media_container">
                    <img src={media} alt="feature_card_content_media" />
                </div>
                <button className="feature_card_content_button">
                    {buttonText}
                    <span className="feature_card_content_button_arrow">
                        <svg className="feature_card_content_button_arrow_icon" width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M1 7h11M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="feature_card_bottom_title_container">
                <h2 className="feature_card_bottom_title_title">{bottomHeaderTitle}</h2>
                <span className="feature_card_bottom_title_arrow">
                    <svg className="feature_card_bottom_title_arrow_icon" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M1 7h11M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
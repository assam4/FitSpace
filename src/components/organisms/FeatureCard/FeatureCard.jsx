import './style.css';

export default function FeatureCard({ firstBackgroundSrc, secondBackgroundSrc, media, buttonText, arrowSrc, headerTitle }) {
    return (
        <div className="feature_card_first_container" style={{ backgroundImage: `url(${firstBackgroundSrc})` }}>
            <div className="feature_card_second_container" style={{ backgroundImage: `url(${secondBackgroundSrc})` }}>
                <button>
                    {buttonText}
                    <span className="feature_card_button_arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M5 12h14M13 6l6 6-6 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="feature_card_header_container">
                <h2>
                    {headerTitle}
                    <span className="feature_card_header_arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path
                                d="M2 12h18M13 4l8 8-8 8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </h2>
            </div>
        </div>
    )
}

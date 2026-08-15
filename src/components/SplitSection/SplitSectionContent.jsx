import SectionTitle from '../SectionTitle/SectionTitle';

export default function SplitSectionContent({
  backgroundText,
  backgroundAlign = 'left',
  title,
  description,
}) {
  return (
    <div className="split_section_content">
      <SectionTitle
        title={title}
        backgroundSrc={backgroundText}
        backgroundAlign={backgroundAlign}
      />
      <p className="split_section_content_description">{description}</p>
      <button type="button" className="split_section_content_button">
        View More
        <span className="split_section_content_button_arrow">
          <svg
            className="split_section_content_button_arrow_icon"
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 7h11M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

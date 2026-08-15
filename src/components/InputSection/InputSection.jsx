import SectionTitle from '../SectionTitle/SectionTitle';
import './style.css';

export default function InputSection({
  title,
  backgroundText,
  backgroundAlign = 'left',
  description,
  placeholder1,
  placeholder2,
  buttonText,
}) {
  return (
    <section className="input_section">
      <div className={`input_section_content input_section_content--${backgroundAlign}`}>
        <SectionTitle
          title={title}
          backgroundSrc={backgroundText}
          backgroundAlign={backgroundAlign}
        />
        <p className="input_section_description">{description}</p>
        <form className="input_section_form">
          <input
            className="input_section_input"
            type="text"
            placeholder={placeholder1}
          />
          <input
            className="input_section_input"
            type="email"
            placeholder={placeholder2}
          />
          <button className="input_section_button" type="submit">
            {buttonText}
            <span className="input_section_button_arrow">
              <svg
                className="input_section_button_arrow_icon"
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
        </form>
      </div>
    </section>
  );
}

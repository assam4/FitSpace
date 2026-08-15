import './style.css';

export default function SectionTitle({
  title,
  backgroundSrc,
  backgroundAlign = 'left',
}) {
  return (
    <div className={`section_title section_title--${backgroundAlign}`}>
      <img
        className={`section_title_bg section_title_bg--${backgroundAlign}`}
        src={backgroundSrc}
        alt=""
      />
      <h2 className="section_title_text">{title}</h2>
    </div>
  );
}

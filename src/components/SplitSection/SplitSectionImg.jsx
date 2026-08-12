export default function SplitSectionImg({ src, alt, id}) {
  return (
    <div className={`split_section_img ${id % 2 === 0 ? 'other_split_section_img' : ''}`}>
      <img src={src} alt={alt} className="split_section_img_media" />
    </div>
  )
}

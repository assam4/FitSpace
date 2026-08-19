import './style.css'

export default function StyledInputSection({
  placeholders = [],
  types = [],
  row = 3,
  button,
}) {
  const itemsPerRow = Number(row) || 3

  return (
    <form
      className="styled_input_section"
      style={{ '--items-per-row': itemsPerRow }}
    >
      {placeholders.map((placeholder, index) => (
        <input
          key={`${placeholder}-${index}`}
          className="styled_input_section_field"
          type={types[index] || 'text'}
          placeholder={placeholder}
          name={placeholder.toLowerCase()}
        />
      ))}
      {button}
    </form>
  )
}

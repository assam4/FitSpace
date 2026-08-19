import './style.css'

export default function StyledInputSection({
  fields = [],
  row = 3,
  button,
}) {
  const itemsPerRow = Number(row) || 3

  return (
    <form
      className="styled_input_section"
      style={{ '--items-per-row': itemsPerRow }}
    >
      {fields.map((field, index) => {
        const spanStyle = { gridColumn: `span ${Number(field.space) || 1}` }
        const fieldKey = `${field.placeholder}-${index}`

        if (field.type === 'select') {
          return (
            <select
              key={fieldKey}
              className="styled_input_section_field"
              name={field.placeholder?.toLowerCase()}
              defaultValue=""
              onChange={field.onChange}
              style={spanStyle}
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              {(field.options || []).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )
        }

        return (
          <input
            key={fieldKey}
            className="styled_input_section_field"
            type={field.type || 'text'}
            placeholder={field.placeholder}
            name={field.placeholder?.toLowerCase()}
            onChange={field.onChange}
            style={spanStyle}
          />
        )
      })}
      {button}
    </form>
  )
}

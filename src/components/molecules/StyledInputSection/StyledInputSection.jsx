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
        const fieldClassName = [
          'styled_input_section_field',
          field.error ? 'error' : '',
        ]
          .filter(Boolean)
          .join(' ')

        if (field.type === 'select') {
          return (
            <select
              key={fieldKey}
              className={fieldClassName}
              name={field.name || field.placeholder?.toLowerCase()}
              value={field.value ?? ''}
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
            className={fieldClassName}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
            name={field.name || field.placeholder?.toLowerCase()}
            style={spanStyle}
            readOnly={field.readOnly}
          />
        )
      })}
      {button}
    </form>
  )
}

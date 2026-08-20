import './style.css'

export default function StyledTable({
  columns,
  rows,
  headers = [],
  tableData = [],
}) {
  return (
    <table className="styled_table">
      <thead>
        <tr>
          {headers.slice(0, columns).map((header, colIndex) => {
            const isLastCol = colIndex === columns - 1
            return (
              <th
                key={colIndex}
                className={`styled_table_header bottom_border${isLastCol ? '' : ' right_border'}`}
              >
                {header}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const isLastRow = rowIndex === rows - 1
          return (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => {
                const isLastCol = colIndex === columns - 1
                const className = [
                  'styled_table_cell',
                  !isLastCol ? 'right_border' : '',
                  !isLastRow ? 'bottom_border' : '',
                  isLastRow && !isLastCol ? 'unfinish_bottom_border' : '',
                ]
                  .filter(Boolean)
                  .join(' ')

                return (
                  <td key={colIndex} className={className}>
                    {tableData[rowIndex]?.[colIndex] ?? ''}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

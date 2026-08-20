import SplitSection from '../../molecules/SplitSection/SplitSection'
import TitledSection from '../TitledSection/TitledSection'
import Container from '../../atoms/Container/Container'
import StyledTable from '../../atoms/StyledTable/StyledTable'
import './style.css'

export default function CalculationComponent({
    titleData = {},
    tableData = {},
}) {
    return (
        <SplitSection
            className="calculation_component"
            first={
                <TitledSection
                    title={titleData.title}
                    backgroundText={titleData.backgroundText}
                    backgroundAlign={titleData.backgroundAlign}
                    description={titleData.description}
                    iconSrc={titleData.iconSrc}
                    iconAlt={titleData.iconAlt}
                    fields={titleData.fields}
                    row={titleData.row}
                    button={titleData.button}
                />
            }
            second={
                <Container className="calculation_component_table_container">
                    <StyledTable columns={tableData.columns} rows={tableData.rows} headers={tableData.headers} tableData={tableData.tableData} />
                    <p>
                        {tableData.description}
                    </p>
                </Container>
            }
        />
    )
}

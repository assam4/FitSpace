import { useReducer } from 'react'
import SplitSection from '../../molecules/SplitSection/SplitSection'
import TitledSection from '../TitledSection/TitledSection'
import Container from '../../atoms/Container/Container'
import StyledTable from '../../atoms/StyledTable/StyledTable'
import StyledButton from '../../atoms/StyledButton/StyledButton'
import StyledIcon from '../../atoms/StyledIcon/StyledIcon'
import './style.css'

const initialInputData = {
    height: '',
    weight: '',
    age: '',
    gender: '',
    activityFactorResult: '',
    submitted: false,
}

function calculateBMI(height, weight, age, gender) {
    if (gender === 'Male') {
        return 10 * weight + 6.25 * height - 5 * age + 5
    }

    return 10 * weight + 6.25 * height - 5 * age - 161
}

function inputDataReducer(state, action) {
    switch (action.type) {
        case 'set_field':
            return { ...state, [action.field]: action.payload, submitted: false }
        case 'calculate':
            if (state.height && state.weight && state.age && state.gender)
                return { ...state, activityFactorResult: calculateBMI(Number(state.height), Number(state.weight), Number(state.age), state.gender), submitted: true }
            else
                return { ...state, submitted: true, activityFactorResult: '' }
        default:
            return state
    }
}

export default function CalculationComponent({
    titleData = {},
    tableData = {},
}) {
    const [inputData, dispatch] = useReducer(inputDataReducer, initialInputData)

    function handleChange(event) {
        dispatch({
            type: 'set_field',
            field: event.target.name,
            payload: event.target.value,
        })
    }

    const fields = [
        {
            name: 'height',
            placeholder: 'Height / cm',
            type: 'number',
            space: 1,
            value: inputData.height,
            onChange: handleChange,
            error: inputData.submitted && !inputData.height,
        },
        {
            name: 'weight',
            placeholder: 'Weight / kg',
            type: 'number',
            space: 1,
            value: inputData.weight,
            onChange: handleChange,
            error: inputData.submitted && !inputData.weight,
        },
        {
            name: 'age',
            placeholder: 'Age',
            type: 'number',
            space: 1,
            value: inputData.age,
            onChange: handleChange,
            error: inputData.submitted && !inputData.age,
        },
        {
            name: 'gender',
            placeholder: 'Gender',
            type: 'select',
            options: ['Male', 'Female', 'Other'],
            space: 1,
            value: inputData.gender,
            onChange: handleChange,
            error: inputData.submitted && !inputData.gender,
        },
        {
            name: 'activityFactorResult',
            placeholder: 'Calculate your activity factor:',
            type: 'text',
            space: 2,
            readOnly: true,
            value: inputData.activityFactorResult,
        },
    ]

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
                    fields={fields}
                    row={titleData.row}
                    button={
                        <StyledButton
                            type="button"
                            variant="primary"
                            mode="dark"
                            innerText="Calculate"
                            onClick={() => dispatch({ type: 'calculate' })}
                            spanComponent={
                                <StyledIcon
                                    src="/collection_vectors/button_arrow_icon.png"
                                    alt="button arrow icon"
                                    fit="padded"
                                    align="right"
                                />
                            }
                        />
                    }
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

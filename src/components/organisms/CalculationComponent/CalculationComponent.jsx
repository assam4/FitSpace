import SplitSection from '../../molecules/SplitSection/SplitSection'
import TitledSection from '../TitledSection/TitledSection'
import './style.css'

export default function CalculationComponent({
    title,
    backgroundText,
    backgroundAlign = 'center',
    description,
    iconSrc,
    iconAlt,
    fields = [],
    row = 2,
    button,
}) {
    return (
        <SplitSection
            className="calculation_component"
            first={
                <TitledSection
                    title={title}
                    backgroundText={backgroundText}
                    backgroundAlign={backgroundAlign}
                    description={description}
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    fields={fields}
                    row={row}
                    button={button}
                />
            }
            second={
                <TitledSection
                    title={title}
                    backgroundText={backgroundText}
                    backgroundAlign={backgroundAlign}
                    description={description}
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    fields={fields}
                    row={row}
                    button={button}
                />
            }
        />
    )
}

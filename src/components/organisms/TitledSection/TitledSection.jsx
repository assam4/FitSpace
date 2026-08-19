import Container from '../../atoms/Container/Container'
import StyledHeading from '../../molecules/StyledHeading/StyledHeading'
import StyledContent from '../../molecules/StyledContent/StyledContent'
import StyledInputSection from '../../molecules/StyledInputSection/StyledInputSection'
import './style.css'

export default function TitledSection({
  title,
  backgroundText,
  backgroundAlign = 'center',
  description,
  iconSrc,
  iconAlt,
  placeholders = [],
  types = [],
  row = 3,
  button,
}) {
  return (
    <Container className="titled_section">
      <StyledContent
        align="center"
        heading={
          title && (
            <StyledHeading
              title={title}
              backgroundSrc={backgroundText}
              align={backgroundAlign}
              iconSrc={iconSrc}
              iconAlt={iconAlt}
            />
          )
        }
        text={description && <p>{description}</p>}
        contentFutter={
          placeholders.length > 0 && (
            <StyledInputSection
              placeholders={placeholders}
              types={types}
              row={row}
              button={button}
            />
          )
        }
      />
    </Container>
  )
}

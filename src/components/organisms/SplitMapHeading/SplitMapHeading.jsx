import SplitSection from '../../molecules/SplitSection/SplitSection'
import StyledContent from '../../molecules/StyledContent/StyledContent'
import StyledHeading from '../../molecules/StyledHeading/StyledHeading'
import MapNavigation from '../MapNavigation/MapNavigation'
import StyledButton from '../../atoms/StyledButton/StyledButton'
import StyledIcon from '../../atoms/StyledIcon/StyledIcon'
import './style.css'

const EMPTY_LOCATIONS = []

export default function SplitMapHeading({
  locations = EMPTY_LOCATIONS,
  title,
  description,
  backgroundSrc,
  footerText,
  iconSrc,
  iconAlt,
  arrowSrc,
  arrowAlt,
}) {
  return (
    <SplitSection
      className="split_map_heading"
      first={<MapNavigation locations={locations} />}
      second={
        <StyledContent
          align="left"
          heading={
            title && (
              <StyledHeading
                align="center"
                title={title}
                backgroundSrc={backgroundSrc}
                iconSrc={iconSrc}
                iconAlt={iconAlt}
              />
            )
          }
          text={description && <p>{description}</p>}
          contentFutter={
              <StyledButton
                type="button"
                variant="primary"
                mode="dark"
                innerText={footerText}
                spanComponent={
                  arrowSrc && (
                    <StyledIcon
                      src={arrowSrc}
                      alt={arrowAlt}
                      fit="padded"
                      align="right"
                    />
                  )
                }
              />
          }
        />
      }
      firstClassName="split_map_heading_map"
      secondClassName="split_map_heading_media"
    />
  )
}

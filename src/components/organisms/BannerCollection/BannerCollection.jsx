import Banner from '../Banner/Banner'
import StyledContent from '../../molecules/StyledContent/StyledContent'
import StyledHeading from '../../molecules/StyledHeading/StyledHeading'
import StyledButton from '../../atoms/StyledButton/StyledButton'
import StyledIcon from '../../atoms/StyledIcon/StyledIcon'
import StyledImageContent from '../../atoms/StyledImageContent/StyledImageContent'
import './style.css'

function getSectionParts(section) {
  if (section.imageInRight) {
    return {
      textData: section.leftContent,
      imageData: section.rightContent,
      reverseSections: false,
    }
  }
  return {
    textData: section.rightContent,
    imageData: section.leftContent,
    reverseSections: true,
  }
}

export default function BannerCollection({ sections = [], collection }) {
  return (
    <div className="banner_collection">
      {sections.map((section, index) => {
        const { textData, imageData, reverseSections } = getSectionParts(section)
        const mode = index % 2 === 0 ? 'black' : ''
        return (
          <Banner
            key={section.id}
            mode={mode}
            reverseSections={reverseSections}
            content={
              <StyledContent
                heading={
                  <StyledHeading
                    align="left"
                    title={textData.title}
                    backgroundSrc={textData.backgroundText}
                    iconSrc={collection.cross_vector?.src}
                    iconAlt={collection.cross_vector?.alt}
                  />
                }
                text={<p>{textData.description}</p>}
                contentFutter={
                  <StyledButton
                    variant="primary"
                    mode="dark"
                    innerText="View More"
                    spanComponent={
                      <StyledIcon
                        src={collection.button_arrow?.src}
                        alt={collection.button_arrow?.alt}
                        fit="padded"
                        align="right"
                      />
                    }
                  />
                }
              />
            }
            media={
              <StyledImageContent
                src={imageData.src}
                alt={imageData.alt}
                outTop
                outBottom={section.id === 1}
              />
            }
          />
        )
      })}
    </div>
  )
}

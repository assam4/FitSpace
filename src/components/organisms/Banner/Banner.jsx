import './style.css'
import SplitSection from '../../molecules/SplitSection/SplitSection'

export default function Banner({ mode, content, media, reverseSections = false }) {
  const className = ['banner_container', mode].filter(Boolean).join(' ')
  const first = reverseSections ? media : content
  const second = reverseSections ? content : media
  const firstClassName = reverseSections ? 'media_styles' : 'content_styles'
  const secondClassName = reverseSections ? 'content_styles' : 'media_styles'

  return (
    <SplitSection
      className={className}
      first={first}
      second={second}
      firstClassName={firstClassName}
      secondClassName={secondClassName}
    />
  )
}

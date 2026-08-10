import './style.css'

import SplitSectionContent from './SplitSectionContent'
import SplitSectionImg from './SplitSectionImg'

export default function SplitSection({
  imageInRight,
  leftContent,
  rightContent,
}) {
  return (
    <div className="split_section">
      {imageInRight ? (
        <>
          <SplitSectionContent {...leftContent} />
          <SplitSectionImg {...rightContent} />
        </>
      ) : (
        <>
          <SplitSectionImg {...leftContent} />
          <SplitSectionContent {...rightContent} />
        </>
      )}
    </div>
  )
}

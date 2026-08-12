import './style.css'

import SplitSectionContent from './SplitSectionContent'
import SplitSectionImg from './SplitSectionImg'

export default function SplitSection({
  id,
  imageInRight,
    leftContent,
    rightContent,
  }) {
  return (
        <div className={`split_section ${id % 2 === 0 ? 'other_split_section' : ''}`} key={id}>      {imageInRight ? (
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

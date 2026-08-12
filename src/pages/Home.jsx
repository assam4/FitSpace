import Slider from '../components/Slider/Slider'
import SplitSection from '../components/SplitSection/SplitSection'
import Collection from '../components/Collection/Collection'
import { splitSections } from '../constants'
import { collectionContent } from '../constants'
export default function Home() {
  return (
    <main>
      <Slider />
      {
        splitSections.map((section) => (
          <SplitSection key={section.id} {...section} />  
        ))
      }
      <Collection collectionProps={collectionContent} />
    </main>
  )
}

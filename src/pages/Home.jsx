import Slider from '../components/Slider/Slider'
import SplitSection from '../components/SplitSection/SplitSection'
import Collection from '../components/Collection/Collection'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import InputSection from '../components/InputSection/InputSection'
import { splitSections } from '../constants'
import { collectionContent } from '../constants'
import { featureCards } from '../constants'
import { inputSection } from '../constants'
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
      <FeatureCard {...featureCards} />
      <InputSection {...inputSection} />
    </main>
  )
}

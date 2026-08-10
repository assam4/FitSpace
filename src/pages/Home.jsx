import Slider from '../components/Slider/Slider'
import SplitSection from '../components/SplitSection/SplitSection'
import { splitSections } from '../constants'

export default function Home() {
  return (
    <main>
      <Slider />
      {
        splitSections.map((section) => (
          <SplitSection key={section.id} {...section} />  
        ))
      }
    </main>
  )
}

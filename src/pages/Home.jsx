import { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from '../components/Slider/Slider'
import SplitSection from '../components/SplitSection/SplitSection'
import Collection from '../components/Collection/Collection'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import InputSection from '../components/InputSection/InputSection'

export default function Home() {
  const [banners, setBanners] = useState([])
  const [sections, setSections] = useState([])
  const [collection, setCollection] = useState([])
  const [featureCard, setFeatureCard] = useState(null)
  const [inputSection, setInputSection] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadHome() {
      try {
        const [
          bannersRes,
          sectionsRes,
          collectionRes,
          featureCardRes,
          inputSectionRes,
        ] = await Promise.all([
          axios.get('/api/banners'),
          axios.get('/api/sections'),
          axios.get('/api/collection'),
          axios.get('/api/feature-card'),
          axios.get('/api/input-section'),
        ])
        setBanners(bannersRes.data)
        setSections(sectionsRes.data)
        setCollection(collectionRes.data)
        setFeatureCard(featureCardRes.data)
        setInputSection(inputSectionRes.data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    loadHome()
  }, [])

  if (loading) {
    return <main>Loading...</main>
  }

  if (error) {
    return <main>Could not load page data.</main>
  }

  return (
    <main>
      <Slider banners={banners} />
      {sections.map((section) => (
        <SplitSection key={section.id} {...section} />
      ))}
      <Collection collectionProps={collection} />
      {featureCard && <FeatureCard {...featureCard} />}
      {inputSection && <InputSection {...inputSection} />}
    </main>
  )
}

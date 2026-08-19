import Slider from '../components/organisms/Slider/Slider'
import BannerCollection from '../components/organisms/BannerCollection.jsx/BannerCollection'
import IconsCollection from '../components/organisms/IconsCollection/IconsCollection'
import FeatureCard from '../components/organisms/FeatureCard/FeatureCard'
import TitledSection from '../components/organisms/TitledSection/TitledSection'
import SplitMapHeading from '../components/organisms/SplitMapHeading/SplitMapHeading'
import StyledButton from '../components/atoms/StyledButton/StyledButton'
import StyledIcon from '../components/atoms/StyledIcon/StyledIcon'
import SpiralledImages from '../components/organisms/SpiralledImages/SpiralledImages'

const banners = [
  { src: '/event_banners/crossfit.png', alt: 'Crossfit' },
  { src: '/event_banners/membership.jpeg', alt: 'Membership' },
  { src: '/event_banners/national_day.jpg', alt: 'National Day' },
]

const collection = {
  arrow: { src: '/collection_vectors/arrow.png', alt: 'arrow icon' },
  button_arrow: { src: '/collection_vectors/button_arrow_icon.png', alt: 'button arrow icon' },
  cross_vector: { src: '/collection_vectors/cross.png', alt: 'cross vector' },
  items: [
    { id: 1, src: '/collection_vectors/form.png', text: 'Maxpump' },
    { id: 2, src: '/collection_vectors/triangle.png', text: 'aron gym' },
    { id: 3, src: '/collection_vectors/snow.png', text: 'fit & tone' },
    { id: 4, src: '/collection_vectors/n.png', text: 'forza' },
    { id: 5, src: '/collection_vectors/c.png', text: 'balance fitness' },
    { id: 6, src: '/collection_vectors/snow.png', text: 'body sculpt' },
    { id: 7, src: '/collection_vectors/go.png', text: 'GO !' },
  ],
}

const sections = [
  {
    id: 1,
    imageInRight: true,
    leftContent: {
      backgroundText: '/images/strong_bg.png',
      backgroundAlign: 'left',
      title: 'Be You, Just stronger!\n Power is in you',
      description:
        'Unum solum justo ex ius. Pro cu probo laboramus\n eius insolens euripidis te eos, ut agam tota.',
    },
    rightContent: {
      src: '/images/content_photo_1.jpg',
      alt: 'Content 1',
    },
  },
  {
    id: 2,
    imageInRight: false,
    leftContent: {
      src: '/images/content_photo_2.jpg',
      alt: 'Content 2',
    },
    rightContent: {
      backgroundText: '/images/start_bg.png',
      backgroundAlign: 'left',
      title: 'Today is the best\nday to start!',
      description:
        'Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.',
    },
  },
]

export default function Home() {
  return (
    <main>
      <Slider banners={banners} />
      <BannerCollection sections={sections} collection={collection} />
      <IconsCollection collectionProps={collection} />
      <FeatureCard
        firstBackgroundSrc="/images/bg_image.jpg"
        secondBackgroundSrc="/images/feature_media.jpg"
        media="/images/feature_media.jpg"
        buttonText="Play"
        arrowSrc={collection.arrow.src}
        headerTitle="JOIN US"
      />
      <TitledSection
        title="Start here"
        backgroundText="/images/go.png"
        backgroundAlign="center"
        description="fill the form below to start your journey"
        iconSrc={collection.cross_vector.src}
        iconAlt={collection.cross_vector.alt}
        placeholders={['Name', 'Email']}
        types={['text', 'email']}
        row={3}
        button={
          <StyledButton
            type="submit"
            variant="primary"
            mode="dark"
            innerText="Subscribe"
            spanComponent={
              <StyledIcon
                src={collection.button_arrow.src}
                alt={collection.button_arrow.alt}
                fit="padded"
                align="right"
              />
            }
          />
        }
      />
      <SplitMapHeading
        title="Find us near you"
        description="Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci"
        footerText="view more"
        backgroundSrc="/images/look.png"
        iconSrc={collection.cross_vector.src}
        iconAlt={collection.cross_vector.alt}
        arrowSrc={collection.button_arrow.src}
        arrowAlt={collection.button_arrow.alt}
      />
      <SpiralledImages images={['/images/spiral1.png', '/images/spiral2.png', '/images/spiral3.png', '/images/spiral4.png', '/images/spiral5.png']} />
     </main>
  )
}

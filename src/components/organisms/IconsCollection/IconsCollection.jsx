import './style.css'
import Container from '../../atoms/Container/Container'
import StyledBadgeCard from '../../molecules/StyledBadgeCard/StyledBadgeCard'

export default function IconsCollection({ collectionProps }) {
  const items = collectionProps?.items ?? []
  const arrow = collectionProps?.arrow

  return (
    <Container className="icons_container">
      {items.map((item) => (
        <StyledBadgeCard
          key={item.id}
          src={item.src}
          text={item.text}
          arrowSrc={arrow?.src}
          arrowAlt={arrow?.alt}
        />
      ))}
    </Container>
  )
}

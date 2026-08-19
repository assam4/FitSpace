import './style.css'
import Container from '../../atoms/Container/Container'

export default function SplitSection({ className, first, second, firstClassName, secondClassName }) {
  const firstChildClass = [
    'child_container', firstClassName
  ].filter(Boolean).join(' ')
  const secondChildClass = [
    'child_container', secondClassName,
  ].filter(Boolean).join(' ')

  return (
    <Container className={`split_section_container ${className}`}>
      <div className={firstChildClass}>
        {first}
      </div>
      <div className={secondChildClass}>
        {second}
      </div>
    </Container>
  )
}

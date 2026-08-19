import { useState } from 'react'
import StyledIcon from '../StyledIcon/StyledIcon'
import './style.css'

export default function LanguageToggle({ languages = [] }) {
  const [lang, setLang] = useState(0)

  if (!languages.length) {
    return null
  }

  const toggleLanguage = () => {
    setLang((prev) => (prev + 1) % languages.length)
  }

  const current = languages[lang]

  return (
    <button type="button" className="language_toggle" onClick={toggleLanguage}>
      <StyledIcon src={current.src} alt={current.alt} fit="fill" />
    </button>
  )
}

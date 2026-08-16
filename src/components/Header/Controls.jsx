import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Controls() {
  const [languages, setLanguages] = useState([])
  const [lang, setLang] = useState(0)

  useEffect(() => {
    axios
      .get('/api/languages')
      .then((res) => setLanguages(res.data))
      .catch(() => setLanguages([]))
  }, [])

  const toggleLanguage = () => {
    if (!languages.length) {
      return
    }
    setLang((prev) => (prev + 1) % languages.length)
  }

  const current = languages[lang]

  return (
    <div className="controls_container">
      <button className="order_button"> Book Now </button>
      <div className="language_change_container" onClick={toggleLanguage}>
        {current && (
          <img src={current.src} alt={current.alt} className="language_icon" />
        )}
      </div>
    </div>
  )
}

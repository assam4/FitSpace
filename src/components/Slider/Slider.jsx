import { useState, useEffect } from 'react'
import './style.css'

export default function Slider({ banners = [] }) {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [onFocus, setOnFocus] = useState(false)

  useEffect(() => {
    if (onFocus || banners.length === 0) {
      return
    }
    const id = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(id)
  }, [onFocus, banners.length])

  if (!banners.length) {
    return null
  }

  return (
    <div
      className="slider_container"
      onMouseEnter={() => setOnFocus(true)}
      onMouseLeave={() => setOnFocus(false)}
    >
      <div className="slider_content">
        <img
          className="slider_banner"
          src={banners[currentBanner].src}
          alt={banners[currentBanner].alt}
        />
      </div>
      <div className="select_points_container">
        {banners.map((elem, i) => (
          <button
            key={i}
            className={`select_point ${currentBanner === i ? 'selected' : ''}`}
            onClick={() => setCurrentBanner(i)}
          />
        ))}
      </div>
    </div>
  )
}

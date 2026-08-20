import { useState, useEffect } from 'react'
import './style.css'

export default function Slider({ components = [] }) {
  const [currentComponent, setCurrentComponent] = useState(0)
  const [onFocus, setOnFocus] = useState(false)

  useEffect(() => {
    if (onFocus || components.length === 0)
      return;
    else {
      const id = setInterval(() => setCurrentBanner((prev) => (prev + 1) % components.length), 5000);
      return () => clearInterval(id);
    }
  }, [onFocus, components.length]);
  return (
    <div className="slider_container" onMouseEnter={() => setOnFocus(true)} onMouseLeave={() => setOnFocus(false)}>
      <div className="slider_content">
        {components[currentComponent]}
      </div>
      <div className="select_points_container">
        {components.map((elem, i) => (
          <button key={i} className={`select_point ${currentComponent === i ? 'selected' : ''}`} onClick={() => setCurrentComponent(i)}/>
        ))}
      </div>
    </div>
  )
}

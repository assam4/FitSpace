import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Controls from './Controls'
import './style.css'

export default function Header({ navigationProps, controlsProps = true }) {
  const [logo, setLogo] = useState(null)

  useEffect(() => {
    axios
      .get('/api/logo')
      .then((res) => setLogo(res.data))
      .catch(() => setLogo(null))
  }, [])

  return (
    <header className="header">
      <div className="header_content">
        <div className="brand_container">
          {logo && <img src={logo.src} alt={logo.alt} className="brand_logo" />}
        </div>
        <div className="navigation_container">
          {navigationProps?.map((item) => (
            <NavLink className="navigation_item" to={item.path} key={item.key}>
              {item.label}
            </NavLink>
          ))}
        </div>
        {controlsProps && <Controls />}
      </div>
    </header>
  )
}

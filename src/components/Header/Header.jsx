import './style.css'
import { NavLink } from 'react-router-dom'
import Controls from './Controls'

export default function Header({ logoProps, navigationProps, controlsProps = true }) {
  return (
    <header className="header">
      <div className="header_content">
        <div className="brand_container">
          <img src={logoProps.src} alt={logoProps.alt} className="brand_logo" />
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

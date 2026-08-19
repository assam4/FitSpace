import './style.css'
import { NavLink } from 'react-router-dom'

export default function Navigation({
    variant,
    items = [],
}) {
    const className = ['navigation_link', variant].filter(Boolean).join(' ')

    return (
        <nav className="navigation_container">
            {items.map((item) => (
                <NavLink
                    key={item.key}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) =>
                        [className, isActive && 'active'].filter(Boolean).join(' ')
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    )
}

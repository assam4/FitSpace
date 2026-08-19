import './style.css'
import Controls from '../../molecules/Controls/Controls'

export default function Header({
  brandComponent,
  navigations,
  button,
  languageToggle,
}) {
  return (
    <header className="header_container">
      {brandComponent && (
        <div className="brand_container">
          {brandComponent}
        </div>
      )}
      {navigations && (
        <div className="navigations_container">
          {navigations}
        </div>
      )}
      {(button || languageToggle) && (
        <div className="controls_container">
          <Controls>
            {button}
            {languageToggle}
          </Controls>
        </div>
      )}
    </header>
  )
}

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { navigation } from './constants'
import Header from './components/organisms/Header/Header'
import Navigation from './components/molecules/Navigation/Navigation'
import StyledIcon from './components/atoms/StyledIcon/StyledIcon'
import StyledButton from './components/atoms/StyledButton/StyledButton'
import LanguageToggle from './components/atoms/LanguageToggle/LanguageToggle'
import Home from './pages/Home'

const logo = {
  src: '/images/brand_logo_vector.png',
  alt: 'Brand Logo',
}

const languages = [
  { src: '/images/languages_en.png', alt: 'English' },
  { src: '/images/languages_ru.png', alt: 'Russian' },
]

function App() {
  return (
    <BrowserRouter>
      <Header
        brandComponent={
          <Link to="/">
            <StyledIcon src={logo.src} alt={logo.alt} fit="fill" />
          </Link>
        }
        navigations={
          <Navigation variant="with-span" items={navigation} />
        }
        button={
          <StyledButton variant="primary" mode="light" innerText="Book Now" />
        }
        languageToggle={<LanguageToggle languages={languages} />}
      />
      <Routes>
        {navigation.map((item) => (
          <Route key={item.key} path={item.path} element={<Home />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

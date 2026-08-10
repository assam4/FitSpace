import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { logo, navigation } from './constants'
import Header from './components/Header/Header'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header logoProps={logo} navigationProps={navigation} />
      <Routes>
        {navigation.map((item) => (
          <Route key={item.key} path={item.path} element={<Home />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import { languages } from '../../constants'

export default function Controls() {
    const [lang, setLang] = useState(0);
    const toggleLanguage = () => {
        setLang((lang + 1) % languages.length);
    }

    return (
        <div className='controls_container'>
            <button className='order_button'> Book Now </button>
            <div className='language_change_container' onClick={toggleLanguage}>
                <img src={languages[lang]} alt='language' className='language_icon' />
            </div>
        </div>
    )
}
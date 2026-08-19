import { useState } from 'react'
import Container from '../../atoms/Container/Container'
import './style.css'

export default function SpiralledImages({ images = [] }) {
    const [currentActive, setCurrentActive] = useState(-1)

    return (
        <Container className="spiralled_images">
            {images.map((image, index) => (
                <div
                    key={image}
                    className={[
                        'spiralled_image_container',
                        currentActive === index && 'active',
                    ].filter(Boolean).join(' ')}
                    onMouseEnter={() => setCurrentActive(index)}
                    onMouseLeave={() => setCurrentActive(-1)}
                >
                    <img src={image} alt="spiralled image" className="spiralled_image_image" />
                </div>
            ))}
        </Container>
    )
}

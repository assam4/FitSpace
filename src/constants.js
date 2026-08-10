import LogoImage from '../utils/images/brand_logo_vector.png'
import languageEnIcon from '../utils/images/languages_en.png'
import languageRuIcon from '../utils/images/languages_ru.png'
import banner1 from '../utils/event_banners/crossfit.png'
import banner2 from '../utils/event_banners/membership.jpeg'
import banner3 from '../utils/event_banners/national_day.jpg'
import content1 from '../utils/images/content_photo_1.jpg'
import content2 from '../utils/images/content_photo_2.jpg'
import bg_1 from '../utils/images/strong_bg.png'
import bg_2 from '../utils/images/start_bg.png'



export const logo = {
  src: LogoImage,
  alt: 'Brand Logo',
}

export const navigation = [
  { label: 'Home', key: 'home', path: '/' },
  { label: 'Pages', key: 'pages', path: '/pages' },
  { label: 'Portfolio', key: 'portfolio', path: '/portfolio' },
  { label: 'Blog', key: 'blog', path: '/blog' },
  { label: 'Shop', key: 'shop', path: '/shop' },
]

export const languages = [languageEnIcon, languageRuIcon]

export const banners = [
  {src: banner1, alt: 'Crossfit'},
  {src: banner2, alt: 'Membership'},
  {src: banner3, alt: 'National Day'},
]

const splitSectionsContentImgs  = [
  {src: content1, alt: 'Content 1'},
  {src: content2, alt: 'Content 2'},
]

export const splitSections = [
  {
    id: 1,
    imageInRight: true,
    leftContent: {
      backgroundText: bg_1,
      title: 'Be You, Just stronger!\n Power is in you',
      description: 'Unum solum justo ex ius. Pro cu probo laboramus\n eius insolens euripidis te eos, ut agam tota.',
    },
    rightContent: splitSectionsContentImgs[0],
  },
  { 
    id: 2,
    imageInRight: false,
    leftContent: splitSectionsContentImgs[1],
    rightContent: {
      backgroundText: bg_2,
      title: 'Be You, Just stronger!\n Power is in you',
      description: 'Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.',
    },
  }
]
export const logo = {
  src: '/images/brand_logo_vector.png',
  alt: 'Brand Logo',
}

export const navigation = [
  { label: 'Home', key: 'home', path: '/' },
  { label: 'Pages', key: 'pages', path: '/pages' },
  { label: 'Portfolio', key: 'portfolio', path: '/portfolio' },
  { label: 'Blog', key: 'blog', path: '/blog' },
  { label: 'Shop', key: 'shop', path: '/shop' },
]

export const languages = [
  '/images/languages_en.png',
  '/images/languages_ru.png',
]

export const banners = [
  { src: '/event_banners/crossfit.png', alt: 'Crossfit' },
  { src: '/event_banners/membership.jpeg', alt: 'Membership' },
  { src: '/event_banners/national_day.jpg', alt: 'National Day' },
]

const splitSectionsContentImgs = [
  { src: '/images/content_photo_1.jpg', alt: 'Content 1' },
  { src: '/images/content_photo_2.jpg', alt: 'Content 2' },
]

export const splitSections = [
  {
    id: 1,
    imageInRight: true,
    leftContent: {
      backgroundText: '/images/strong_bg.png',
      title: 'Be You, Just stronger!\n Power is in you',
      description:
        'Unum solum justo ex ius. Pro cu probo laboramus\n eius insolens euripidis te eos, ut agam tota.',
    },
    rightContent: splitSectionsContentImgs[0],
  },
  {
    id: 2,
    imageInRight: false,
    leftContent: splitSectionsContentImgs[1],
    rightContent: {
      backgroundText: '/images/start_bg.png',
      title: 'Be You, Just stronger!\n Power is in you',
      description:
        'Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.',
    },
  },
]

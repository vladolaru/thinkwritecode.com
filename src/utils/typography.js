import Typography from 'typography'
import Wordpress2015 from 'typography-theme-wordpress-2015'

Wordpress2015.overrideThemeStyles = () => ({
  a: {
    color: 'hsl(23.3, 99%, 55%)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'a.anchor': {
    boxShadow: 'none',
  },
  'p code': {
    fontSize: '1.1rem'
  },
  'li code': {
    fontSize: '1rem'
  },
})

delete Wordpress2015.googleFonts

Wordpress2015.scaleRatio = 2.45 // was 2.
const typography = new Typography(Wordpress2015)


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

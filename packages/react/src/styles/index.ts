import {
  colors,
  fontWeights,
  fontSizes,
  fonts,
  lineHeights,
  radii,
  space,
} from '@psilva1982-ds/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    fonts,
    radii,
    space,
  },
})

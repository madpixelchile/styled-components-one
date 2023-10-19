
import { createGlobalStyle } from 'styled-components'
import fontConfig from '../../styles/themes/fontConfig'
import colors from '../../styles/themes/colors'
import StyledReset from './Reset'

export const StyledThemeProvider = createGlobalStyle`

    ${StyledReset}

    body {
        font-family: ${fontConfig['font-family-base']};
        text-rendering: geometricPrecision;
        position: relative;
        background-color: $greyscale-white;
        color: ${colors['text-body']};
        width: 100%;
        height: 100%;
        font-size: ${fontConfig['font-size-base']};
        /* font-weight: $font-weight-regular; */
        line-height: ${fontConfig['line-height-base']};
    }
  
`
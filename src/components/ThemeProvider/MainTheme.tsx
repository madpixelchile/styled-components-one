

import { ThemeProvider } from 'styled-components'
import { StyledThemeProvider } from './StyledThemeProvider'

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

export const MainTheme = ({ children = null }:Props) => {
  return (
    <>
        <ThemeProvider theme={{}}>
            <StyledThemeProvider/>
            { children }
        </ThemeProvider>
    </>
  )
}

export default  MainTheme;



import type { AppProps } from 'next/app'
import styled ,{ ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/globals'
import { defaultTheme } from '../../styles/themes/default'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const AlignTop = styled.div`
  width: 100%;
  height: 90px;
`;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
       <AlignTop />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp

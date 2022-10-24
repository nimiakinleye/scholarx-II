import { GlobalStyle } from '../styles/globals'
import type { AppProps } from 'next/app'
import "aos/dist/aos.css"
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
      once: true,
    });
  }, [])
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

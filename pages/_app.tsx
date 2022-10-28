import { GlobalStyle } from '../styles/globals'
import type { AppProps } from 'next/app'
import "aos/dist/aos.css"
import AOS from 'aos';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

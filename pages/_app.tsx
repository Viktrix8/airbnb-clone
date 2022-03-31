import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import type { AppProps } from 'next/app'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import 'mapbox-gl/dist/mapbox-gl.css'

import '../styles/globals.css'

const progress = new ProgressBar({
  size: 4,
  color: '#fe595e',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

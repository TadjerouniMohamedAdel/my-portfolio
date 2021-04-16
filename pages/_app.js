import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion';
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps,router }) {
  return(
      <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route}/>
      </AnimatePresence> 
  ) 
}

export default appWithTranslation(MyApp)

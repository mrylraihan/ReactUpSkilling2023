import Layout from '@/components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const test= 'test'
  return(
    <Layout>
    <Component {...pageProps} test={test}/>
  </Layout>
    ) 
}

export default MyApp

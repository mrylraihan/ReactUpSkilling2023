import Navbar from '@/components/Navbar/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Navbar><Component {...pageProps} /></Navbar>
}

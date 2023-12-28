import Navbar from '@/components/Layouts/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Navbar> <Component {...pageProps} /></Navbar>
}

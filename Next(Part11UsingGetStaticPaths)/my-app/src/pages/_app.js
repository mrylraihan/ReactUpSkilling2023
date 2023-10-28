import Nav from '@/components/Navbar/Nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Nav><Component {...pageProps} /></Nav>
}

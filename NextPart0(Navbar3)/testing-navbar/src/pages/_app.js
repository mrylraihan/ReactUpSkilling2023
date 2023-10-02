import Nav from '@/Layouts/Nav';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <Nav><Component {...pageProps} /></Nav>
}

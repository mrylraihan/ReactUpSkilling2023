import "@/styles/globals.css";
import Navbar from '../components/layout/Navbar'
export default function App({ Component, pageProps }) {
 
  return <Navbar><Component {...pageProps} /></Navbar>;
}

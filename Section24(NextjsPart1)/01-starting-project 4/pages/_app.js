import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let name = 'wallie'
  const [arr, setArr] = useState([1, 2, 3, 4, 5])
  return <Component {...pageProps} name={name} arr={arr}/>
}

export default MyApp

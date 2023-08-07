import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [name, setName] = useState('Wallie')
  return <Component {...pageProps} name={name} setName={setName}/>
}

export default MyApp

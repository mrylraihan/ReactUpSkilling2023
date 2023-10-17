import '@/styles/globals.css'
import { useState } from 'react'

const Dummy_Data = [
  {id:0,name:'Heshow'},
  {id:1,name:'Wallie'},
  {id:2,name:'Meshia'},
]

export default function App({ Component, pageProps }) {
  const [people, setPeople] = useState(Dummy_Data)
  return <Component {...pageProps} people={people} setPeople={setPeople}/>
}

import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'

const people = [
  {
    id: 0, name: "Wallie", hobbies: [
      { id: 0, hobby: 'Code' }, {id: 1, hobby: "Cook" }
    ]
  },
  {
    id: 1, name: "Heshow", hobbies: [
      { id: 0, hobby: 'Anime'},{ id: 1, hobby: "Cook" }
    ]
  },
  {
    id: 2, name: "Meshia", hobbies: [
      { id: 0, hobby: 'play ball'},{id: 1, hobby: "photography" }
    ]
  },
]
export default function App({ Component, pageProps }) {
  return <Navbar><Component {...pageProps} people={people} /></Navbar>
}

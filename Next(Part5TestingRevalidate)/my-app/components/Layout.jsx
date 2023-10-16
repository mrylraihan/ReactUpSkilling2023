import { useRouter } from 'next/router'
import React from 'react'

function Layout(props) {
    const router = useRouter()
    const goToGetStatic = () =>{
        router.push('/')
    }
    const goToActionThunk = () =>{
        router.push('/test')
    }
  return (
    <div>
        <button onClick={goToGetStatic}>Get static Props</button>
        <button onClick={goToActionThunk}>test</button>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Layout
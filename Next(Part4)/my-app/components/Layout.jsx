import { useRouter } from 'next/router'
import React from 'react'

function Layout(props) {
    const router = useRouter()
    const goToGetStatic = () =>{
        router.push('/')
    }
    const goToActionThunk = () =>{
        router.push('/testAction')
    }
  return (
    <div>
        <button onClick={goToGetStatic}>Get static Props</button>
        <button onClick={goToActionThunk}>Action Creator Thunk</button>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Layout
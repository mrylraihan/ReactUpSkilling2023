import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import ListData from '../store/ListData'
function Level1() {
    const nameRef = useRef()
    const [list, setList] = useRecoilState(ListData)

    const addToAtom = (name)=>{
        setList(prev=>{
            return [...prev, {name}]
        })
    }

    const submitHandler = e =>{
        e.preventDefault()
        let name = nameRef.current.value
        if(name.trim().length>1){
            addToAtom(name)
        }
        nameRef.current.value = ''
    }
    console.log(list)
  return (
    <div className='app'>
          <h1>Level1</h1>
          <form onSubmit={submitHandler}>
            <div>Names: 
                <label>
                    <input type="text" ref={nameRef}/>
                </label>
            </div>
            <button type='submit'>submit</button>
          </form>
    </div>
  )
}

export default Level1
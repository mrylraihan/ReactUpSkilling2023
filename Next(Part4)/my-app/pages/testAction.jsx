import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataActions, giveMeData } from '@/store'
function testAction(props) {
    const state = useSelector(state=>state.dataSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(giveMeData())
    },[])
    console.log(state)
  console.log(props)// {name: "Wallie"}

    const deleteData = (id)=>{
      dispatch(dataActions.deleteData(id))
    }
  return (
    <div className='app'>
          <h1>testAction Creater Thunk</h1>
          <ul>
          {state.data.length>0 && state.data.map((ele)=>{
              return (<li key={ele.title} onClick={deleteData.bind(this, ele.id)}>{ele.title}</li>)
            })}
            </ul>
    </div>
  )
}

export default testAction

export const getStaticProps = () =>{
  return {
    props:{
      name:"Wallie"
    }
  }
}
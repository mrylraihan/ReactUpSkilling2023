import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, dataAction } from '../store/dataSlice'

function Data() {
    const data = useSelector(state=>state.dataSlice)
    const dispatch = useDispatch()
    console.log(data)
    useEffect(()=>{
        dispatch(fetchData())
    },[])

    const removeData = e =>{
        console.log(+e.target.id)
        dispatch(dataAction.removeData(+e.target.id))
    }

  return (
    <div>
        <h1>Data</h1>
        <ul>
              {data.map(ele => <li key={ele.title} id={ele.id} onClick={removeData}>{ele.title}</li>)}
        </ul>
    </div>
  )
}

export default Data
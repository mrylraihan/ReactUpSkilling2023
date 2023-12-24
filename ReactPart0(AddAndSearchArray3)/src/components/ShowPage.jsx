import React, { useEffect, useState } from 'react'


function ShowPage({ search, peopleList }) {
    const [list, setList] = useState([])
    useEffect(()=>{
        if(search){
            setList(peopleList.filter(ele => ele.toLowerCase() == search.toLowerCase()))
        }else{
            setList(peopleList)
        }
    }, [search])
  return (
    <div className='app'>
        {list && list.map((ele, idx)=>{
            return <h5 key={idx}>{ele}</h5>
        })}
    </div>
  )
}

export default ShowPage
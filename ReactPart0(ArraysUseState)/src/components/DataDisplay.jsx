import React from 'react'

function DataDisplay(props) {

    const moveToOtherArr = (id)=>{
        let movedElement; 
        props.setData(prev=>{
            movedElement = prev.find(ele=>ele.id === id)

          props.setEmptyData(prev => {
            return [...prev, movedElement]
          })

            return prev.filter(ele=>ele.id !== id)//will return all data except element with matching id
        })

      
        
    }

  return (
    <div className='app'>
          <h1>DataDisplay</h1>
          <ul>
            {props.data.map(ele=><li key={ele.id} onClick={()=>moveToOtherArr(ele.id)}>{ele.name}</li>)}
          </ul>
    </div>
  )
}

export default DataDisplay
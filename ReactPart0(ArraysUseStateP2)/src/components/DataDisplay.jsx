import React from 'react'

function DataDisplay(props) {

   const removeElements = id =>{
    
    props.setData(prev=>{
      let removedElement = prev.list.find((item) =>item.id === id)
      let newArrs = prev.list.filter((item) => item.id !== id)
      return { ...prev, list: newArrs, removedList:[...prev.removedList, removedElement] }
    })
   }

  return (
    <div className='app'>
          <h1>DataDisplay</h1>
          <ul>
            {props.list.map(ele=><li key={ele.id} onClick={removeElements.bind(this, ele.id)}>{ele.name}</li>)}
          </ul>
    </div>
  )
}

export default DataDisplay
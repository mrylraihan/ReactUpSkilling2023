import React from 'react'

function RemovedData(props) {

    const moveToOtherArr = (id) => {
        let movedElement;
        props.setEmptyData(prev => {
            movedElement = prev.find(ele => ele.id === id)
            props.setData(prev => {
                console.log(movedElement)
                return [...prev, movedElement]
            })

            return prev.filter(ele => ele.id !== id)//will return all data except element with matching id
        })

      
    }
  return (
    <div className='app'>
          <h1>RemovedData</h1>
          <ul>
              {props.emptyData.map(ele =>  <li key={ele.id} onClick={() => moveToOtherArr(ele.id)}>{ele.name}</li>)}
          </ul>
    </div>
  )
}

export default RemovedData
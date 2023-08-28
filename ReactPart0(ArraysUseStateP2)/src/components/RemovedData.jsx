import React from 'react'

function RemovedData(props) {

    const removeElements = id => {

        props.setData(prev => {
            let removedElement = prev.removedList.find((item) => item.id === id)
            let newArrs = prev.removedList.filter((item) => item.id !== id)
            return { ...prev, removedList: newArrs, list: [...prev.list, removedElement] }
        })
    }
    return (
        <div className='app'>
            <h1>RemovedData</h1>
                <ul>
                    {props.removedList.map(ele => <li key={ele.id} onClick={removeElements.bind(this, ele.id)}>{ele.name}</li>)}
                </ul>
        </div>
    )
}

export default RemovedData
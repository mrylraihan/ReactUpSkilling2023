import React from 'react'

const DUMMY_DATA = [
    { id: 0, price: 10, name: 'chair' },
    { id: 1, price: 20, name: 'table' },
    { id: 2, price: 15, name: 'rug' },
]
function Items(props) {

const addItem = (item) =>{
    props.dispatch({type:"add", item})
}
const removeItem = (item) =>{
    props.dispatch({type:"minus", item})
}
  return (
    <div className='app'>
        <h1>Items</h1>
        <ul>
        {DUMMY_DATA.map(ele=>{
            return <li key={ele.id}>
                <div>
                    <h3>{ele.name}</h3>
                    <button onClick={addItem.bind(this, ele)}>Add</button>
                    <button onClick={removeItem.bind(this, ele)}>remove</button>
                </div>
            </li>
        })}
        </ul>
    </div>
  )
}

export default Items
import React, { useState } from 'react'

function AddList(props) {
    const Dummy_Item = { name: '', body: '', id: '' }
    const [item, setItem] = useState(Dummy_Item)

    const getName = e =>{
        setItem(prev=>{
            return {...prev,name:e.target.value}
        })
    }
    const getBody = e =>{
        setItem(prev=>{
            return {...prev,body:e.target.value}
        })
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        props.setList(prev=>{
            return [...prev,{...item,id:prev.length} ]
        })
        setItem(Dummy_Item)
    }
console.log(props.list)
console.log(item)
console.log(Dummy_Item)
  return (
    <div className='app'>
          <h2>AddList</h2>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>Name:
                    <input type="text" value={item.name} onChange={getName}/>
                </label>
            </div>
            <div>
                <label>Body:
                    <input type="text" value={item.body} onChange={getBody}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default AddList
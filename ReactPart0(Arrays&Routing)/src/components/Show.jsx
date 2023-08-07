import React ,{useState} from 'react'
import AddForm from './AddForm'
import {useNavigate} from 'react-router-dom'

function Show({ people, addHandler, editHandler }) {
    const [showEdit, setEdit] = useState(false)
    const nav = useNavigate()
  return (
    <div className='app'>
        <h1>Show</h1>
        {people.map((ele, idx)=>{
            return <div key={idx}>
                <h3 onClick={nav.bind(this,`${idx}`)}>{ele.name}</h3>
                {showEdit && <AddForm addHandler={addHandler} editHandler={editHandler} option={'edit'} idx={idx} setEdit={setEdit}/>}
                <button onClick={setEdit.bind(this,!showEdit)}>edit</button>
            </div>
        })}
    </div>
  )
}

export default Show
import React, { useState } from 'react'
import Modal from 'react-modal'
function TestModal2() {
    const [showModal, setShowModal] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [name, setName] = useState('')

    const toggleModal = ()=> setShowModal(!showModal)
    const getInputValue = (e)=>{
      setInputValue(e.target.value)
    }
    const submitData = () =>{
      setName(inputValue)
      setInputValue('')
      toggleModal()
    }
  return (
    <div className='app'>
          <h1>TestModal2</h1>
          {name && <h3>{name}</h3>}
          <button onClick={toggleModal}>Show modal</button>
          <Modal isOpen={showModal} onRequestClose={toggleModal}>
            <div>
              <label>type your Name:
            <input type="text" onChange={getInputValue}/>
              </label>
              <button onClick={submitData}>Submit</button>
            </div>
          </Modal>
    </div>
  )
}

export default TestModal2
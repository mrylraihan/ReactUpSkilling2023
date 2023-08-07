import React, { useState } from 'react'
import Modal from 'react-modal'
function TestModal() {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = ()=> setShowModal(!showModal)


  return (
    <div className='app'>
          <h1>TestModal</h1>
          <button onClick={toggleModal}>Show modal</button>
          <Modal isOpen={showModal} onRequestClose={toggleModal}
          style={
            {overlay:{
                backgroundColor: 'grey',
            },
            content:{
                color:'green'
            }
        }
          }
          >
            <p>Second modal with no button</p>
          </Modal>
    </div>
  )
}

export default TestModal
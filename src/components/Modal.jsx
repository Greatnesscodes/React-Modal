import React, { useState } from 'react'

const modal = () => {

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal);
    }
  return (
    <div className='body'>
        <button onClick={toggleModal} className='open'>
            Open Modal
        </button>
        {showModal && (
            <div className='modal'>
                <div className='modal-content'>
                <button onClick={toggleModal} className='close'>X</button>
                    <h2> Modal Title</h2>
                    <p> Modal Content</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium natus fugit est pariatur explicabo officiis quasi quod ut, voluptates tempora illum modi nemo velit vel temporibus asperiores. Aperiam, temporibus numquam!
                    </p>
                    
                </div>
            </div>
        )}
    </div>
  )
}

export default modal
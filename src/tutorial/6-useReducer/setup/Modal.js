import React, { useEffect } from "react"

<<<<<<< HEAD
const Modal = ({ modalContent }) => {
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  )
}

=======
const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  }, [closeModal])

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  )
}

>>>>>>> master
export default Modal

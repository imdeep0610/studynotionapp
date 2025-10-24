import React from 'react'
import IconBtn from './IconBtn'

const ConfirmationModal = ({modalData}) => {
  return (
    <div>
        <div>
            <p>{modalData.text1}</p>
            <p>{modalData.text2}</p>
            <div>
                <IconBtn
                onclick={}/>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal

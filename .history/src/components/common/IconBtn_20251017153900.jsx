import React from 'react'

const IconBtn = ({
    text,
    onClick,
    children,
    disable,
    outline=false,
    customClasses,
    type
}) => {
  return (
    <button>
       {
        children ? () : ()
       }
    </button>
  )
}

export default IconBtn

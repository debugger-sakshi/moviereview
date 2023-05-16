import React from 'react'

const FormContainer = ({children}) => {
  return (
    <div className='fixed dark:bg-primary bg-white inset-0 -z-20 flex justify-center items-center'>
      {children}
    </div>
  )
}

export default FormContainer

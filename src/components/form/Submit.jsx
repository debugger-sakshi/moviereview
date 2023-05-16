import React from 'react'

const Submit = ({value}) => {
  return (
    <input className='dark:text-secondary text-white dark:bg-white bg-secondary rounded w-full hover:bg-opacity-90 p-1 text-lg font-semibold cursor-pointer' type='submit' value={value}/>
  )
}

export default Submit

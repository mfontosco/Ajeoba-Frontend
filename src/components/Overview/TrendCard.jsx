import React from 'react'
import {FaUserGraduate} from 'react-icons/fa'

const AdminCards = ({title,num}) => {
  return (
    <div className='md:w-full h-28 border border-t-2 w-full py-4 px-4 max-w-sm md:max-w-xl'>
      <div className='ml-4 flex flex-col items-center justify-center'>
        <h3 className='md:text-xl md:font-medium text-[#C5C7CD] text-center'>{title}</h3>
        <h4 className='md:text-3xl text-center'>{num}</h4>
      </div>
    </div>
  )
}

export default AdminCards

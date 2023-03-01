import React from 'react'
import {FaUserGraduate} from 'react-icons/fa'

const AdminCards = ({title,num}) => {
  return (
    <div className='flex rounded-lg items-center justify-center md:ml-4 mb-4 w-full md:w-52 h-28 border-2 shadow-xs py-4 px-6 max-w-sm md:max-w-xl'>

      <div className='ml-4 flex flex-col items-center justify-center'>
        <h3 className='md:text-lg text-sm text-[#C5C7CD]'>{title}</h3>
        <h4 className='md:text-3xl md:font-bold '>{num}</h4>
      </div>
    </div>
  )
}

export default AdminCards

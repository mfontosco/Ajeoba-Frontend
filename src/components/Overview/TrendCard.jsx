import React from 'react'
import {FaUserGraduate} from 'react-icons/fa'

const AdminCards = ({title,num}) => {
  return (
    <div className='md:w-full h-18 border border-t-2 w-full py-4 px-4 max-w-sm md:max-w-xl'>
      <div className='ml-4 flex flex-col items-center justify-center'>
        <h3 className='md:text-md md:font-medium text-[#C5C7CD] text-center whitespace-nowrap '>{title}</h3>
        <h4 className='md:text-xl text-center'>{num}</h4>
      </div>
    </div>
  )
}

export default AdminCards

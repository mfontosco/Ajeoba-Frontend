import React from 'react'
import {BsThreeDotsVertical,BsSortUp} from 'react-icons/bs'
import {MdFilterAlt} from 'react-icons/md'
import { ticketsData } from '../Data/ticketsData'



const Tickets = () => {
  return (
     <div className="w-full mt-0 lg:mt-14  lg:px-6 px-2   ">
      <div className='grid grid-cols-2 px-2 w-full mt-2 lg:mt-10 items-center h-fit'> 
        <div> 
          <h1 className='font-semibold text-2xl'> Tickets </h1>
        </div>

        <div className='flex justify-end  h-fit items-center  space-x-5'>
           <img className='h-5' src='./images/search.png' alt='notifications' />
          <img className='h-6' src='./images/notify.png' alt='notifications' />
          <img className='h-6' src='./images/vertical.png' alt='' />
          <h1 className='hidden lg:block font-semibold'> Jones Ferdinand </h1>
          <img className=' h-8' src='./images/man.png' alt=''/>
        </div>
      </div>


<section class="py-1 bg-blueGray-50">
<div class="w-full  mb-10 xl:mb-0  mx-auto mt-8 lg:mt-20">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex  justify-between  items-center mb-10 mt-6">
        <div class="relative w-full px-2 lg:px-6 max-w-full  ">
          <h3 class="font-semibold text-lg text-blueGray-700"> All tickets</h3>
        </div>
        <div class="relative w-full space-x-10 px-4 max-w-full flex flex-1 text-right">
          <div className='hover:cursor-pointer flex space-x-2 items-center '> 
               <BsSortUp className='text-[#C5C7CD]'/>
                <h1>   Sort </h1>
            </div>

            <div className='flex hover:cursor-pointer space-x-2 items-center '> 
               <MdFilterAlt className='text-[#C5C7CD]'/>
                <h1> Filter </h1>
            </div>


             
         
          
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr >
            <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-2 text-sm  border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 lg:px-10 ">
                          Ticket details
                        </th>
          <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  px-6 sm:px-0">
                          Customer name
                        </th>
           <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                          Date
                        </th>
          <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                          Priority
                        </th>

                        <th class=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 border-t-0 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          
                        </th>

                        
          </tr>
        </thead>

      { ticketsData.map(item=> (
         <tbody key={item.id}  className=' h-[6rem] border-b-2'>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer' >
            <th class="  whitespace-nowrap px-6 lg:px-10 w-fit">
              <div className='flex items-center  text-sm space-x-3  lg:space-x-5'>
                  <img className='h-10 w-10 rounded-full' src={item.image} alt=''/>

                  <div className='flex text-xs lg:text-sm flex-col items-center '> 
                    <h1 className='font-semibold'> {item.comments} </h1>
                    <p className='  mr-auto font-normal text-[#C5C7CD]'> {item.updated} </p>
                  </div>
              </div>
            </th>

            <td class="whitespace-nowrap lg:text-sm   text-xs px-6 sm:px-0">
              <div> 
                <h1 className='font-semibold '> {item.name} </h1>
                <p className='text-[#C5C7CD]'> {item.date} </p>
              </div>
            </td>
            <td class="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
              <div> 
                <h1 className='font-semibold flex-wrap'> {item.regdate}</h1>
                <p className='text-[#C5C7CD]'> {item.time} </p>
              </div>
            </td>
            <td class="whitespace-nowrap text-xs px-6 lg:text-sm sm:px-0">
              {item.priority !== null && (
        <div className=" lg:text-sm text-xs uppercase ">
          {item.priority < 5 ? (
            <p className="bg-yellow-500 text-white w-fit px-2  rounded-xl">Low</p>
          ) : item.priority >= 5 && item.priority <= 7 ? (
            <p className="bg-green-500 text-white w-fit px-2 rounded-xl">Normal</p>
          ) : (
            <p className="bg-red-600 text-white w-fit px-2 rounded-xl">High</p>
          )}
        </div>
      )}
            </td>

            <td class="whitespace-nowrap px-6 sm:px-0">
              <BsThreeDotsVertical/>
            </td>
          </tr>
         
        </tbody>
      )) }

      

      </table>
    </div>
  </div>
</div>

</section>

      
    </div>
  )
}

export default Tickets
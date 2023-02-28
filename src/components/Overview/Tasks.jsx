

const Tasks =()=>{
    return (
        <table class="items-center bg-transparent rounded-sm w-full border-collapse ">
        <thead>
        <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-23 ml-16  border-0' >
            <th className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="w-full lg:px-10 ">
              <h2 className="w-4 h-4 ">Tasks</h2>
                <h5 className='w-4 h-4 text-xs font-thin mt-2'> Today  </h5>
                
              </div>
            </th>
            <th className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
            <a href="#" className="text-blue-300 font-thin mr-4">view all</a>
            </th>
          </tr>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-22 mb-2 ml-16 border-t-0' >
            <th className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="w-full lg:px-10 ">
              <h2 className="w-4 h-4 font-thin ">Create New tasks</h2>
                
                
              </div>
            </th>
            <th className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
              <div className=" px-3 mt-4">
                <button className='rounded-md text-right  border bg-gray-500 py-1 px-2 shadow-sm text-xs'> + </button>
              </div>
            </th>
          </tr>
        </thead>


        <tbody className=' h-[6rem] border-b-2'>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer  h-14 ml-16 border border-solid border-blueGray-100' >
            <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="flex items-center lg:px-10">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100"></input>
                <p className='ml-2'> Finish Ticket Update  </p>
              </div>
            </td>
            <td className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
              <div className="px-3">
                <button className='rounded-md text-right  border bg-yellow-500 py-1 px-2 shadow-sm text-xs'> URGENT</button>
              </div>
            </td>
          </tr>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-14 ml-16 border border-solid border-blueGray-100' >
            <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="flex items-center lg:px-10">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded-xl border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <p className='ml-2'>Create New Ticket Example </p>
              </div>
            </td>
            <td className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
              <div className="px-3">
                <button className='rounded-md   border bg-green-500 py-1 px-2 shadow-sm text-xs text-right'> NEW </button>
              </div>
            </td>
          </tr>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-14 ml-16  border-b-0 ' >
            <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="flex items-center lg:px-10">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100"></input>
                <p className='ml-2'> Update ticket report</p>
              </div>
            </td>
            <td className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
              <div className="px-3">
                <button className='rounded-md border text-right  py-1 px-2 shadow-sm text-xs'> DEFAULT </button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>
    )
}

export default Tasks
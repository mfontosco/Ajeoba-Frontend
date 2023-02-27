

const Tasks =()=>{
    return (
        <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr >
            <th class=" bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-2 text-sm  border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 lg:px-10 ">
              <h2 className='mb-4 font-bold'>Tasks</h2>
              <h5 className='text-xs'>Today</h5>
            </th>
            <th class=" bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  px-6 sm:px-0">
              <a href='#' className="text-blue-500">View all</a>
            </th>
          </tr>
          <tr >
            <th className=" bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-2 text-sm  border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 lg:px-10 ">
              <h2 className='mb-4 font-bold text-[#C5C7CD] '>Create new tasks</h2>
            </th>
            <th class=" bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  px-6 sm:px-0">
              <button className="py-2 px-2 rounded shadow font-medium flex justify-center text-md items-center mb-2  font-bold text-[#C5C7CD]">+</button>
            </th>
          </tr>
        </thead>


        <tbody className=' h-[6rem] border-b-2'>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-12 ml-16 border border-solid border-blueGray-100' >
            <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="flex items-center lg:px-10">
              <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100"></input>
                <p className='ml-2'> Finish Ticket Update  </p>
              </div>
            </td>
            <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
              <div>
                <button className='rounded-md border bg-yellow-500 py-1 px-2 shadow-sm'> URGENT</button>
              </div>
            </td>
          </tr>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-12 ml-16 border border-solid border-blueGray-100' >
            <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="flex items-center lg:px-10">
              <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100"></input>
                <p className='ml-2'>Create New Ticket Example </p>
              </div>
            </td>
            <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
              <div>
                <button className='rounded-md border bg-green-500 py-1 px-2 shadow-sm'> NEW </button>
              </div>
            </td>
          </tr>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-12 ml-16 border border-solid border-blueGray-100' >
            <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
              <div className="flex items-center lg:px-10">
              <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100"></input>
                <p className='ml-2'> Update ticket report</p>
              </div>
            </td>
            <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
              <div>
                <button className='rounded-md border  py-1 px-2 shadow-sm'> DEFAULT </button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>
    )
}

export default Tasks
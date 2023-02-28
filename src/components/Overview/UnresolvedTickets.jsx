

const UnresolvedTickets =()=>{
    return(
      <table class="items-center bg-transparent rounded-sm w-full border-collapse ">
      <thead>
      <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer mb-2 h-23 ml-16  border-0' >
          <th className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
            <div className="w-full lg:px-10 ">
            <h2 className="w-4 h-4 ">Unresolved tickets</h2>
              <h5 className='w-4 h-4 text-xs font-thin mt-2'> Group:<span className="text-xs text-black font-normal text-xs">Support</span> </h5>
              
            </div>
          </th>
          <th className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
            <a href="#" className="text-blue-300 font-thin mr-2">view details</a>
          </th>
        </tr>
        <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer mt-2  h-22 mb-3 ml-16 border-t-0' >
          <th className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
            <div className="w-full lg:px-10 ">
            <h2 className="w-4 h-4 font-normal ">Waiting on feature request</h2>
            </div>
          </th>
          <th className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
            <div className="font-normal px-3 mt-4">
             4238
            </div>
          </th>
        </tr>
      </thead>


      <tbody className=' h-[6rem] border-b-2'>
        <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer  h-14 ml-16 border border-solid border-blueGray-100' >
          <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
            <div className="flex items-center lg:px-10">
           
              <p className=''> Awaiting customer response  </p>
            </div>
          </td>
          <td className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
            <div className="px-3">
             1005
            </div>
          </td>
        </tr>
        <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-14 ml-16 border border-solid border-blueGray-100' >
          <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
            <div className="flex items-center lg:px-10">
           
              <p className=''>Awaiting Developer Fix </p>
            </div>
          </td>
          <td className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
            <div className="px-3">
             914
            </div>
          </td>
        </tr>
        <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer h-14 ml-16 py-3  border-0 ' >
          <td className="whitespace-nowrap lg:text-sm   text-xs px-6 sm:px-0">
            <div className="flex items-center lg:px-10">
              <p className=''>Pending</p>
            </div>
          </td>
          <td className="whitespace-nowrap text-right text-xs lg:text-sm px-6 sm:px-0">
            <div className="px-3">
             281
            </div>
          </td>
        </tr>
      </tbody>

    </table>

    )


}

export default UnresolvedTickets;
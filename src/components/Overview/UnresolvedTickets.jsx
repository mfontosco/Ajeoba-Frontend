

const UnresolvedTickets =()=>{
    return(
        <table class="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr >
                <th className=" bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-2 text-sm  border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  lg:px-10 ">
                  <h4 className="mb-2"> Unresolved tickets</h4>
                  <h2 ><span className="text-[#C5C7CD]">Group:</span>Support</h2>
                </th>
                <th className=" bg-blueGray-50  align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  px-6 sm:px-0">
                  <a href='#' className="mb-2 text-blue-500">View details</a>
                </th>
              </tr>
            </thead>


            <tbody className=' h-[6rem] border-b-2'>
              <tr className='lg:px-10 px-3 hover:bg-[#F7F8FC] hover:cursor-pointer border border-solid border-blueGray-100  ml-16' >
                <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
                  <div>
                    <p className='lg:px-10 '> Waiting on Feature Request </p>
                  </div>
                </td>
                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className='py-3 '> 4321 </p>
                  </div>
                </td>
              </tr>
              <tr className='hover:bg-[#F7F8FC]  ml-16 border border-solid border-blueGray-100 hover:cursor-pointer' >
                <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
                  <div>
                    <p className='py-3 px-3 lg:px-10'>Awaiting Customer Response </p>
                  </div>
                </td>
                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className=''> 1005 </p>
                  </div>
                </td>
              </tr>
              <tr className='hover:bg-[#F7F8FC]  ml-16 border border-solid border-blueGray-100 hover:cursor-pointer' >
                <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
                  <div>
                    <p className='py-3 px-3 lg:px-10'> Awaiting developer fix </p>
                  </div>
                </td>
                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className=''> 914 </p>
                  </div>
                </td>
              </tr>
              <tr className='hover:bg-[#F7F8FC] border-b-none  ml-16 border border-solid border-blueGray-100 hover:cursor-pointer' >
                <td className="whitespace-nowrap lg:text-sm  text-xs px-6 sm:px-0">
                  <div>
                    <p className='py-3 px-3 lg:px-10'> Waiting on Feature Request </p>
                  </div>
                </td>
                <td className="whitespace-nowrap text-xs lg:text-sm px-6 sm:px-0">
                  <div>
                    <p className=''>281 </p>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
    )


}

export default UnresolvedTickets;
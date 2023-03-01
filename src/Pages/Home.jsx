import React, { useState, useEffect } from 'react';
import AdminCards from '../components/Overview/AdminCards';
import LineChart from '../components/Overview/LineChart'
import TrendCard from '../components/Overview/TrendCard'
import UnresolvedTickets from '../components/Overview/UnresolvedTickets'
import Tasks from '../components/Overview/Tasks'
const Home = () => {
  const [barChartData, setBarData] = useState();
  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22"
    ],
    datasets: [
      {
        label: "Today",
        data: [12,35, 45,47,48,50,55,56,54,50,45,35, 35,37,40,45,48,55,60,],
        backgroundColor: "rgb(239,241,255,0.2)",
        borderColor: "rgb(75,192,192,1)",
        fill:true
      },
      {
        label: "yesterday",
        data: [40,45,46,50,55,50,45,35,30,33,33,33,35,40,10,60,0,10,30,50,60],
        borderColor: ["#742774"],
        fill:false
      },
    ],
  }
  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero:true,
  //      match:{
  //       beginAtZero:true,
  //       type:'linear',
  //      display: true,
  //      position: 'right',
  //      } 
  //     };
    
  // }};
  

  
  return (
    <div className="w-full mt-0 lg:mt-14  lg:px-6 px-2   ">
      <div className='grid grid-cols-2 px-2 w-full mt-2 lg:mt-10 items-center h-fit'>
        <div>
          <h1 className='font-semibold text-2xl'> Overview </h1>
        </div>

        <div className='flex justify-end  h-fit items-center  space-x-5'>
          <img className='h-5' src='./images/search.png' alt='notifications' />
          <img className='h-6' src='./images/notify.png' alt='notifications' />
          <img className='h-6' src='./images/vertical.png' alt='' />
          <h1 className='hidden lg:block font-semibold'> Jones Ferdinand </h1>
          <img className=' h-8' src='./images/man.png' alt='' />
        </div>
      </div>

      <div className='px-4 mt-4 justify-center flex flex-col gap-5 md:flex md:flex-row md:justify-around '>
        <div className='w-full'>
        <AdminCards
          title="Unresolved"
          num="60"
        />
        </div>
        <div className='w-full'>
        <AdminCards
          title="Overdue"
          num=" 16"
        />
        </div>
        
           <div className='w-full'>
           <AdminCards
          title="Open"
          num="43"
        />
           </div>
        
           <div className='w-full'>
           <AdminCards
          title="On-hold"
          num="64"
        />
           </div>
        
      </div>
      <div className="grid grid-cols-8 gap-6 border rounded mt-6 mb-4">
        <div className="col-span-8  md:col-span-6 ">
        <h4>Today's Trend</h4>
        <h6 className="text-[#C5C7CD]">as of 25 May 2019,8:49am</h6>
        <LineChart data={data}  />
        </div>
        <div className=" col-span-8 md:col-span-2 flex flex-col items-center justify-center ">
         <div className='w-full'>
         <TrendCard
            title="Resolved"
            num="449"
          />
          <TrendCard
            title="Received"
            num="426"
          />
         </div>
         <div className='w-full'>
         <TrendCard
            title="Average first response time"
            num="33m"
          />
         </div>
         <div className='w-full'>
         <TrendCard
            title="Resolution with SLA"
            num="3h 8m"
          />
         </div>
         <div className='w-full'>
         <TrendCard
            title="Resolved"
            num="94%"
          />
         </div>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-6  mt-6 mb-4  h-64">
        <div class="block col-span-8 w-auto md:w-full border rounded-sm border-solid border-blueGray-100 overflow-x-auto col-span-8 md:col-span-4 shadow-sm h-64">
          <UnresolvedTickets/>
        </div>
        <div class="block col-span-8 w-auto md:w-full rounded-sm  border border-solid border-blueGray-100 overflow-x-auto col-span-8 md:col-span-4 shadow-sm h-64">
        <Tasks/>
        </div>
      </div>
      
    </div>

  );
};

export default Home;

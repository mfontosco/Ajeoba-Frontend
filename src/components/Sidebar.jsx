import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu2 } from 'react-icons/tb';
import {MdDarkMode} from 'react-icons/md'


import { NavLink, Link } from 'react-router-dom';
import {AiFillPieChart,AiFillSetting} from 'react-icons/ai'
import {HiOutlineTicket} from 'react-icons/hi'
import {FaLightbulb,FaUserTie} from 'react-icons/fa'
import {MdPeople,MdArticle} from 'react-icons/md'
import {SlBadge} from 'react-icons/sl'







const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  
  const activeLink = " text-[#DDE2FF]  transition ease-in duration-300  bg-[#3f3f47]  py-2 border-l-4 ";
  const normalLink = "";


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };




 
  
    return (
      <header className=' lg:w-[18rem]  lg:h-screen'> 
         <div  className="flex flex-col lg:w-fit lg:bg-[#363740]  lg:h-full  lg:pt-8        
              lg:fixed   "> 
          
                    
                    <div className='px-2  md:px-0 ' >
                     
                        
                     </div> 
                     

                     <div    className='lg:flex flex-col   '> 
                       
                        <div className=' px-10 hidden mt-5  lg:flex space-x-4 mb-4 items-center'> 
                          <img src='./images/logo.png' alt='logo'/>
                          <h1 className='text-[#A4A6B3]'> Dashboard Kit </h1>
                        </div>
                         <ul id='nav' className=' text-base   text-[#A4A6B3] hidden   lg:flex flex-col    mt-10 space-y-5   '> 
                                <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold  px-10  flex items-center '> <AiFillPieChart className='mr-3'/> Overview </p>   </NavLink>
                            <NavLink to='/tickets'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <HiOutlineTicket className='mr-3'/> Tickets </p>   </NavLink>
                              <NavLink to='/ideas'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <FaLightbulb className='mr-3'/> Ideas </p>   </NavLink>
                              <NavLink to='/contact'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <MdPeople className='mr-3'/> Contact </p>   </NavLink>

                              <NavLink to='/agents'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'><FaUserTie className='mr-3'/> Agents </p>   </NavLink>
                            
                            <NavLink to='/articles'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <MdArticle className='mr-3'/>Articles </p>   </NavLink>

                            <hr/>

                            <NavLink to='/settings'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'><AiFillSetting className='mr-3'/>Settings </p>   </NavLink>

                            <NavLink to='/subscription'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <SlBadge className='mr-3'/> Subscription </p>   </NavLink>
                             
                          
                            </ul> 
                     </div>


        
            {/* hamburger */} 
            <div    className=' lg:hidden  h-14    w-screen px-4 sm:px-6 flex flex-row-reverse   justify-between  items-center z-10 '> 

          <div> 

                {nav ? <AiOutlineClose onClick={handleNav}  className='  text-2xl sm:text-3xl text-[#363740] items-center  ' /> :   <TbMenu2 onClick={handleNav} className='text-[#363740] text-2xl sm:text-3xl items-center  left-0  duration-50 ' />}

            </div>

            
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-start bg-[#363740]   text-2xl  absolute text-[#000000]  left-0 top-0   w-3/5  mx-auto z-10   duration-300 flex h-full       flex-col' : 'absolute left-[-100%] '}>
              <div > 
                  <div  id='bold'> 
                  <div className='  flex text-base pt-10  px-7  md:hidden space-x-4 mb-4 items-center'> 
                          <img src='./images/logo.png' alt='logo'/>
                          <h1 className='text-[#A4A6B3]'> Dashboard Kit </h1>
                        </div>
                      <ul  className=' lg:hidden text-lg mt-10 font-semibold  flex flex-col space-y-6  text-[#A4A6B3]      '>         
                                 <NavLink to='/'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold  px-10  flex items-center '> <AiFillPieChart className='mr-3'/> Overview </p>   </NavLink>
                            <NavLink to='/tickets'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <HiOutlineTicket className='mr-3'/> Tickets </p>   </NavLink>
                              <NavLink to='/ideas'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <FaLightbulb className='mr-3'/> Ideas </p>   </NavLink>
                              <NavLink to='/contact'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <MdPeople className='mr-3'/> Contact </p>   </NavLink>

                              <NavLink to='/agents'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'><FaUserTie className='mr-3'/> Agents </p>   </NavLink>
                            
                            <NavLink to='/articles'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <MdArticle className='mr-3'/>Articles </p>   </NavLink>

                            <hr/>

                            <NavLink to='/settings'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'><AiFillSetting className='mr-3'/>Settings </p>   </NavLink>

                            <NavLink to='/subscription'  className={({ isActive }) => (isActive ? activeLink : normalLink)}    >  <p className=' hover:text-primarygreen mt-1 hover:cursor-pointer transition  hover:text-primaryblue duration-200 hover:text-semibold px-10 flex items-center'> <SlBadge className='mr-3'/> Subscription </p>   </NavLink>
                             
                          
                               
                            
                            </ul>
                  </div>

                  
        </div>
      </div>
            
        </div>


        
      </header>
       
    )
}

export default Sidebar;
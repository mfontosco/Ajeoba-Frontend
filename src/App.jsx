import './index.css';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Tickets from './Pages/Tickets';


function App() {
  return (
        <div className='lg:flex'>
                 <Sidebar/>

                <div className='w-full'> 
                    <Routes>
                        <Route path="/" element={<Home/>} /> 
                        <Route path="/tickets" element={<Tickets/>} />
 
                          
                    </Routes>
                </div>
          
          </div>
    
    );
}

export default App;

import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Hw1 from "./components/hw-1/Hw1";
import Hw2 from './components/hw-2/hw2'
import FeedBack from "./components/hw-2/FeedBack/FeedBack";
import React from "react";

function App() {
  return (
   <BrowserRouter>
       <div className="App">
           <NavLink className='hwBtn' to="/hw1">Home Work 1</NavLink>
           <NavLink className='hwBtn' to="/hw2">Home Work 2</NavLink>
           <Routes>
               <Route path='/hw1/*' element={<Hw1/>} />
               <Route path='/hw2/*' element={<Hw2/>} />
               <Route path="/hw2/feedback" element={ <FeedBack />} />
           </Routes>
       </div>
   </BrowserRouter>
  );
}

export default App;

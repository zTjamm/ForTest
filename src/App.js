import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Hw1 from "./components/hw-1/Hw1";
import Hw2 from './components/hw-2/hw2';
import Hw3 from "./components/hw-3/hw3";
import Hw5 from "./components/hw-5/hw5";
import Home from "./components/Home";
import FeedBack from "./components/hw-2/FeedBack/FeedBack";
import Phonebook from "./components/hw-2/PhoneBook/Phonebook";
import PhonebookTest from "./components/hw-2/hw-2-test/PhonebookTest"

function App() {
  return (
   <BrowserRouter>
       <div className="App">
           <NavLink className='hwBtn' to="/">Home</NavLink>
           <NavLink className='hwBtn' to="/hw1">Home Work 1</NavLink>
           <NavLink className='hwBtn' to="/hw2">Home Work 2</NavLink>
           <NavLink className='hwBtn' to="/hw3">Home Work 3</NavLink>
           <NavLink className='hwBtn' to="/hw5">Home Work 5</NavLink>
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/hw1/*' element={<Hw1/>} />
               <Route path='/hw2/*' element={<Hw2/>} />
               <Route path='/hw3/*' element={<Hw3/>} />
               <Route path='/hw5/*' element={<Hw5/>} />
               <Route path="/hw2/feedback" element={ <FeedBack />} />
               <Route path="/hw2/phonebook" element={ <Phonebook />} />
               <Route path="/hw2/phonebook-test" element={ <PhonebookTest />} />
           </Routes>
       </div>
   </BrowserRouter>
  );
}
export default App;

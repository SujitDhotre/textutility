import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Myform from './Components/Myform';
import Foooter from './Components/Foooter';
import About from './Components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <>
   {/* This is na nav bar  */}
   
  
   <Router>
   <Navbar/>
   {/* we are importing form from the compentes  */}

      {/* <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link> */}
         
          
    
   
     <Routes>
          <Route path='/about'  element={<About/>}/>
          
        
          
          <Route  path="/" element={ <Myform heading="Enter Your Test Here.."/>}/>
         
          
    </Routes>
   {/* Footer is imported here */}
   <Foooter/>
   </Router>
   </>
  );
}

export default App;

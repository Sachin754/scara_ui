

import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import Navbar from "../src/components/navbar"
import Settings from "./components/settings/Settings.js"
import ManualMotion from "./components/manualMotion/manualMotion"
import img from "./images/scara-robot-250x250.webp"
import "./App.css"
import { useState } from "react";



//const setting = lazy(() => import('./components/settings/setting'))


function App() {
  const[ settingsFlag, setSettingFlag] = useState(false)

 
  

  return (
    // <div className="App"> 
    // <Navbar/>
    // </div>
    <div className='App'>
      <BrowserRouter>
        <div className="navbar">

          <ul>
            <li>
              <div className="dropdown">
                <button className="dropbtn"> <i className="fa-solid fa-ellipsis-vertical"></i></button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><a href="#about">Warning</a></li>

            <li><i className="fa-solid fa-circle-xmark"></i><a href="#about">Error</a></li>
            <li className="estop"><i class="fa-solid fa-circle-minus"></i>
              <a href="#contact">EStop</a></li>

            <li className="safeguard"><i class="fa-solid fa-lock"></i><a href="#news">Safeguard</a></li>

            <li className="motor"><i class="fa-solid fa-gear"></i><a href="#about">Motor</a></li>

            <div className="virtual">



            </div>
          </ul>
        </div>

        <div className="carddiv">
      <div className="card">
        <div className="image">
          <img src={img} />
          <h4><b>T3</b></h4>
        </div>
        <div className="">

          <h4><b>Model : </b></h4>
          <h4><b>Connection : </b></h4>
          <h4><b>Control Device : </b></h4>
        </div>
       
      <Link to="/Settings">
      
      <div className="setting">
      <i class="fa-solid fa-screwdriver-wrench"></i><b style={{fontSize:"20px", marginLeft:"95px"}}>Settings</b>
      </div>
      
      </Link>
          {/* <button className="settingbtn" onClick = {{settingFlag}}><b>Settings</b></button> */}
       
     
          {/* <button className="settingbtn"><i className="fa-solid fa-arrows-up-down-left-right"></i><b>MANUAL MOTION</b></button> */}
        <Link to="/manualmotion">
        <div className="mannualOption">
        <i class="fa-solid fa-arrows-up-down-left-right"></i><b style={{fontSize:"20px", marginLeft:"95px"}}>ManualMotion</b>
        </div>
        </Link>

       <Link to="/disconnect">

       <div className="disconnect">
         <i className="fa-solid fa-eject"></i><b style={{fontSize:"20px", marginLeft:"95px"}}>DISCONNECT</b>

        </div>
       </Link>
       
      </div>

      <div className="routingdiv">

          
      <Routes>

<Route path="/" element={<Navbar />} />
<Route path="/Settings" element={<Settings />} />
<Route path="/manualmotion" element={<ManualMotion />} />

</Routes>
    
        
      </div>
      </div>

        

      </BrowserRouter>


    </div>








  );
}

export default App;

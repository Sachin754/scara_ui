
import "../styles/navbar.css"
import img from "../images/scara-robot-250x250.webp"
import { Link } from "react-router-dom";
import { useState } from "react";
import Settings from "./settings/Settings"
import ManualMotion from "./manualMotion/manualMotion"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
const [settingFlag, setSettingFlag] = useState(false)
const [motionFlag, setMotionFlag] = useState(false)


const changeSettingFlag = () => {
  navigate('/settings');

}

const changeMotionFlag = () => {
  setMotionFlag(true)
}

  return (

    <>

      



 
     

    </>


  );
}

export default Navbar;
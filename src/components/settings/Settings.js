

import "../../styles/settings.css"
import Sidebar from '../sidebar';

const Settings = () =>{




   
    return(
       <div className="settings"> 
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      
       <div className="robotsetting">
      
       {/* <p style={{textAlign:"centre"}}><b> Robot Setting </b> </p> */}
       </div>

       <div className="container">
       <div className="divv">
      <b style={{fontSize:"20px", marginLeft:"70px"}}>Hand Settings</b><br></br>

      <i class="fa-solid fa-wrench"></i>

        </div>
        <div className="divv">

        <b style={{fontSize:"20px", marginLeft:"70px"}}>System Settings</b><br></br>

        <i class="fa-solid fa-toolbox"></i>


</div>
<div className="divv">

<b style={{fontSize:"20px", marginLeft:"70px"}}>Maintainance</b><br></br>

<i class="fa-solid fa-hammer"></i>
</div>
       </div>
      

    

       
     


   

       </div>
    )
}


export default Settings;


//how to delete a file in using nodes ?
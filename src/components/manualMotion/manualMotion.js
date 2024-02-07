import { useState } from "react"
import "../../styles/manualmotion.css"

const ManualMotion = () =>{
    const[worldFlag,setWorldFlag] = useState(false)
    const[jointFlag,setJointFlag] = useState(false)


    const changeWorldFlag = () =>{
        setWorldFlag(true)
    }

    const changeJointFlag = () =>{
        setWorldFlag(false)
    }


    return(
        <div className="motion">

           <div className="robotaxis">
                 <div className="robot3dview"></div>
                 <div className="positions"></div>

           </div>
          
          
           <div className="robotcontrols">
           <div className="worldJoint">

            <button onClick = {changeWorldFlag}>World</button>
            <button onClick = {changeJointFlag}>Joint</button>
            </div>
             { worldFlag ?
               <div className="WorldplusdivZ">

               <div className="world">
                   <div className="up">
                      <p style={{color:"antiquewhite"}}>-Y</p>
                   <i class="fa-solid fa-up-long"></i>
                   </div>
                   <div className="leftright">
                       <div className="leftarrow"> <i class="fa-solid fa-left-long"> </i>
                       <p style={{color:"antiquewhite"}}>+X</p>
                       </div>
                  
                   <button className="minusU" onClick = {changeWorldFlag}>-U</button>
                   <button className="plusU" onClick = {changeJointFlag}>+U</button>
                   <div className="rightarrow">
                    <i class="fa-solid fa-right-long"></i>
                    <p style={{color:"antiquewhite"}}>-X</p>
                    </div>
   
                    </div>
                    <div className="down">
                    <i class="fa-solid fa-down-long"></i>
                    <p style={{color:"antiquewhite"}}>+Y</p>
                   </div>
                   </div>
               <div className="divZ">
                   <button className="plusZ" onClick = {changeWorldFlag}>+Z</button>
                   <button className="minusZ" onClick = {changeJointFlag}>-Z</button>
                   </div>
   
   
                   </div> :
                      <div className="joint">
                       <div className="upcircleminusJF">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <p style={{color:"antiquewhite", display:"flex",justifyContent:"space-around"}}><h>-J4</h><h>+J4</h></p>
                       
                       </div>
                       {/* <div className="upcircleplusJF">
                      
                       </div> */}
                       <div className="upcircleminusJT">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <p style={{color:"antiquewhite", display:"flex",justifyContent:"space-around"}}><h>-J3</h><h>+J3</h></p>
                       </div>
                       {/* <div className="upcircleplusJT">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       </div> */}
                       <div className="upcircleminusJTW">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <p style={{color:"antiquewhite", display:"flex",justifyContent:"space-around"}}><h>-J2</h><h>+J2</h></p>
                       </div>
                       {/* <div className="upcircleplusJTW">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       </div> */}
                       <div className="upcircleminusJO">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       <p style={{color:"antiquewhite", display:"flex",justifyContent:"space-around"}}><h>-J1</h><h>+J1</h></p>
                       </div>
                       {/* <div className="upcircleplusJO">
                       <i class="fa-solid fa-circle-arrow-up"></i>
                       </div> */}


                      </div>

                     
             }
          
          
           
     
          
           </div>
         
        </div>
    )
}

export default ManualMotion




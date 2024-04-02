

import { Link } from "react-router-dom";

import Img from "../../../assets/avatardownloadjpg"

import "./Links.css"

const Links =()=>{

    return(
        <>
         <div className= "linksLogs">
             <div className= "logs">
                <div id="img"><img src={Img} alt="" id="img"/></div>

                 <div className= "btn">
                      <button id="in">Log In</button>
                      <button id="out">Log Out</button>
                 </div>
             </div>
             <div className= "links">
                   <div className= "homLink">
                         <div id="lind"><Link to ='/' id="linkT">Home</Link ></div>
                   </div>
                    <div className= "otherLinks">
                         <div id="lind"><Link to ='/about' id="linkT">About</Link></div>
                         <div id="lind"><Link to ='/contact' id="linkT">Contact</Link></div>
                         <div id="lind"><Link to ='/settings' id="linkT">Settings</Link></div>
                    </div>
                  
              </div>
          </div>
        </>
    )
}

export default Links;


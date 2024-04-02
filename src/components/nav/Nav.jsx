import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./links/Home";
import About from "./links/About";
import Contact from "./links/Contact";
import Settings from "./links/Settings";



const Nav =()=>{

    return(
        <>
          <div className= "nav">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element ={<Home/>}/>
                    <Route path="/about" element ={<About/>}/>
                    <Route path="/contact" element ={<Contact/>}/>
                    <Route path="/settings" element ={<Settings/>}/>

                </Routes>
            
            </BrowserRouter>


          </div>
        </>
    )
}

export default Nav;
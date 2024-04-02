import Login from "../../login/Login";
import Links from "./Links";



const Home =()=>{

    return(
        <>
          <div className= "home">
              <Links/>
              <h2 id="testinT">This is my Home page</h2>
              <Login/>
          </div>
        </>
    )
}

export default Home;
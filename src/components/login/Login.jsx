
import { useState } from "react";
import"./Login.css"




const Login = ()=>{

    const[dataForms, setDataForms]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        image :""
    });

    const changeHandler =(e)=>{
        const{name, value, file}= e.target;
        setDataForms((prevDatas)=>({
            ...prevDatas,
            [name] : name ==="imageLink"? URL.createObjectURL(file[0]):value,
        }));
    };

    const submitHandler =(e) => {
        e.preventDefault();
        (dataForms)
    }

    return(
        <>
            <div className= "login">
                <form className="" onSubmit={submitHandler}>
                    <div className= "inputField">
                        <input type="text"
                        placeholder="FistName"
                        name="firstName"
                        id="firstName" 
                        value={dataForms.firstName}
                        onChange={changeHandler}/>

                       <input type="text"
                        placeholder="LastName"
                        name="lastName"
                        id="lastName" 
                        value={dataForms.lastName}
                        onChange={changeHandler}/>

                       <input type="email"
                        placeholder="Email"
                        name="email"
                        id="email" 
                        value={dataForms.email}
                        onChange={changeHandler}/>

                       <input type="password"
                        placeholder="Enter Password"
                        name="password"
                        id="password" 
                        value={dataForms.password}
                        onChange={changeHandler}/>

                        <input type="file"
                        onChange={changeHandler}
                        name="imageLink"
                        id="img"/> 
                        {dataForms.imageLink && <img  src={dataForms.imageLink} alt="image"/>}
                    </div>
                    <button id="sub">Submit</button>

                </form>




            </div>
        </>
    )
}

export default Login;
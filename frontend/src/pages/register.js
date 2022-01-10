import React from "react";
import {useNavigate} from "react-router-dom";
import { postRegister } from "../api/api";

const RegisterPage = () => {

    const [inputRegister, setInputRegister] = React.useState({});
    const navigate = useNavigate();
    const onChangeInput =  (e)=>{
        const {name, value} = e.target;
         setInputRegister({...inputRegister, [name]: value});
         console.log(inputRegister);
    }

    const onSubmitRegister = async ()=>{
        postRegister(inputRegister, {})
           .then((res)=>{
           if(res.data.status == 200){
               setInputRegister({});
               
             
           }
           console.log(res.data);
       });
       navigate("/login")

   }
    return(
        <div className="login container">
            <h4 className="login form-heading">Register</h4>
            <form action>
                <label htmlFor="uname"><b>Username</b></label>
                <input onChange={onChangeInput} name="email" value={inputRegister?.email} type="text" placeholder="Enter Username"  required />
                <label htmlFor="psw"><b>Password</b></label>
                <input onChange={onChangeInput} name="password" value={inputRegister?.password} type="password" placeholder="Enter Password"  required />
                <button onClick={onSubmitRegister}  type="submit">Register</button>
                <label>
                </label>
            </form>
        </div>

    )
}
export default RegisterPage;
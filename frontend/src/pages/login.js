import React from "react";
import { postLogin } from "../api/api";
import {useNavigate} from "react-router-dom";

require('../css/login.css');


const LoginPage = () => {
    // navigate = useNavigate()
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    React.useEffect(() => {
        if (localStorage.getItem("authToken")) {
            navigate("/product");
        }
      }, []);
    const onSubmitLogin = async (e) => {
        e.preventDefault();

        const config = {
            header: {
            "Content-Type": "application/json",
            },
        };

        try {
            
            const { data } = await postLogin(
            { email, password },
            config
            );
            if(data) {
                localStorage.setItem("authToken", data.token);
                console.log(data.token);
    
                navigate("/product");
            }
            else {
                alert("Email or password is wrong")
                navigate("/login");
            }

            
        } catch (error) {
            console.log(error)
        }
    };
    return(
        <div className="container login">
            <h4 className="form-heading">Login</h4>
            <form  >
                    <label ><b>Email</b></label>
                    <input onChange={(e) => setEmail(e.target.value)}
            value={email} type="text" placeholder="Enter email" name="email" required />
                    <label ><b>Password</b></label>
                    <input onChange={(e) => setPassword(e.target.value)}
            value={password} required type="password" placeholder="Enter password" name="password"  />
                <button onClick={onSubmitLogin} type="submit"  >Login</button>
                <a href="/register">Register</a>
            </form>
        </div>

    )
}
export default LoginPage;
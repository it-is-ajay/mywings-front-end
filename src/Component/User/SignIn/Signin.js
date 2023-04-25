import { Link, useNavigate } from "react-router-dom";
import "../SignUp/signup.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux-conflig/userSlice";
 function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            let response = await axios.post("http://localhost:3000/user/signIn",{email,password});
            dispatch(setUser(response.data.user));
            dispatch(setToken(response.data.token));
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
    return <>
         <div className="container" style={{ padding: "5vw", width: "60%" }}>
            <div className="row" style={{ height: 400 }}>
                <div className="col-6" style={{ backgroundColor: "white", height: 400 }}>
                    <form onSubmit={handleSubmit} className="a" >
                        <h2 id="heading">Sign In</h2>
                        <span>Or use your account</span>
                        <input className="ps-3" onChange={(event)=>setEmail(event.target.value)}  type="text mt-2" placeholder="Enter Email" />
                        <input className="ps-3" onChange={(event)=>setPassword(event.target.value)}  type="password" placeholder="Enter Password" />
                        <a href="" className="link">
                            {" "}
                            <small>forgot Password?</small>
                        </a>
                        <button className="btn btn-success">Log In</button>
                    </form>
                </div>
                <div className="col-6" id="msg" style={{ backgroundColor: "white", height: 400 }}>
                    <h2 id="heading">Hello, Friend!</h2>
                    <p style={{ color: "black", marginTop: "2vw" }}>
                        To keep connected with us please login with your personal info
                    </p>
                    <button className="ghost" id="signUp">
                        <Link to="/signup" style={{ textDecoration: "none", color: "black" }} >
                            Sign Up
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default SignIn;
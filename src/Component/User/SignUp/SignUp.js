import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [contact,setContact] = useState("");

    const eventHandler = async (event)=>{
        try{
            console.log(name);
            console.log(userName);
            console.log(email);
            console.log(password);
            console.log(contact);
            event.preventDefault();
            let response = await axios.post("http://localhost:3000/user/signUp",{name,userName,email,password,contact});
            console.log(response.data.status);
        }
        catch(err){
            console.log(err);
        }
    }
    return <>
        <div className="container " style={{ padding: "2vw", width: "60%" }}>
            <div className="row" style={{ height: 500 }}>
                <div className="col-6" id="msg" style={{ backgroundColor: "white smoke", height: 500 }}>
                    <h2 id="heading">Hello, Friend!</h2>
                    <p style={{ color: "black", marginTop: "3vw" }}>
                        Enter your personal details and start journay with us
                    </p>
                    <button className="ghost" id="signUp">
                        <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
                            Sign In
                        </Link>
                    </button>
                </div>
                <div className="col-6" style={{ backgroundColor: "white", height: 500 }}>
                    <form onSubmit={eventHandler} className="a">
                        <h2 id="heading">CREATE ACCOUNT</h2>
                        <span>Or use your email for registration</span>

                        <input onChange={(event)=>setName(event.target.value)} className="ps-3" type="text" placeholder="Enter Name" />
                        <input onChange={(event)=>setUserName(event.target.value)} className="ps-3" type="text" placeholder="Enter User Name" />
                        <input onChange={(event)=>setEmail(event.target.value)} className="ps-3" type="text" placeholder="Enter email" />
                        <input onChange={(event)=>setContact(event.target.value)} className="ps-3" type="text" placeholder="Enter contact number" />
                        <input onChange={(event)=>setPassword(event.target.value)} className="ps-3" type="password" placeholder="Enter Password" />

                        <button className="btn btn-success"> Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    </>
}
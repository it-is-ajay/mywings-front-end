import { Link, useNavigate } from "react-router-dom";
import "../SignUp/signup.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux-conflig/userSlice";
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
       
        try {
            event.preventDefault();
            let response = await axios.post("http://localhost:3000/user/signIn", { usernameOrEmail:email, password });
            console.log(response)
            dispatch(setUser(response.data.user));
            dispatch(setToken(response.data.token));
            navigate("/");
        }
        catch (err) {
            console.log(err);
        }
    }
    return <>
        <div style={{ height: "100vh", width: "100%", backgroundColor: "#ffffff", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="container container1" style={{ padding: "5vw", width: "60%" }}>
                <div className="row row1" style={{ height: 400 }}>
                    <div className="col-6" style={{ backgroundColor: "white", height: 400 }}>
                        <form onSubmit={handleSubmit} >
                            <h2 id="heading">Sign In</h2>
                            <span>Or use your account</span>
                            <input className="ps-3 input1" onChange={(event) => setEmail(event.target.value)} type="text mt-2" required placeholder="Enter Email" />
                            <input className="ps-3 input1" onChange={(event) => setPassword(event.target.value)} type="password" required placeholder="Enter Password" />
                            <a id="a" href="" className="link">
                                {" "}
                                <small>forgot Password?</small>
                            </a>
                            <button className="btn btn-dark btn-success1">Log In</button>
                        </form>
                    </div>
                    <div className="col-6" id="msg" style={{ backgroundColor: "white", height: 400 }}>
                        <h2 id="heading">Hello, Friend!</h2>
                        <p style={{ color: "black", marginTop: "2vw" }}>
                            To keep connected with us please login with your personal info
                        </p>

                        <Link to="/signup" >
                            <button className="btn btn-dark ghost">SignUp</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default SignIn;
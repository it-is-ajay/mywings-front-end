import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Span() {
    const state = useLocation();
    let postId = state.state.postId;
    const [reason,setReason] = useState("");
    const {user} = useSelector(state => state.user)

    const handleSpam = async (event) =>{
        event.preventDefault();
        let response =await axios.post("http://localhost:3000/user/spam",{userId:user._id,postId,reason})
        toast.success("user spam");
    }
    return <>
    <ToastContainer/>
        <div className="container mt-5 " style={{ marginLeft: '350px', border: '' }}>
            <div className="row">
                <div className="col-md-6" style={{ height: '500px', width: '500px' }}>
                    <center><h3>Report</h3></center>
                    <hr />
                    <b><h5>Why are you reporting this post?</h5></b><br/>
                    <form  onSubmit={handleSpam}>

                        <input type="text" onChange={(event)=>setReason(event.target.value)} className="form-control mt-2" placeholder="Why you spam" />
                        <center><button className="btn btn-danger mt-4">submit</button></center>
                    </form>
                </div>
            </div>
        </div>
    </>
}
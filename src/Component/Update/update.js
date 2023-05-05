import { useState } from "react";
import { Navebar } from "../Navbar/Navbar";
import "./update.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function UpdateDetails() {
    const {user} = useSelector(state=>state.user)

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [art, setArt] = useState("");
    const [address, setAddress] = useState("");
    const [about, setAbout] = useState("");
    // const [profilePhoto,setProfilePhoto] = useState("");
    
    const handleUpdate = async (event) =>{
        try{
            event.preventDefault();
            let response = await axios.post("http://localhost:3000/user/editProfile/updateDetails",{_id:user._id,name,userName,email,contact,gender,art,address,about})
            toast.success("user updated");

        }
        catch(err){
            console.log(err);
        }
    }
    return <>
        <Navebar />
        <ToastContainer />
        <div className="container container2  mt-3" >
        <div className="row">
          <div className="col-md-6 mt-4 img1">
            <img src="/img/guitar2.jpg" id="image" />
          </div>
          <div className="col-md-6 mt-3 container container3">
            <form onSubmit={handleUpdate}>
              <div className="row">
                <div className="col-md-4 mt-3 me-3">
                  <img src="/img/user.png" style={{ height: '130px', width: '130px' }} />
                  <button className="btn btn-primary mt-3" style={{backgroundColor:"#4abdac",border:'none', marginLeft:'25px'}}>Profile</button>
                </div>
                <div className="col-md-7">
                  <input type="text" onChange={(event)=>setName(event.target.value)}  className="form-control mt-2" placeholder="Enter Name" />
                  <input type="text" onChange={(event)=>setUserName(event.target.value)}  className="form-control mt-2" placeholder="Enter UserName" />
                  <input type="text" onChange={(event)=>setEmail(event.target.value)}  className="form-control mt-2" placeholder="Enter Email" />
                  <input type="text" onChange={(event)=>setContact(event.target.value)}  className="form-control mt-2" placeholder="Enter Contact" />
                  <form className="mt-2 " onChange={(event)=>setGender(event.target.value)}  >
                    <input type="radio" value='male' name="gender" /> male &nbsp;&nbsp;&nbsp;
                    <input type="radio" value='female' name="gender" /> female
                  </form>

                  <select className="form-control mt-2" onChange={(event)=>setArt(event.target.value)} type='text-field' >
                    <option >Select Arts</option>
                    <option >Singer</option>
                    <option >Dancer</option>
                    <option >Tabla</option>
                    <option >Guitarist</option>
                    <option >Pianoist</option>
                  </select>
                </div>
              </div>
              <div className="row mt-2">
                <textarea placeholder="Add Address"onChange={(event)=>setAddress(event.target.value)}  className="form-control text1"  ></textarea>
              </div>
              <div className="row mt-2">
                <textarea placeholder="Add Bio" onChange={(event)=>setAbout(event.target.value)} className="form-control text1"  ></textarea>
              </div>
              <div style={{ marginLeft: '145px' }} type="submit">
                <button className="btn btn-primary  mt-3" style={{ backgroundColor: '#4abdac', border: 'none' }}>Click To Start Your Journey</button>
              </div>
              <div style={{ marginTop: '-37px' }}>
               <Link to='/profile'> <button style={{ backgroundColor: '#4abdac', border: 'none' }} className="btn btn-primary">Back</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
}
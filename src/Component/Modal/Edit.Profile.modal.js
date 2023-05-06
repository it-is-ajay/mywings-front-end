import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import photo from "../../avtar1.png"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import api from "../../Webapi/api";
import { setToken, setUser } from "../../redux-conflig/userSlice";
import Avatar from "../../user.png";

export function EditUserProfile() {
    const {user} = useSelector((state)=>state.user);
    const [name, setName] = useState(user.name);
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [gender, setGender] = useState(user.gender);
    const [address, setAddress] = useState(user.address);
    const [imgpath, setimgpath] = useState(user.profilePhoto ? user.profilePhoto : Avatar);
    const [profilephoto, setprofilephotos] = useState(user.profilePhoto);
    const [profilestatus, setprofilestatus] = useState(user.profilePhoto ? true : false);
    const dispatch = useDispatch();

    const updateProfile = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('userName', userName)
        formData.append('email', email)
        formData.append('contact', contact)
        formData.append('gender', gender)
        formData.append('address', address)
        formData.append('file', profilephoto)
        formData.append("_id", user._id);

        try {
            let response = await axios.post(api.updateprofile, formData);
            let updatedUser = await axios.get("/user/searchById/" + user._id);
            toast.success("user Updated");
            dispatch(setUser({ ...user,profilePhoto : updatedUser.data.user.profilePhoto }))

        } catch (err) {
            console.log("in catch");
            console.log(err);
            toast.error("oops! something went wrong")
        }


    }

    const setprofile = (event) => {
        event.preventDefault();
        setimgpath("");
        setprofilestatus(false)
        setimgpath(URL.createObjectURL(event.target.files[0]))
        setprofilephotos(event.target.files[0])

    }

    const removephoto = ()=>{
        setimgpath(Avatar);
    }

    return <>
        <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={{ backgroundColor: '#4abdac' }}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white' }} >Updated Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={removephoto} aria-label="Close"></button>
                    </div>
                    <form onSubmit={updateProfile}>
                    <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4 mt-3 me-3">
                                <img src={profilestatus?api.profilepic+ user.profilePhoto : imgpath} className="profilepic" />
                                    {/* <button className=" btn btn-primary mt-3" style={{ width: "130px", backgroundColor: '#4abdac', border: 'none' }}>Edit Profile</button> */}
                                    <div className="text-center"> 
                                    <label for="files" className="btn inputpic_lable">Edit Profile</label>
                                    <input multiple="" accept='image/jpeg,image/png' name="file" id="files" onChange={setprofile} style={{ visibility: "hidden" }} type="file" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <input type="text" value={name} onChange={(event)=>setName(event.target.value)} className="form-control mt-2" placeholder="Enter Name" />
                                    <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)} className="form-control mt-2" placeholder="Enter UserName" />
                                    <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} className="form-control mt-2" placeholder="Enter Email" />
                                    <input type="text" value={contact} onChange={(event)=>setContact(event.target.value)} className="form-control mt-2" placeholder="Enter Contact" />
                                        <input type="radio" onChange={(event)=>setGender(event.target.value)} value='male' name="gender" /> male &nbsp;&nbsp;&nbsp;
                                        <input type="radio" onChange={(event)=>setGender(event.target.value)} value='female' name="gender" /> female

                                </div>
                            </div>
                            <div className="row mt-2">
                                <textarea placeholder="Add Address" value={(address=="undefined")?"" : address} onChange={(event)=>setAddress(event.target.value)} className="form-control text1" style={{ width: '440px' }}  ></textarea>
                            </div>
                        
                    </div>
                    <div className="modal-footer">
                        <Link to='/update' data-bs-dismiss="modal" style={{ marginRight: '240px' }} ><button className="btn btn-link" style={{ color: '#4abdac' }}>Become a artist</button> </Link>
                        <input type="submit" className="btn btn-primary" style={{ backgroundColor: '#4abdac', border: 'none' }} value={"Save Changes"}/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
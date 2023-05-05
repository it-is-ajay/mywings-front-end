import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import photo from "../../avtar1.png"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import api from "../../Webapi/api";
import { setToken, setUser } from "../../redux-conflig/userSlice";
export function UserEditProfile() {
    const { user } = useSelector((state) => state.user)

    const [name, setName] = useState(user.name);
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [gender, setGender] = useState(user.gender);
    const [address, setAddress] = useState(user.address);
    const [imgpath, setimgpath] = useState(user.profilePhoto?user.profilePhoto:photo);
    const [profilephoto, setprofilephotos] = useState(user.profilePhoto);
    const [profilestatus,setprofilestatus]=useState(user.profilePhoto?true:false);
    const dispatch = useDispatch();

  (function(){
    gender=="female"  && console.log(document.getElementById("female"))
    gender=="male" && document.getElementById("male")
  })();
   

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
            toast.success("user Updated");
            let user=response.data.user;
            dispatch(setUser({...user,user}))

        } catch (err) {
            toast.error("oops! something went wrong")
        }
    

    }

    const setprofile = (event) => {
        event.preventDefault();
        setprofilestatus(false)
        setimgpath(URL.createObjectURL(event.target.files[0]))
        setprofilephotos(event.target.files[0])
        
    }
    

    return <>
        <ToastContainer />
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={{ backgroundColor: "#4abdac" }}>
                        <h3 className="editprofileheader">Update Details</h3>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="container container1  mt-3" >
                                <div className="container container2">
                                    <form onSubmit={updateProfile}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="">
                                                <img src={profilestatus?api.profilepic+ user.profilePhoto : imgpath} className="profilepic" />
                                                </div>
                                                <div className="text-center">
                                                <label for="files" className="btn inputpic_lable">Edit Profile</label>
                                                <input multiple="" accept='image/jpeg,image/png' name="file" id="files" onChange={setprofile} style={{ visibility: "hidden" }} type="file" />
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control mt-2 updateprofileinput" placeholder="Enter Name" />
                                                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} className="form-control mt-2 updateprofileinput" placeholder="Enter UserName" />
                                                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control mt-2 updateprofileinput" placeholder="Enter Email" />
                                                <input type="text" value={contact} onChange={(event) => setContact(event.target.value)} className="form-control mt-2 updateprofileinput" placeholder="Enter Contact" />                                                
                                                <input  id="male"  className="mt-3" onChange={(event) => setGender(event.target.value)} type="radio"  value='male' name="gender" /> male &nbsp;&nbsp;&nbsp;
                                                <input  id="female"   className="mt-3" onChange={(event) => setGender(event.target.value)} type="radio"  value='female' name="gender" /> female

                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="text-center">
                                                <textarea placeholder="Add Address" value={(address=="undefined") ? "":address} className="form-control text1 editprofiletextarea"
                                                    onChange={(event) => setAddress(event.target.value)} ></textarea>
                                            </div>

                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6 text-start"><a className="beArtist">Become a artist</a></div>
                                            <div className="col-md-6 text-end">
                                                <input type="submit" className="btn inputpicsubmit" value={"Save changes"} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                           
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>

}






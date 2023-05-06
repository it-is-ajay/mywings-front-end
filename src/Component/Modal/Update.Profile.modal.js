import { useState } from "react";
import { useSelector } from "react-redux";

export function EditProfile() {
    const { user } = useSelector((state) => state.user)
    const [name, setName] = useState(user.name);
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [gender, setGender] = useState(user.gender);
    const [art, setArt] = useState(user.art);
    const [address, setAddress] = useState(user.address);
    const [about, setAbout] = useState(user.about);
    const [profilePhoto, setProfilePhoto] = useState("");

    const passionHandlar = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name)
        formData.append('userName', userName)
        formData.append('email', email)
        formData.append('contact', contact)
        formData.append('gender', gender)
        formData.append('art', art)
        formData.append('address', address)
        formData.append('about', about)
        formData.append('file', profilePhoto)
        formData.append('_id',user._id)

        // let response = await axios.post("http://localhost:3000/user/editProfile/updateDetails");
        // toast.success("user Updated");
    }




    const setprofile = (event) => {
        event.preventDefault();
        setProfilePhoto(URL.createObjectURL(event.target.files[0]))
    }

    return <>
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="container container1  mt-3" >
                            <div className="row">
                                <div className="col-md-6 mt-4 img1">
                                    <img src="/img/guitar2.jpg" id="image" />
                                </div>
                                <div className="col-md-6 mt-3 container container2">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-4 mt-3 me-3">
                                                <img src={profilePhoto} style={{ height: '130px', width: '130px' }} />
                                                <label for="file-input"><span>button</span></label>
                                                <input id="file-input" name="file" type='file' hidden="true" />

                                            </div>
                                            <div className="col-md-7">
                                                <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control mt-2" placeholder="Enter Name" />
                                                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} className="form-control mt-2" placeholder="Enter UserName" />
                                                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control mt-2" placeholder="Enter Email" />
                                                <input type="text" value={contact} onChange={(event) => setContact(event.target.value)} className="form-control mt-2" placeholder="Enter Contact" />
                                                <form className="mt-2 " onChange={(event) => setGender(event.target.value)} >
                                                    <input type="radio" value='male' name="gender" /> male &nbsp;&nbsp;&nbsp;
                                                    <input type="radio" value='female' name="gender" /> female
                                                </form>

                                                <select className="form-control mt-2" onChange={(event) => setArt(event.target.value)} type='text-field' >
                                                    <option >Select Arts</option>
                                                    <option >Singer</option>
                                                    <option >Dancer</option>
                                                    <option >Tabla</option>
                                                    <option >Guitarist</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <textarea placeholder="Add Address" value={address} className="form-control text1" onChange={(event) => setAddress(event.target.value)} ></textarea>
                                        </div>
                                        <div className="row mt-2">
                                            <textarea placeholder="Add Bio" value={about} className="form-control text1" onChange={(event) => setAbout(event.target.value)} ></textarea>
                                        </div>
                                        <div style={{ marginLeft: '145px' }} type="submit">
                                            <button className="btn btn-primary  mt-3" style={{ backgroundColor: '#4abdac', border: 'none' }}>Click To Start Your Journey</button>
                                        </div>
                                        <div style={{ marginTop: '-37px' }}>
                                            <button style={{ backgroundColor: '#4abdac', border: 'none' }} className="btn btn-primary">Back</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>

}






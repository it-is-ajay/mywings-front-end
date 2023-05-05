import { useSelector } from "react-redux"
import { Navebar } from "../Navbar/Navbar"
import "./profile.css"
import { EditProfile } from "../Modal/Update.Profile.modal";
import { UserEditProfile } from "../Modal/Edit.Profile.modal";

export function Profile() {
    const { user } = useSelector(state => state.user);
    return <>
        <Navebar />
        <div className="d-flex justify-content-center" style={{ height: "100vh", marginTop: "-15px" }}>
            <div className="d-flex flex-column align-item-center" style={{ height: "100vh", width: "80%", backgroundColor: "whitesmoke" }}>
                <div className="ProfileHead row">
                    <div className="col-lg-3 d-flex UserProfile" style={{ height: "100%" }}>
                        <img src="/img/user.png" />
                    </div>
                    <div className="col-lg-9 d-flex" style={{ height: "100%" }}>
                        <div className=" ProfileContent">
                            <div className=" ProfileRow mb-3 ">
                                <div className="UserName">{user.userName}</div>
                                <div>
                                    <button data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" className="me-3">Edit profile</button>
                                    <img src="/img/gear-fill.svg" />
                                </div>
                            </div>
                            <div className="ProfileRow mb-3 row">
                                <div className="col-sm-4">7 posts</div>
                                <div className="col-sm-4">1200 followers</div>
                                <div className="col-sm-4">108 following</div>
                            </div>
                            <div className="ProfileRow">
                                <div>{user.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="PostBox">

                </div>
            </div>
        </div>
        <UserEditProfile/>
    </>
}

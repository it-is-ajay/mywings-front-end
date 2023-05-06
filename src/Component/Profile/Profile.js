import { useDispatch, useSelector } from "react-redux"
import { Navebar } from "../Navbar/Navbar"
import "./profile.css"
import { useEffect } from "react";
import { fetchPostById } from "../../redux-conflig/userPostSlice";
import api from "../../Webapi/api";
import Loader from "../Loader/loader";
import { EditUserProfile } from "../Modal/Edit.Profile.modal";
import Avatar from "../../user.png";

export function Profile() {
    const { user } = useSelector(state => state.user);
    const { userPostList, isLoading } = useSelector(state => state.userPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        (!userPostList.length) && dispatch(fetchPostById(user._id));
    }, []);
    return <>
        <Navebar />
        <div className="profile-container">
            <div className="main-profile-container">
                <div className="profile-header ">
                    <div className="profile-photo">
                        <img src={user.profilePhoto ? api.profilepic+user.profilePhoto : Avatar} alt="Profile Photo" />
                    </div>
                    <div className="profile-info  w-75">
                        <h1 className="username">{user.userName}</h1>
                        <h2 className="name">{user.name}</h2>
                        <ul className="social-links">
                            <div className="ProfileRow mb-3 row w-50">
                                <div className="col-sm-4"><span className="userSocials">{userPostList.length} posts</span></div>
                                <div className="col-sm-4"><span className="userSocials">1200 followers</span></div>
                                <div className="col-sm-4"><span className="userSocials">108 following</span></div>
                            </div>
                            <div>
                                <button className="me-3" data-bs-toggle="modal" data-bs-target="#updateModal">Edit profile</button>
                                <img src="/img/gear-fill.svg" />
                            </div>
                        </ul>
                        <p className="bio">bio bio bio bio bio bio bio bio bio bio bio</p>
                    </div>
                </div>
                <hr />
                <section className="w-100" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{(isLoading) && <Loader />}</section>
                <div className="user-post-grid p-5">
                    {userPostList.map((posts, index) =>
                        <div key={index} className="product-item user-post d-flex justify-content-center" style={{ color: "lightgray" }}>
                            {posts.type=="video/mp4" ? <video className="video Posts" loop src={api.file + posts.file} autoPlay="true"  />:<img className="Posts" src={api.file + posts.file} />}
                            <div className="product-action">
                                <a className="btn" href="" style={{ display: "flex", flexDirection: "column" }}><i className="bi bi-heart-fill" style={{ color: "crimson", fontSize: "25px" }}></i><span style={{ color: "white" }}> {posts.likeItems.length} likes</span></a>

                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
        <EditUserProfile/>
    </>
}

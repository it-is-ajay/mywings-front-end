import { useDispatch, useSelector } from "react-redux"
import { Navebar } from "../Navbar/Navbar"
import "./profile.css"
import { useEffect } from "react";
import { fetchPostById } from "../../redux-conflig/userPostSlice";
import api from "../../Webapi/api";
import Loader from "../Loader/loader";
import { Link } from "react-router-dom";

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
                        <img src="/img/user.png" alt="Profile Photo" />
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
                        <div key={index} className="product-item user-post bg-danger">
                            <img src={api.file + posts.file} />
                            <div className="product-action">
                                <a className="btn" href="" style={{ display: "flex", flexDirection: "column" }}><i className="bi bi-heart-fill" style={{ color: "crimson", fontSize: "25px" }}></i><span style={{ color: "white" }}> {posts.likeItems.length} likes</span></a>

                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
        <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={{ backgroundColor: '#4abdac' }}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white' }} >Updated Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="row">
                                <div className="col-md-4 mt-3 me-3">
                                    <img src="/img/user.png" style={{ height: '130px', width: '130px' }} />
                                    <button className=" btn btn-primary mt-3" style={{ width: "130px", backgroundColor: '#4abdac', border: 'none' }}>Edit Profile</button>

                                </div>
                                <div className="col-md-7">
                                    <input type="text" className="form-control mt-2" placeholder="Enter Name" />
                                    <input type="text" className="form-control mt-2" placeholder="Enter UserName" />
                                    <input type="text" className="form-control mt-2" placeholder="Enter Email" />
                                    <input type="text" className="form-control mt-2" placeholder="Enter Contact" />
                                    <form className="mt-2 "  >
                                        <input type="radio" value='male' name="gender" /> male &nbsp;&nbsp;&nbsp;
                                        <input type="radio" value='female' name="gender" /> female
                                    </form>

                                </div>
                            </div>
                            <div className="row mt-2">
                                <textarea placeholder="Add Address" className="form-control text1" style={{ width: '440px' }}  ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Link to='/update' data-bs-dismiss="modal" style={{ marginRight: '240px' }} ><button className="btn btn-link" style={{ color: '#4abdac' }}>Become a artist</button> </Link>
                        {/* <button  >Become a artist</button> */}
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#4abdac', border: 'none' }}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

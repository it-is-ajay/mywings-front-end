import { useSelector } from "react-redux"
import { Navebar } from "../Navbar/Navbar"
import "./profile.css"
import { Link } from "react-router-dom";

export function Profile() {
    const {user} = useSelector(state=>state.user);
    return <>
        <Navebar />
        <div className="d-flex justify-content-center" style={{ height: "100vh", marginTop: "-15px"}}>
            <div className="d-flex flex-column align-item-center" style={{ height: "100vh", width: "80%",backgroundColor:"whitesmoke"}}>
                <div className="ProfileHead row">
                    <div className="col-lg-3 d-flex UserProfile" style={{ height: "100%" }}>
                        <img src="/img/user.png"/>
                    </div>
                    <div className="col-lg-9 d-flex" style={{ height: "100%" }}>
                        <div className=" ProfileContent">
                            <div className=" ProfileRow mb-3 ">
                                <div className="UserName">{user.userName}</div>
                                <div>
                                    <button className="me-3" data-bs-toggle="modal" data-bs-target="#updateModal">Edit profile</button>
                                    <img src="/img/gear-fill.svg"/>
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
                <hr/>

                <div className="PostBox">
                    
                </div>
            </div>
        </div>
        <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:'#4abdac'}}>
        <h5 className="modal-title" id="exampleModalLabel"style={{color:'white'}} >Updated Details</h5>
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
                        <input type="text"  className="form-control mt-2" placeholder="Enter Name" />
                        <input type="text"  className="form-control mt-2" placeholder="Enter UserName" />
                        <input type="text"  className="form-control mt-2" placeholder="Enter Email" />
                        <input type="text"  className="form-control mt-2" placeholder="Enter Contact" />
                        <form className="mt-2 "  >
                            <input type="radio" value='male' name="gender" /> male &nbsp;&nbsp;&nbsp;
                            <input type="radio" value='female' name="gender" /> female
                        </form>

                    </div>
                </div>
                <div className="row mt-2">
                    <textarea placeholder="Add Address" className="form-control text1" style={{width:'440px'}}  ></textarea>
                </div>
            </form>
      </div>
      <div className="modal-footer">
        <Link to='/update' data-bs-dismiss="modal"style={{marginRight:'240px'}} ><button className="btn btn-link" style={{color:'#4abdac'}}>Become a artist</button> </Link>
        {/* <button  >Become a artist</button> */}
        <button type="button" className="btn btn-primary" style={{backgroundColor:'#4abdac',border:'none'}}>Update</button>
      </div>
    </div>
  </div>
</div>
    </>
}

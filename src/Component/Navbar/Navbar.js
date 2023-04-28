import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';
import { useState } from "react";
import axios from "axios";
import post from '../../poloadicon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
export function Navebar() {

  const [file, setfile] = useState("");
  const [caption, setcaption] = useState("");
  const [imgpath, setimgpath] = useState(post);
  const [uploadbuttonstatus, setuploadbuttonstatus] = useState(true);
  const { user } = useSelector((state) => state.user)
  

  let date = new Date();
  date = date.getDate() + "/" + ((date.getMonth() * 1) + 1) + "/" + date.getFullYear();

  const uploadbutton = () => {
    setuploadbuttonstatus(true)
    setimgpath(post)
    setcaption("")
  }

  let locationOfYour = "indore";

  const uploadImage = (event) => {
    event.preventDefault();
    setimgpath(URL.createObjectURL(event.target.files[0]));
    setfile(event.target.files[0]);
    setuploadbuttonstatus(false);

  }

  const submitbutton = async (event) => {
    event.preventDefault();
    let url = "http://localhost:3000/post/uploadPost";
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('date', date);
    formdata.append('caption', caption);
    formdata.append('userId', user._id);
    formdata.append('locationOfYour', locationOfYour);

    try {
      let response = await axios.post(url, formdata)
      if (response) {
        setimgpath(post);
        setcaption("")
        toast("post uploaded");
      }
    } catch (err) {
      toast.error("please select file first")
    }
  }

  return <>
    <ToastContainer />
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#4abdac" }}>
      <div className="container-fluid">
        <a className="navbar-brand me-5" href="#">
          <img height={"25px"} width={"125px"} style={{ marginTop: "-10px" }} src="/img/logo-no-background.png" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse stroke" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item " style={{ marginTop: '-5px' }}>
              <Link className='navLinks' to="/"> Home </Link>
            </li>
            <li className="nav-item " style={{ marginTop: '-5px' }}>
              <Link className='navLinks' to="/about"> About </Link>
            </li>
            <li className="nav-item " style={{ marginTop: '-5px' }}>
              <Link className='navLinks' to="/collaborate"> Collaborate </Link>
            </li>
            <li className="nav-item " style={{ marginTop: '-5px' }}>
              <Link className='navLinks' to="/signup"> Sign Up </Link>
            </li>
          </ul>
          <div className="d-flex">
            <a className="nav-link active" aria-current="page" href="#">
              <i class='fas fa-crown  crown' style={{ fontSize: "25px", color: "#f7b733" }}></i>
            </a>
            <span className='post'>
              <a className="nav-link active" data-bs-toggle="modal"
                data-bs-target="#exampleModal" aria-current="page" >
                <i class="bi bi-plus-square me-3 AddPost"></i>
              </a>
            </span>
            <div className="d-flex">
              <div className="input-group mt-1">
                <input id="search" style={{ height: "35px", color: "#fc4a1a" }} type="text" className="form-control" placeholder="Search" />
                <span style={{ height: "35px", backgroundColor: "white" }} className="input-group-text"><i className="bi bi-search" style={{ color: "#fc4a1a", fontWeight: "bold", fontSize: "20px" }}></i></span>
              </div>
              <a className="nav-link" href="#">
                <i class="bi bi-bell-fill" style={{ color: "lightGray" }}></i>
              </a>
            </div>
            <Link className="nav-link" to="/profile">
              <img src="/img/user.png" style={{ height: "25px", width: "25px", borderRadius: "50%" }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>



    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ width: "400px" }}>
        <div className="modal-content">
          <div className='text-end'>
            <button onClick={uploadbutton} type="button" className="btn-close m-2" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="text-center">
            <label for="file-input">
                <img style={{ height: "250px" }} src={imgpath} /><br /><br />
            </label>

          </div>
          <div className='text-center'>
            <form onSubmit={submitbutton}>
              <textarea style={{ width: "80%" }} onChange={(event) => setcaption(event.target.value)} value={caption} className="m-2" placeholder="enter caption" />
              <input multiple="" accept='image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime' onChange={uploadImage} name="file" style={{ display: "none" }} id="file-input" type="file"/><br />
              <button disabled={uploadbuttonstatus} className='m-2 btn btn-success' style={{ width: "80%" }} data-bs-dismiss="modal" type="submit">upload</button><br />

              <br />

            </form>

          </div>
        </div>
      </div>
    </div>
  </>
}
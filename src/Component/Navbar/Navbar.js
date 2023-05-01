import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { SearchModal } from '../Modal/Search.modal';
import { AddPostModal } from '../Modal/AddPost.madal';
export function Navebar() {
  const { user } = useSelector((state) => state.user)

  return <>
    <ToastContainer />
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top mb-4" style={{ backgroundColor: "#4abdac" }}>
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
              <i className='fas fa-crown  crown' style={{ fontSize: "25px", color: "#f7b733" }}></i>
            </a>
            <span className='post'>
              <a className="nav-link active" data-bs-toggle="modal"
                data-bs-target="#addPostModal" aria-current="page" >
                <i className="bi bi-plus-square me-3 AddPost"></i>
              </a>
            </span>
            <div className="d-flex">
              <div className="search me-3">
                {/* <i className="bi bi-search" ></i> */}
                <i className="bi bi-search-heart" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
              </div>
              <a className="nav-link" href="#">
                <i className="bi bi-bell-fill" style={{ color: "lightGray" }}></i>
              </a>
            </div>
            <Link className="nav-link" to="/profile">
              <img src="/img/user.png" style={{ height: "25px", width: "25px", borderRadius: "50%" }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <AddPostModal/>
    <SearchModal/>
  </>
}
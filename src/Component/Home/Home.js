import { Navebar } from "../Navbar/Navbar"
import "./home.css";
import { fetchpost } from "../../redux-conflig/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export function Home() {

    const dispach = useDispatch();
    const { postlist, isloading } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.user)
    let file = "http://localhost:3000/public/images/";
    useEffect(() => {
        dispach(fetchpost());
    }, [])

    postlist.map((item)=>{
        console.log(item)
    })

    return <>
        <Navebar />
        <div className="HomeContainer containerfluid">
            {postlist.map((posts) => 
                <div className="HomeScrollBox ">
                <div className="PostHeader  mt-1">
                    <div className="p-2">
                        <img src="#" className="PostHeaderProfile ms-2" />
                        <span className="ms-3">{posts.userId.name}</span>
                    </div>
                    <div className="p-2">
                        <i className="bi bi-three-dots me-2 Ellipsis"></i>
                    </div>
                </div>
                <hr className="HeaderLine mt-1" />
                <div className="PostBox bg-secondary">
                    <img className="Posts" src={file+posts.file}/>
                </div>
                <div className="PostFunctionality">
                    <div className="">
                        <i className="bi bi-heart-fill ms-2" style={{ fontSize: '20px', color: "#ea1b3d" }}></i>
                    </div>
                    <div className="">
                        <i className="bi bi-bookmark-fill me-2 " style={{ fontSize: '20px', color: "rgb(0, 94, 255)" }}></i>
                    </div>
                </div>
                <hr className="HeaderLine mt-1" />
                <div style={{ width: "90%", marginTop: "-12px" }}>
                    105 likes
                </div>
                <div style={{ width: "90%", marginTop: "-1px", fontSize: "15px" }}>
                    My name is cheeku singh and i am gentleman
                </div>
                <div style={{ width: "90%", marginTop: "-5px" }}>
                    <a className="ViewComments" href="#">View all comments</a>
                </div>
                <div style={{ width: "90%", marginTop: "-5px" }} className="d-flex " >
                    <div style={{ width: "93%" }}>
                        <input className="AddComment " type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="ShareComment">
                        <a><i className="bi bi-send-fill"></i></a>
                    </div>
                </div>
                <hr className="mt-1 w-100" style={{ border: "1px solid black" }} />
            </div>
            )}
        </div>
    </>
}
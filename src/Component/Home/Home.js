import { Navebar } from "../Navbar/Navbar"
import "./home.css";
import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import avtar from '../../avtar1.png';
import api from "../../Webapi/api";
import Loader from "../Loader/loader";
import { createAsyncThunk } from "@reduxjs/toolkit";
import InfiniteScroll from "react-infinite-scroller";

export function Home() {
    const [comment, setcomment] = useState("");
    const dispach = useDispatch();
    const { user } = useSelector((state) => state.user)
    const [loader, setloader] = useState(true)
    const [postlist, setpostlist] = useState([]);
    const [page, setPage] = useState(1);

    const [commentlist, setcommentlist] = useState([]);
    const fetchpost = createAsyncThunk("fetchPost", async () => {
        try {
            let response = await axios.get(api.getpost + `?page=${page}`);
            if (response) {
                setloader(false);
                setPage(page + 1)
                setpostlist([...postlist, ...response.data.result]);
            }
        }
        catch (err) {
            console.log(err)
            toast.error("something went wrong");
        }
    })

    const viewComment = async (postid) => {
        try {
            let response = await axios.post(api.getcomment, { userPostId: postid });
            setcommentlist(response.data.result)
            if (!response.data.result.length) {
                toast.info("no any comment on this post")
            }
        }
        catch (err) {
            console.log(err);
            toast.error("intenal server error")
        }
    }
    const sendcomment = async (userPostId) => {
        if (!comment)
            toast.error("please enter comment");
        else {
            try {
                let response = await axios.post(api.postcomment, { friendUserId: user._id, userPostId: userPostId, comment: comment });
                console.log(response)
                if (response)
                    setcomment("")
                toast.success("comment posted")

            }
            catch (err) {
                toast.error("intenal server error")
            }
        }
    }
    useEffect(() => {
        dispach(fetchpost());
    }, [])


    return <>
        <Navebar />
        <ToastContainer/>
        <div className="HomeContainer containerfluid">
            <InfiniteScroll
                dataLength={postlist.length}
                next={fetchpost}
                hasMore={postlist.length < 100}
                loader={<Loader />}
                endMessage={<p>Data End...</p>}>

                {postlist.map((posts) =>
                    <div className="HomeScrollBox ">
                        <div className="PostHeader  mt-1">
                            <div className="p-2">
                                <img src={avtar} className="PostHeaderProfile ms-2" />
                                <span className="ms-3">{posts.userId.name}</span>
                            </div>
                            <div className="p-2">
                                <i className="bi bi-three-dots me-2 Ellipsis"></i>
                            </div>
                        </div>
                        <hr className="HeaderLine mt-1" />
                        <div className="PostBox bg-secondary">
                            <img className="Posts" src={api.file+posts.file} />
                        </div>
                        <div className="PostFunctionality">
                            <div className="">
                                {posts.likeItems.some((item) => item.friendUserId == "643929361e34d71a3eec2d54") ?
                                    <i className="bi bi-heart-fill ms-2" style={{ fontSize: '20px', color: "#ea1b3d" }}></i> :
                                    <i className="bi bi-suit-heart ms-2" style={{ fontSize: '20px', color: "#ea1b3d" }}></i>
                                }
                            </div>
                            <div className="">
                                <i className="bi bi-bookmark-fill me-2 " style={{ fontSize: '20px', color: "rgb(0, 94, 255)" }}></i>
                            </div>
                        </div>
                        <hr className="HeaderLine mt-1" />
                        <div style={{ width: "90%", marginTop: "-12px" }}>
                            {posts.likeItems.length}: likes
                        </div>
                        <div style={{ width: "90%", marginTop: "-1px", fontSize: "15px" }}>
                            {posts.caption}
                        </div>
                        <div style={{ width: "90%", marginTop: "-5px" }}>
                            <a onClick={() => viewComment(posts._id)} className="ViewComments" href="#">View all comments</a>
                        </div>
                        <div style={{ width: "90%", marginTop: "-5px" }} className="d-flex " >
                            <div style={{ width: "93%" }}>
                                <input onChange={(event) => setcomment(event.target.value)} className="AddComment " value={comment} type="text" placeholder="Add a comment..." />
                            </div>
                            <div className="ShareComment">
                                <button onClick={() => sendcomment(posts._id)} className="" style={{ outline: "none", border: "none", background: "none" }}><i className="bi bi-send-fill"></i></button>
                            </div>
                        </div>
                        <hr className="mt-1 w-100" style={{ border: "1px solid black" }} />
                    </div>
                )}
            </InfiniteScroll>
        </div>
    </>
}
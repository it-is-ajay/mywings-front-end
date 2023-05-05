import { Navebar } from "../Navbar/Navbar"
import _ from 'lodash';
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
import { fetchPost, setPosts } from "../../redux-conflig/postSlice";
import { removePost, savePost } from "../../redux-conflig/userSlice";
import { ViewCommentModal } from "../Modal/ViewComment.modal";
import { Profile } from "../Profile/FreindProfile";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [comment, setcomment] = useState("");
    const { user } = useSelector((state) => state.user)
    const { postList, isLoading, error } = useSelector(state => state.posts);
    const Navigate = useNavigate();
    const dispach = useDispatch();


    // do like
    const doLike = async (postId) => {
        const divElement = document.getElementById("div" + postId);
        let response = await axios.post(api.doLike, { postId, friendUserId: user._id });
        if (response.data.status) {
            let postIndex = await postList.findIndex((posts) => posts._id == postId);
            const iconElement = divElement.querySelector('i');
            if (iconElement && iconElement.classList.contains('bi-suit-heart')) {
                let updatedPost = await { ...postList[postIndex], likeItems: [...postList[postIndex].likeItems, { friendUserId: user._id }] };
                let updatedPostList = [...postList.slice(0, postIndex), updatedPost, ...postList.slice(postIndex + 1)];
                dispach(setPosts(updatedPostList));
            } else if (iconElement && iconElement.classList.contains('bi-heart-fill')) {
                let likeIndex = await postList[postIndex].likeItems.findIndex((data) => data.friendUserId == user._id);
                let updatedLikeItems = [...postList[postIndex].likeItems.slice(0, likeIndex), ...postList[postIndex].likeItems.slice(likeIndex + 1)];
                let updatedPost = { ...postList[postIndex], likeItems: updatedLikeItems };
                let updatedPostList = [...postList.slice(0, postIndex), updatedPost, ...postList.slice(postIndex + 1)];
                dispach(setPosts(updatedPostList));
            }
        } else {
            toast.error("intenal server error")
        }
    }
    const doLikeDebounced = _.debounce(doLike, 500);

    const handleLikeClick = (postId) => {
        doLikeDebounced(postId);
    }
    // do like



    const viewComment = async (postid) => {
        // try {
        //     let response = await axios.post(api.getcomment, { userPostId: postid });
        //     if (!response.data.result.length) {
        //         toast.info("no any comment on this post")
        //     }
        // }
        // catch (err) {
        //     console.log(err);
        //     toast.error("intenal server error")
        // }
    }


    // add comment
    const sendcomment = async (postId) => {
        if (!comment)
            toast.error("please enter comment");
        else {
            try {
                setcomment("")
                let response = await axios.post(api.postcomment, { friendUserId: user._id, postId, comment: comment });
                if (response)
                    toast.success("comment posted")

            }
            catch (err) {
                toast.error("intenal server error")
            }
        }
    }
    // add comment

    // save posts
    const savePosts = async (postId) => {
        const divElement = document.getElementById("save" + postId);
        const iconElement = divElement.querySelector('i');
        if (iconElement && iconElement.classList.contains('bi-bookmark')) {
            dispach(savePost({ postId }));
        } else if (iconElement && iconElement.classList.contains('bi-bookmark-fill')) {
            dispach(removePost(user.savePosts.findIndex((item) => item.postId == postId)));
        }
        await axios.post(api.savePost, { userId: user._id, postId });
    }
    // save posts

    const viewFreindProfile = async (userId) => {
        Navigate("/userFreindProfile",{ state: { userId } });
    }   

    useEffect(() => {
        (!postList.length) && dispach(fetchPost());
    }, [])


    return <>
        <Navebar />
        <ToastContainer />
        <div className="d-flex justify-content-center">
            {(isLoading) && <Loader />}
        </div>
        <div className="HomeContainer containerfluid">
            {postList.map((posts, index) =>
                <div key={index} className="HomeScrollBox ">
                    <div className="PostHeader  mt-1">
                        <div className="p-2">
                            <img onClick={()=>{viewFreindProfile(posts.userId._id)}} src={avtar} className="PostHeaderProfile ms-2" style={{cursor:"pointer"}}/>
                            <span className="ms-3">{posts.userId.name}</span>
                        </div>
                        <div className="p-2">
                            <div id="container" >
                                <div id="menu-wrap">
                                    <input type="checkbox" className="toggler" />
                                    <div className="dots">
                                        <div></div>
                                    </div>
                                    <div className="menu">
                                        <div>
                                            <ul>
                                                <li><a href="#" className="link">View Profile</a></li>
                                                <li><a href="#" className="link">Save</a></li>
                                                <li><a href="#" className="link">Report</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="HeaderLine mt-1" />
                    <div className="PostBox bg-secondary">
                        <img className="Posts" src={api.file + posts.file} />
                    </div>
                    <div className="PostFunctionality">
                        {/* dynamic like button */}
                        <div className="" id={"div" + posts._id}>
                            {posts.likeItems.some((item) => item.friendUserId == user._id)
                                ? <i onClick={() => { handleLikeClick(posts._id) }} className="bi bi-heart-fill ms-2" style={{ fontSize: '20px', color: "#ea1b3d",cursor:"pointer" }}></i>
                                : <i onClick={() => { handleLikeClick(posts._id) }} className="bi bi-suit-heart ms-2 test" style={{ fontSize: '20px', color: "#ea1b3d",cursor:"pointer" }}></i>
                            }
                        </div>
                        {/* dynamic like button */}

                        {/* dynamic save button */}
                        <div className="" id={"save" + posts._id}>
                            {user.savePosts.some((item) => item.postId == posts._id)
                                ? <i onClick={() => { savePosts(posts._id) }} className="bi bi-bookmark-fill me-2 " style={{ fontSize: '20px', color: "rgb(0, 94, 255)",cursor:"pointer" }}></i>
                                : <i onClick={() => { savePosts(posts._id) }} className="bi bi-bookmark me-2 " style={{ fontSize: '20px', color: "rgb(0, 94, 255)",cursor:"pointer" }}></i>
                            }
                        </div>
                        {/* dynamic save button */}
                    </div>
                    <hr className="HeaderLine mt-1" />

                    {/* like count */}
                    <div style={{ width: "90%", marginTop: "-12px" }}>
                        {posts.likeItems.length}: likes
                    </div>
                    {/* like count */}

                    {/* post caption */}
                    <div style={{ width: "90%", marginTop: "-1px", fontSize: "15px" }}>
                        {posts.caption}
                    </div>
                    {/* post caption */}


                    <div style={{ width: "90%", marginTop: "-5px" }}>
                        <a onClick={() => viewComment(posts._id)} className="ViewComments" href="#popup">View all comments</a>
                    </div>

                    {/* add comment */}
                    <div style={{ width: "90%", marginTop: "-5px" }} className="d-flex " >
                        <div style={{ width: "93%" }}>
                            <input onChange={(event) => setcomment(event.target.value)} className="AddComment " value={comment} type="text" placeholder="Add a comment..." />
                        </div>
                        <div className="ShareComment">
                            <button onClick={() => sendcomment(posts._id)} className="" style={{ outline: "none", border: "none", background: "none" }}><i className="bi bi-send-fill"></i></button>
                        </div>
                    </div>
                    {/* add comment */}

                    <hr className="mt-1 w-100" style={{ border: "1px solid black" }} />
                </div>
            )}
        </div>
        <ViewCommentModal />
    </>
}
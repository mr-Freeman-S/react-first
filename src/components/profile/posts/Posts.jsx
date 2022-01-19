import React from "react";
import Post from "./post/Post";
import s from './Posts.module.css'


const Posts = () => {
    return (
    <div>My post
        <div>
            <textarea>Enter new post</textarea>
            <button>add post</button>
        </div>
        <Post />
        <Post />
        <Post />
    </div>
    );
}

export default Posts;
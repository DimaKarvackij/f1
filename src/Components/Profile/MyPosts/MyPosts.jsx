import React from "react";
import s from './MyPosts.module.css' ;
import Post from "./Posts/Post";


const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi how  are you' LikeCoud="0" />
        <Post message=' my first post' LikeCoud="23" />
      </div>
    </div>
  );
};

export default MyPosts;

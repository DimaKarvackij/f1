import React from "react";
import s from './Post.module.css' ;

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://cakeshop.com.ua/images/6eRbfrsEzMM/h:1000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC85NDc0XzEuanBn"></img>
        { props.message }
        <div>
          <span>Like</span> { props.LikeCoud}
        </div>
      </div>
    </div>
  );
};

export default Post;

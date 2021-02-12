import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";

const MyPosts = (props) => {
  const postElements = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ));

  const textElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    const action = {
      type: "UPDATE-POST-TEXT",
      text: textElement.current.value,
    };
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea
            ref={textElement}
            value={props.newTextPost}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;

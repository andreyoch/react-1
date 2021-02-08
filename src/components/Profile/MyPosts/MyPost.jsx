import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import * as React from "react";

const MyPosts = (props) => {
  const postElements = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ));

  const textElement = React.createRef();

  let addPost = () => {
    props.addPosts();
  };

  let onPostChange = () => {
    props.updateNewPostText(textElement.current.value);
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

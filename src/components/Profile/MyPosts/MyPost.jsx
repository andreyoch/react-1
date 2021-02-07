import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const PostsData = [
    { id: 1, message: "This is my the newest post", likeCount: 12 },
    { id: 2, message: "I know how to use prop`s!", likeCount: 15 },
    { id: 3, message: "It's my first post", likeCount: 25 },
  ];
  const postElements = PostsData.map((p) => (
    <Post message={p.message} id={p.id} likeCount={p.likeCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;

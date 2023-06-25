import MyButton from "./UI/button/MyButton";

function PostItem({ post, number, removeCb }) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => removeCb(post)}>Удалить</MyButton>
      </div>
    </div>
  );
}
export default PostItem;

import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";



function PostItem({ post, removeCb }) {
  let navigate = useNavigate();
  console.log(navigate);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => removeCb(post)}>Удалить</MyButton>
      </div>
    </div>
  );
}
export default PostItem;

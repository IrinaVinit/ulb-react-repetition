import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

function PostList({ posts, title, removeCb }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
      {posts.map((post, index) => (
        <CSSTransition key={post.id}
        timeout={500}
        classNames='post'>
        <PostItem removeCb={removeCb} number={index + 1} post={post}  />
        </CSSTransition>
      )
      
      )}
      </TransitionGroup>
     
    </div>
  );
}

export default PostList;

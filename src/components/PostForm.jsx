import MyButton from "./UI/button/MyButton";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";

function PostForm({ createCb }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    console.log(newPost);
    createCb(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      {/* неуправляемый компонент - напрямую манипулирует дом деревом */}
      <MyInput
        type="text"
        placeholder="Описание"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

export default PostForm;

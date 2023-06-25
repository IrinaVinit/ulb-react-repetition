import React, { useRef, useState } from "react";
//import Counter from "./components/Counter";
import "./app.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js1", body: "descr" },
    { id: 2, title: "Js2", body: "descr" },
    { id: 3, title: "Js3", body: "descr" },
    { id: 4, title: "Js4", body: "descr" },
  ]);

  const [title, setTitle] = useState("");
const inputRef = useRef();


  const addNewPost = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название" value={title} onChange={e => setTitle(e.target.value)}/>
        {/* неуправляемый компонент - напрямую манипулирует дом деревом */}
        <MyInput ref={inputRef} type="text" placeholder="Описание" />
        {/* <input ref={inputRef} type="text"></input> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;


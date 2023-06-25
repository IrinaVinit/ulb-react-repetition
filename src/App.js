import React, { useState } from "react";
//import Counter from "./components/Counter";
import './app.css';
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Js1", body: 'descr'},
    {id: 2, title: "Js2", body: 'descr'},
    {id: 3, title: "Js3", body: 'descr'},
    {id: 4, title: "Js4", body: 'descr'}
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: "P1", body: 'descr'},
    {id: 2, title: "P2", body: 'descr'},
    {id: 3, title: "P3", body: 'descr'},
    {id: 4, title: "P4", body: 'descr'}
  ]);

  return (
    <div className="App">
      <PostList posts = {posts} title='Список постов 1'/>
      <PostList posts = {posts2} title='Список постов 2'/>
    </div>
  );
}

export default App;

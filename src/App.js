import React, { useMemo, useState } from "react";
import "./app.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  // посты с сервера
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);


const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  // получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // console.log(response);
  setPosts(response.data)
}


  return (
    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>
      <MyButton
        style={{ marginTop: 30 }}
        onClick={() => {
          setModal(true);
        }}
      >
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createCb={createPost} />
      </MyModal>
      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        removeCb={removePost}
        posts={sortedAndSearchedPosts.length ? sortedAndSearchedPosts : posts}
        title="Список постов 1"
      />
    </div>
  );
}

export default App;

import React, { useMemo, useRef, useState } from "react";
//import Counter from "./components/Counter";
import "./app.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "iii", body: "op" },
    { id: 2, title: "hhh", body: "dwe" },
    { id: 3, title: "rrr", body: "nh" },
    { id: 4, title: "nnn", body: "drt" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

    const sortedPosts = useMemo(() => {
    console.log("Отработала");
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sortValue) => {
    setSelectedSort(sortValue);
  };

  return (
    <div className="App">
      <PostForm createCb={createPost} />
      <hr style={{ margin: "15px" }}></hr>
      <div>
        <MyInput
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>

      {posts.length ? (
        <PostList removeCb={removePost} posts={sortedPosts} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./app.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPagesArray, getPagesCount } from "./utils/pages";

function App() {
  // посты с сервера
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  console.log(totalPages);
  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pagesArray = getPagesArray(totalPages);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  // получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

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

      {postError && <h1>Произошла ошибка {postError}</h1>}

      {isPostsLoading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <PostList
          removeCb={removePost}
          posts={sortedAndSearchedPosts.length ? sortedAndSearchedPosts : posts}
          title="Список постов 1"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span 
          onClick={()=> setPage(p)}
          key={p} 
          className={page===p ? 'page page__current' : 'page'}>{p}</span>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../components/API/PostService";
import { useState } from "react";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, errorComments] = useFetching(async (id) => {
    const response = await PostService.getComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id)
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h2>Комментарии</h2>
      {isCommentsLoading ? <Loader/> : 
      <div>
        {comments.map(comm => 
            <div style={{marginTop: 15}} key={comm.id}>
                <h3>{comm.email}</h3>
                <div>{comm.body}</div>
            </div>)}
      </div>
      }
    </div>
  );
}

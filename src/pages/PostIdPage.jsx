import { useParams } from "react-router-dom"


export default function PostsIdPage() {
    const params = useParams();
    console.log(params);
    return (
<div>
    <h1>Вы открыли страницу поста c ID = {params.id}</h1>
</div>
    )
}
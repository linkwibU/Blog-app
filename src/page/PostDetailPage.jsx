import { useParams } from "react-router-dom";

export default function PostDetailPage(){
    const {postId} = useParams();
    return(
        <h3>chi tiết bài post {postId}</h3>
    )
}
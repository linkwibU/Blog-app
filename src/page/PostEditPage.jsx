import { useContext, useEffect } from "react";
import PostForm from "../component/PostForm"
import { BlogContext } from "../context/BlogContext";
import { Navigate, useNavigate } from "react-router-dom";
export default function PostEditPage() {
    const navigate = useNavigate();
    const {loadPostId, loadEditPostId} = useContext(BlogContext);
    async function handleEdit(){
        loadPostId();
        try {
            const NewPost = await loadEditPostId(formData);
            console.log("in ra: ", NewPost);
            navigate(`admin/posts/new/${NewPost.id}`);
        }
        catch(err){
            console.error("Tạo mới thất bại", err);
            
        }
    }
    useEffect(() => {
        loadEditPostId();
    }, [])


    return (
        <div>
            <h1>Chỉnh sửa bài viết </h1>
            <p>Cập nhập nội dung bài viết </p>
            <PostForm  initialValues={post} onSubmit={handleEdit} submitLabel="Chỉnh sửa"/>
        </div>
    )
}
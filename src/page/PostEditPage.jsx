import { useContext, useEffect, useState } from "react";
import PostForm from "../component/PostForm";
import { BlogContext } from "../context/BlogContext";
import { useNavigate, useParams } from "react-router-dom";

export default function PostEditPage() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const { loadPostId, loadEditPostId } = useContext(BlogContext);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                setLoading(true);
                const updatePost = await loadPostId(postId);
                setPost(updatePost);
            } catch (err) {
                console.error("Tạo mới thất bại", err);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [loadPostId, postId]);

    async function handleEdit(formData) {
        try {
            const update = await loadEditPostId(formData, postId);
            console.log("in ra: ", update);
            navigate(`/posts/${postId}`);
        } catch (err) {
            console.error("Tạo mới thất bại", err);
        }
    }

    return (
        <div>
            <h1>Chỉnh sửa bài viết</h1>
            <p>Cập nhập nội dung bài viết</p>
            {loading ? (
                <p>Đang tải bài viết...</p>
            ) : (
                <PostForm initialValues={post} onSubmit={handleEdit} submitLabel="Chỉnh sửa" />
            )}
        </div>
    );
}

import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
export default function PostDetailPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();
    async function fetchPostId() {
        try {
            setLoading(true);
            const res = await fetch(`https://post365-api.onschoolbootcamp.edu.vn/posts/${postId}`, {
                method: "GET"
            });
            if (res.status === 404) {
                setPosts(null);
                setError("bài viết không tồn tại");
                return;
            }
            if (!res.ok) {
                throw new Error("Không thể tải bài viết");
            }

            const data = await res.json();
            console.log(data);
            setPosts(data);

            if (!data) {
                setPost(null);
                setError("Bài viết không tồn tại");
                return;
            }
        }
        catch (err) {
            setError("vui lòng thử lại");
            console.error(err.message);

        }
        finally {
            setLoading(false);
        }
    }
    //useEffect để hiện ra màn hình trước khi có điều kiện
    useEffect(() => {
        fetchPostId();
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error || !posts) {
        return (
            < div >
                <p>{error}</p>
                <Link to="/posts">Back to posts</Link>
            </div >
        )

    }

    return (
        <div style={{display:'flex', flexDirection:'column', width: '40em'}}>
            {/* <h3>chi tiết bài post {postId}</h3> */}
            <Link to="/posts" style={{textDecoration:'none'}} className="text-secondary">← Quay lại danh sách</Link>
            <p>{posts.tags}</p>
            <h1>{posts.title}</h1>
            <div style={{display:'flex', flexDirection:'row', gap:'20px'}} className="text-secondary">
                <p>🧑{posts.author}</p>
                <p>📝{posts.createdAt}</p>
            </div>
            <p>{posts.content}</p>
            <hr />
           <button onClick={() => navigate(-1)} className="btn btn-light"> ← Xem các bài viết khác</button>
            
        </div>

    )
}

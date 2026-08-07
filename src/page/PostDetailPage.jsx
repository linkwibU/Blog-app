import { Link, useParams } from "react-router-dom";
import { useEffect, useState, } from "react";
export default function PostDetailPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { postId } = useParams();
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
        <>
            <h3>chi tiết bài post {postId}</h3>
            <p>{posts.content}</p>
            <Link to="/posts">← Back to posts</Link>
        </>

    )
}
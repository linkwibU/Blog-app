import { useEffect, useState } from "react";
import PostList from "../component/PostList";
export default function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchCourse() {
    try {
      setLoading(true);
      const res = await fetch("https://post365-api.onschoolbootcamp.edu.vn/posts/", {
        method: "GET"
      });
      if (!res.ok) {
        throw new Error("Không thể tải bài viết");
      }
      const data = await res.json();
      console.log(data);
      setPosts(data);
    }
    catch (err) {
      setError("vui lòng thử lại");
      console.error(err.message);

    }
    finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCourse();
  }, [])


  return (
    <div>
      <h1>Bài viết mới nhất</h1>
      <p>Khám phá các bài viết về công nghệ</p>
      {loading && <p>Loading...</p>}
      {error && (
        <>
          <p>{error}</p>
          <button>retry</button>
        </>
      )
      }
      {loading && !error && posts.length === 0 && (
        <p>Chưa có bài viết nào</p>
      )}
      {!loading && !error && posts.length > 0 && (
        <PostList posts={posts} fetchCourse={fetchCourse} />
      )}
    </div>

  )
}
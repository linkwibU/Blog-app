import { useContext, useEffect, useState } from "react";
import PostList from "../component/PostList";
import {  BlogContext } from "../context/BlogContext";
export default function PostListPage() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const {posts, isLoadingList, listError, dispatch, loadPosts} = useContext(BlogContext);
  useEffect(() => {
    loadPosts();
  }, [])


  return (
    <div>
      <h1>Bài viết mới nhất</h1>
      <p>Khám phá các bài viết về công nghệ</p>
      {isLoadingList && <p>Loading...</p>}
      {listError && (
        <>
          <p>{listError}</p>
          <button>retry</button>
        </>
      )
      }
      {!isLoadingList && !listError && posts.length === 0 && (
        <p>Chưa có bài viết nào</p>
      )}
      {!isLoadingList && !listError && posts.length > 0 && (
        <PostList />
      )}
    </div>

  )
}
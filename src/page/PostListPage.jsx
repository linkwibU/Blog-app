import { useContext, useEffect, useState } from "react";
import PostList from "../component/PostList";
import {  BlogContext } from "../context/BlogContext";
import Heading from "../component/atoms/Heading";
export default function PostListPage() {
  const { loadPosts, isLoadingList, listError , posts} = useContext(BlogContext);
  useEffect(() => {
    loadPosts();
  }, [])


  return (
    <div>
      <Heading label="Bài viết mới nhất"/>
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
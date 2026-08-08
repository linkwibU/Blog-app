import { createContext, useContext, useEffect, useState } from "react"
import PostForm from "../component/PostForm"
import { BlogContext } from "../context/BlogContext";
import { Navigate, useNavigate } from "react-router-dom";
import Heading from "../component/atoms/Heading";
export default function PostCreatePage() {
    const navigate = useNavigate();
    const { loadCreate } = useContext(BlogContext);
    async function handleCreate(formData) {
        try {
            const NewPost = await loadCreate(formData);
            console.log("newp: ", NewPost);
            // navigate(`admin/posts/new`);
            console.log("thành công post");
        }
        catch(err){
            console.error("Tạo mới thất bại", err);
        }
    }


    return (
        <div>
            <Heading label="Tạo bài viết mới"/>
            <p>Nhập thông tin bài viết vào form bên dưới</p>
            <PostForm initialValues={{}} onSubmit={handleCreate} submitLabel="Tạo mới" />
        </div>

    )
}
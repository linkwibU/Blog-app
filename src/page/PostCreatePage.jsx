import PostForm from "../component/PostForm"
export default function PostCreatePage(){
   async function onSubmit(){
    
   } 
    return(
        <div>
            <h1>Tạo bài viết mới</h1>
            <p>Nhập thông tin bài viết vào form bên dưới</p>
            <PostForm />
        </div>
        
    )
}
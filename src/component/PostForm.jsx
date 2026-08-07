import { use, useState } from "react";

export default function PostForm() {
    const [form, setForm] = useState({
        title: "",
        slug: "",
        author: "",
        excerpt: "",
        content: "",
        tags: "",
        status: ""
    })
    const [errorTitle, setErrorTitle] = useState("");
    const [errorContent, setErrorContent] = useState("");
    const [errorExcerpt, setErrorExcerpt] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        return (!validateForm())
    }
    function validateForm() {
        let isValid = true;
        if (!title.trim()) {
            setErrorTitle("Vui lòng nhập họ tên");
            isValid = false;
        }
        if (!content.trim()) {
           setErrorContent('Vui lòng nhập nội dung khoá học');
           isValid = false;
        }
        if (!excerpt.trim()) {
           setErrorExcerpt('Vui lòng nhập nội dung khoá học');
           isValid = false;
        }
        return isValid;
    }
    return (
        <form style={{ display: 'flex', alignItems: "center", flexDirection:'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '30em', gap: '1em' }}>
                <label htmlFor="title">Tiêu đề</label>
                {errorTitle && <p>{errorTitle}</p>}
                <input 
                style={{ gridColumn: 'span 2' }} 
                type="text" 
                // value={title}
                />
                <label htmlFor="slug">Slug</label>
                <input 
                style={{ gridColumn: 'span 2' }} 
                type="url"
                // value={slug} 
                />


                <label htmlFor="author">Tác giả</label>
                <label htmlFor="status">Trạng thái</label>
                <input id="author" name="author" type="text" />
                <select id="status" name="status">
                    <option value="">Chọn trạng thái</option>
                    <option value="draft">Bản nháp</option>
                    <option value="published">Đã đăng</option>
                </select>


                <label htmlFor="summary">Tóm tắt</label>
                {errorExcerpt && <p>{errorExcerpt}</p>}
                <textarea style={{ gridColumn: 'span 2' }} type="text"></textarea>
                <label htmlFor="content">Nội dung</label>
                {errorContent && <p>{errorContent}</p>}
                <textarea style={{ gridColumn: 'span 2' }} type="text"></textarea>

                <label style={{ gridColumn: 'span 2' }} htmlFor="tags">Tags</label>
                <input style={{ gridColumn: 'span 2' }} type="text" />
            </div>
            <button type="button" onClick={handleSubmit} style={{width:'10em', height:'4em', marginTop:'1em'}}>Tạo mới</button>
        </form>
    )
}
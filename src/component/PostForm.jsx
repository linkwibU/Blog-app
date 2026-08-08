import {  useState } from "react";

export default function PostForm({ initialValues, onSubmit, submitLabel }) {
    const [form, setForm] = useState({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        author: initialValues.author || "",
        status: initialValues.status || "",
        summary: initialValues.summary || "",
        content: initialValues.content || "",
        tags: Array.isArray(initialValues.tags) ? initialValues.tags.join(", ") : (initialValues.tags || "")
        
    })
    const [errorTitle, setErrorTitle] = useState("");
    const [errorContent, setErrorContent] = useState("");
    const [errorExcerpt, setErrorExcerpt] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        onSubmit(form);
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    function validateForm() {
        let isValid = true;
        if (!form.title.trim()) {
            setErrorTitle("Vui lòng nhập họ tên");
            isValid = false;
        }
        if (!form.content.trim()) {
            setErrorContent('Vui lòng nhập nội dung khoá học');
            isValid = false;
        }
        if (!form.excerpt.trim()) {
            setErrorExcerpt('Vui lòng nhập nội dung khoá học');
            isValid = false;
        }
        return isValid;
    }
    return (
        <form style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '30em', gap: '1em' }}>
                <label htmlFor="title">Tiêu đề</label>
                {errorTitle && <p className="text-danger">{errorTitle}</p>}
                <input
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                    name="title"
                />
                <label htmlFor="slug">Slug</label>
                <input
                    style={{ gridColumn: 'span 2' }}
                    type="url"
                    value={form.slug}
                    onChange={handleChange}
                    name="slug"
                />


                <label htmlFor="author">Tác giả</label>
                <label htmlFor="status">Trạng thái</label>
                <input
                    type="text"
                    value={form.author}
                    onChange={handleChange}
                    name="author"
                />
                <select id="status"  value={form.status} onChange={handleChange} name="status">
                    <option value="">Chọn trạng thái</option>
                    <option value="draft">draft</option>
                    <option value="published">published</option>
                </select>


                <label htmlFor="summary">Tóm tắt</label>
                {errorExcerpt && <p className="text-danger">{errorExcerpt}</p>}
                <textarea
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.summary}
                    onChange={handleChange}
                    name="summary"
                ></textarea>
                <label htmlFor="content">Nội dung</label>
                {errorContent && <p className="text-danger">{errorContent}</p>}
                <textarea
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.content}
                    onChange={handleChange}
                    name="content"
                ></textarea>

                <label style={{ gridColumn: 'span 2' }} htmlFor="tags">Tags</label>
                <input
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.tags}
                    onChange={handleChange}
                    name="tags"
                />
            </div>
            <button type="submit" onClick={handleSubmit} style={{ width: '10em', height: '4em', marginTop: '1em' }}>{submitLabel}</button>
        </form>
    )
}
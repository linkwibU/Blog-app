import { useEffect, useState } from "react";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
import Textarea from "./atoms/Textarea";
import FormField from "./molecules/FormField";
export default function PostForm({ initialValues, onSubmit, submitLabel }) {
    const [form, setForm] = useState({
        id: initialValues?.id ?? "",
        title: initialValues?.title || "",
        slug: initialValues?.slug || "",
        author: initialValues?.author || "",
        status: initialValues?.status || "",
        summary: initialValues?.summary || "",
        content: initialValues?.content || "",
        tags: Array.isArray(initialValues?.tags) ? initialValues.tags.join(", ") : (initialValues?.tags || "")
    });

    useEffect(() => {
        setForm({
            id: initialValues?.id ?? "",
            title: initialValues?.title || "",
            slug: initialValues?.slug || "",
            author: initialValues?.author || "",
            status: initialValues?.status || "",
            summary: initialValues?.summary || "",
            content: initialValues?.content || "",
            tags: Array.isArray(initialValues?.tags) ? initialValues.tags.join(", ") : (initialValues?.tags || "")
        });
    }, [initialValues]);
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
        setErrorTitle("");
        setErrorContent("");
        setErrorExcerpt("");

        if (!form.title.trim()) {
            setErrorTitle("Vui lòng nhập tiêu đề");
            isValid = false;
        }
        if (!form.content.trim()) {
            setErrorContent('Vui lòng nhập nội dung khoá học');
            isValid = false;
        }
        if (!form.summary.trim()) {
            setErrorExcerpt('Vui lòng nhập tóm tắt khoá học');
            isValid = false;
        }
        return isValid;
    }
    return (
        <form style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '30em', gap: '1em' }}>
                <FormField 
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                    name="title" 
                    label="Tiêu đề" 
                    error={errorTitle}
                    style={{ gridColumn: 'span 2' }}               
                />

                <FormField
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.slug}
                    onChange={handleChange}
                    name="slug"
                    label="Slug"                
                />

                <label htmlFor="author">Tác giả</label>
                <label htmlFor="status">Trạng thái</label>
                <Input
                    type="text"
                    value={form.author}
                    onChange={handleChange}
                    name="author"
                />
                <select id="status" value={form.status} onChange={handleChange} name="status">
                    <option value="">Chọn trạng thái</option>
                    <option value="draft">draft</option>
                    <option value="published">published</option>
                </select>


                <label htmlFor="summary">Tóm tắt</label>
                {errorExcerpt && <p className="text-danger">{errorExcerpt}</p>}
                <Textarea
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.summary}
                    onChange={handleChange}
                    name="summary"
                ></Textarea>
                <label htmlFor="content">Nội dung</label>
                {errorContent && <p className="text-danger">{errorContent}</p>}
                <Textarea
                    style={{ gridColumn: 'span 2' }}
                    type="text"
                    value={form.content}
                    onChange={handleChange}
                    name="content"
                ></Textarea>
                
                
                <FormField 
                label="Tags"
                style={{ gridColumn: 'span 2' }}
                type="text"
                value={form.tags}
                onChange={handleChange}
                name="tags"                
                />

            </div>
            <Button label={submitLabel} type="submit" onClick={handleSubmit} style={{ width: '10em', height: '3em', marginTop: '1em' }} className="btn btn-primary" />
        </form>
    )
}
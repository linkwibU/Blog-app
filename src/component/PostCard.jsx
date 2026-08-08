import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { BlogContext } from "../context/BlogContext"
import Button from "./atoms/Button";
import PostMeta from "./molecules/PostMeta";
export default function PostCard() {
    const { posts, loadDelete } = useContext(BlogContext);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deletePostId, setDeletePostId] = useState(null);
    const [deletePostTitle, setDeletePostTitle] = useState("");

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function openConfirmDelete(postId, postTitle) {
        setDeletePostId(postId);
        setDeletePostTitle(postTitle);
        setShowConfirm(true);
    }

    function closeConfirm() {
        setShowConfirm(false);
        setDeletePostId(null);
        setDeletePostTitle("");
    }

    async function confirmDelete() {
        try {
            const data = await loadDelete(deletePostId);
            closeConfirm();
        }
        catch (err) {
            console.error(err.message);
            closeConfirm();
        }
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em' }}>
            {
                posts.map(course => (
                    <div className="border border-dark card" style={{ display: 'flex', flexDirection: 'column', border: "2px solid", padding: '1em' }}
                        key={course.id}>
                        <PostMeta style={{ display: 'flex', gap: '20px', color: '#A8A492' }} author={course.author} createdAt={formatDate(course.createdAt)} />

                        <p style={{ fontWeight: '700' }}>{course.title}</p>
                        <p>{course.summary}</p>

                        <div>
                            {course.tags}
                            {/* {course.tags.map((t) => {
                                return (
                                    <div style={{borderRadius:'1em', backgroundColor:'#A8A492', padding:'15px 10px'}}>{t}</div>
                                )
                            })} */}
                        </div>
                        <hr />
                        <Link to={`/posts/${course.id}`} style={{ marginTop: '5px', textDecoration: 'none', color: 'black', marginBottom: '30px' }}>Đọc thêm →</Link>
                        <Button className="btn btn-primary" onClick={() => openConfirmDelete(course.id, course.title)} label='Xoá' />
                    </div>
                ))
            }

            {showConfirm && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '30px',
                        maxWidth: '400px',
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <button
                            onClick={closeConfirm}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            ×
                        </button>

                        <h2 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: '600' }}>Xác nhận xóa</h2>
                        <p style={{ margin: '0 0 25px 0', color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                            Bạn có chắc chắn muốn xóa bài viết "<strong>{deletePostTitle}</strong>" không? Hành động này không thể hoàn tác.
                        </p>

                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <button
                                onClick={closeConfirm}
                                style={{
                                    padding: '8px 20px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    backgroundColor: '#f5f5f5',
                                    color: '#333',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}
                            >
                                Hủy
                            </button>
                            <button
                                onClick={confirmDelete}
                                style={{
                                    padding: '8px 20px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}
                            >
                                Xóa bài viết
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
import { Link } from "react-router-dom"
export default function PostCard({ blogPosts }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1em' }}>
            {
                blogPosts.map(course => (
                    <div style={{ display: 'flex', flexDirection: 'column', border: "2px solid purple", padding: '1em' }}
                        key={course.id}>
                        <div style={{display:'flex', gap:'20px', color:'#A8A492'}}>
                            <p>{course.author}</p>
                            <p>{course.createdAt}</p>
                        </div>
                        <p style={{ fontWeight: '700' }}>{course.title}</p>
                        <p>{course.excerpt}</p>

                        <div style={{ display: 'flex', gap: '1em' }}>
                            {course.tags.map((t) => {
                                return (
                                    <div style={{borderRadius:'1em', backgroundColor:'#A8A492', padding:'15px 10px'}}>{t}</div>
                                )
                            })}
                        </div>
                        <Link to={`/posts/${course.id}`} style={{margin:'5px', textDecoration:'none',color:'black'}}>Read more →</Link>
                    </div>
                ))
            }
        </div>
    )
}
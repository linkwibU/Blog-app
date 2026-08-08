export default function PostMeta({ createdAt, author, style }) {
    return (

        <div style={style}>
            <p >🧑{author}</p>
            <p >📝{createdAt}</p>
        </div>

    )

}
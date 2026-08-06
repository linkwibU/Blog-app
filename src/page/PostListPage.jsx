import PostList from "../component/PostList";
export default function PostListPage(){
  const blogPosts = [
  {
    id: 1,
    title: "Hiểu về React Hooks",
    excerpt: "Giới thiệu ngắn gọn về useState và useEffect trong React.",
    author: "Nguyễn Văn A",
    createdAt: "2024-07-01",
    tags: ["React", "Hooks", "Frontend"]
  },
  {
    id: 2,
    title: "Async/Await trong JavaScript",
    excerpt: "Cách viết code bất đồng bộ gọn gàng hơn với async/await.",
    author: "Trần Thị B",
    createdAt: "2024-07-05",
    tags: ["JavaScript", "Async", "Promise"]
  },
  {
    id: 3,
    title: "REST API là gì?",
    excerpt: "Giải thích khái niệm REST API và cách hoạt động cơ bản.",
    author: "Lê Văn C",
    createdAt: "2024-07-10",
    tags: ["API", "Backend", "REST"]
  },
  {
    id: 4,
    title: "Git cơ bản cho lập trình viên",
    excerpt: "Các lệnh Git thường dùng để quản lý source code.",
    author: "Phạm Thị D",
    createdAt: "2024-07-15",
    tags: ["Git", "Version Control", "Collaboration"]
  },
  {
    id: 5,
    title: "CSS Flexbox nhanh gọn",
    excerpt: "Cách dùng Flexbox để bố cục giao diện web.",
    author: "Hoàng Văn E",
    createdAt: "2024-07-20",
    tags: ["CSS", "Flexbox", "Frontend"]
  },
  {
    id: 6,
    title: "Node.js và Express",
    excerpt: "Xây dựng server đơn giản với Node.js và Express.",
    author: "Đỗ Thị F",
    createdAt: "2024-07-25",
    tags: ["Node.js", "Express", "Backend"]
  }
];

    return(
      <div>
          <h1>Bài viết mới nhất</h1>
          <p>Khám phá các bài viết về công nghệ</p>
          <PostList blogPosts={blogPosts}/>        
      </div>

    )
}
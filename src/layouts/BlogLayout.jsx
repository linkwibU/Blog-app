import Header from "../component/Header";
import Footer from "../component/Footer";
import Main from "../component/Main";
import { Outlet, Link } from "react-router-dom";


export default function BlogLayout() {
    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding:'1em' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <h5>Blog App</h5>
                    <Link to="/" style={{textDecoration:'none'}}>Trang chủ</Link> {"   "}
                    <Link to="/posts" style={{textDecoration:'none'}}>Bài viết</Link> {"   "}
                    <Link to="/about" style={{textDecoration:'none'}}>Giới thiệu</Link> {"   "}
                    <Link to="/admin/posts/new" style={{textDecoration:'none'}}>Quản trị</Link>
                </div>

                <button type="button" className="btn btn-primary">Đăng nhập</button>
            </nav>

            <Header />

            <Main>
                <Outlet />
            </Main>

            <Footer />
        </>
    );
}
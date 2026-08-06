import Header from "../component/Header";
import Footer from "../component/Footer";
import Main from "../component/Main";
import { Outlet, Link } from "react-router-dom";

export default function BlogLayout() {
    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to="/">Trang chủ</Link> {"   "}
                    <Link to="/posts">Bài viết</Link> {"   "}
                    <Link to="/about">Giới thiệu</Link> {"   "}
                    <Link to="/admin/posts/new">Quản trị</Link>
                </div>

                <button>Đăng nhập</button>
            </nav>

            <Header />

            <Main>
                <Outlet />
            </Main>

            <Footer />
        </>
    );
}
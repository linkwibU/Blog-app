import BlogLayout from "./layouts/BlogLayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './page/AboutPage';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import PostCreatePage from './page/PostCreatePage';
import PostDetailPage from './page/PostDetailPage';
import PostEditPage from './page/PostEditPage';
import PostListPage from './page/PostListPage';
import { BlogProvider } from "./context/BlogContext";
export default function App() {
    return (
        <BrowserRouter>
            <BlogProvider>
                <Routes>
                    <Route element={<BlogLayout  className="bg-body-secondary"/>}>
                        <Route index element={<HomePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="posts" element={<PostListPage />} />
                        <Route path="posts/:postId" element={<PostDetailPage />} />
                        <Route path="admin/posts/new" element={<PostCreatePage />} />
                        <Route path="admin/posts/:postId/edit" element={<PostEditPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BlogProvider>
        </BrowserRouter>
    );
}
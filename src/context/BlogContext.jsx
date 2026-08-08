import { useContext, useReducer, createContext } from "react";

export const BlogContext = createContext();// tạo context

const initialState = {
    posts: [],
    isLoadingList: false,
    listError: null
};
//tạo action
export function blogReducer(state, action) {
    switch (action.type) {
        case "FETCH_POSTS_START":
            return {
                ...state,
                isLoadingList: true,
                listError: null
            };
        case "SUCCESS":
            return {
                ...state,
                isLoadingList: false,
                posts: action.payload,
                listError: null
            };
        case "FAIL":
            return {
                ...state,
                isLoadingList: false,
                listError: action.payload
            };
        case "SET_POST":
            return {
                ...state,
                posts: action.payload
            };
        case "CREATE_POST":
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case "EDIT_POST": {
            return {
                ...state,
                posts: state.posts.map((p) => (
                    p.id === action.payload.id ? action.payload : p
                ))
            }
        }
        default:
            return state;
    };

}
export function BlogProvider({ children }) {
    const [state, dispatch] = useReducer(blogReducer, initialState); // truyền action vào

    async function loadPosts() {
        try {
            dispatch({ type: "FETCH_POSTS_START" });
            // setLoading(true);
            const res = await fetch("https://post365-api.onschoolbootcamp.edu.vn/posts/", {
                method: "GET"
            });
            if (!res.ok) {
                throw new Error("Không thể tải bài viết");
            }
            const data = await res.json();
            console.log(data);
            // setPosts(data);
            dispatch({ type: "SUCCESS", payload: data }); // truyền data vào posts trong context
        }
        catch (err) {
            // setError("vui lòng thử lại");
            console.error(err.message);
            dispatch({ type: "FAIL", payload: err.message });// truyền data vào error trong context
        }
        // finally {
        //   setLoading(false);

        // }
    }
    async function loadCreate(formData) {
        try {
            const res = await fetch("https://post365-api.onschoolbootcamp.edu.vn/posts", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (!res.ok) {
                const errorData = await res.json().catch(() => null); // 👈 đọc body lỗi
                console.error("Chi tiết lỗi:", errorData);
                throw new Error(errorData?.message || "Không thể tải bài viết");
            }
            const data = await res.json();
            console.log(data);
            dispatch({ type: "CREATE_POST", payload: data });
            return data;
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
    async function loadEditPostId(formData, postId) {
        try {
            const res = await fetch(`https://post365-api.onschoolbootcamp.edu.vn/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (!res.ok) {
                throw new Error("Không thể tải bài viết");
            }
            const data = await res.json();
            console.log(data);
            dispatch({ type: "EDIT_POST", payload: data })
        }
        catch (err) {
            console.error(err.message);
            
        }
    }
    async function loadPostId(postId) {
        try {
            const res = await fetch(`https://post365-api.onschoolbootcamp.edu.vn/posts/${postId}`, {
                method: 'GET',
            });
            if (!res.ok) {
                throw new Error("Không thể tải bài viết");
            }
            const data = await res.json();
            console.log(data);
            return data;
        } catch (err) {
            console.error(err.message);
            throw err;
        }
    }
    return (
        <BlogContext.Provider value={{ ...state, dispatch, loadPostId, loadCreate, loadEditPostId, loadPosts }}>{children}</BlogContext.Provider>
    );

}
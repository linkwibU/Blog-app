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
    return (
        <BlogContext.Provider value={{ ...state, dispatch, loadPosts }}>{children}</BlogContext.Provider>
    );

}
import { setBlogs } from "./data.slice";

export function loadBlogs() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch("https://blogbackend-1-j2721633.deta.app/blogs");
      const blogs = await res.json();
      localStorage.setItem("blogs", JSON.stringify(blogs));
      dispatch(setBlogs(blogs));
    } catch (e) {}
  };
}

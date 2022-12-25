import { setBlogs } from "./data.slice";

export function loadBlogs() {
  return async (dispatch, getState) => {
    try {
      const res = await fetch("https://s4sqyr.deta.dev/blogs");
      const blogs = await res.json();
      dispatch(setBlogs(blogs));
    } catch (e) {}
  };
}

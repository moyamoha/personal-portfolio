export const loadBlogs = async () => {
  const res = await fetch("https://s4sqyr.deta.dev/blogs");
  return await res.json();
};

const loadBlogById = async (id) => {
  const res = await fetch("https://s4sqyr.deta.dev/blogs/" + id);
  return await res.json();
};

export default loadBlogById;

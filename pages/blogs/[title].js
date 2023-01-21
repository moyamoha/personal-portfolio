import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Layout from "@components/Layout";

import { captitalizeTitle, getBlogDate } from "utils/string";
import { useAppDispatch } from "state/hooks";
import { setBlogs } from "state/data.slice";

export default function Blog() {
  const r = useRouter();
  const dispatch = useAppDispatch();

  const { id } = r.query;
  const blogs = useSelector((s) => s.data.blogs);

  React.useEffect(() => {
    const blogsString = localStorage.getItem("blogs");
    if (!blogsString) return;
    const blogs = JSON.parse(blogsString);
    dispatch(setBlogs(blogs));
  }, []);

  const blog = blogs.find((b) => b._id === id);

  return (
    <Layout>
      {blog === undefined ? (
        <span>Blog not found</span>
      ) : blog ? (
        <div className="container-fluid blog">
          <h2 className="blog__title">{captitalizeTitle(blog.title)}</h2>
          <span className="blog__date">{getBlogDate(blog.updatedAt)}</span>
          <div
            className="blog__content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </Layout>
  );
}

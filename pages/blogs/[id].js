import React from "react";

import Layout from "@components/Layout";
import loadBlog from "lib/loadBlog";
import { loadBlogs } from "lib/loadBlogs";

import { captitalizeTitle, getBlogDate, slugifyTitle } from "utils/string";
import { useRouter } from "next/router";
export default function Blog({ blog }) {
  const r = useRouter();

  React.useEffect(() => {
    r.replace(
      `/blogs/${blog._id}`,
      `/blogs/${blog._id}?title=${slugifyTitle(blog.title)}`
    );
  }, []);

  return (
    <Layout>
      {blog ? (
        <div className="container-fluid blog">
          <h2 className="blog__title">{captitalizeTitle(blog.title)}</h2>
          <span className="blog__date">{getBlogDate(blog.updatedAt)}</span>
          <div
            className="blog__content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      ) : (
        <span>Loading ...</span>
      )}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const blogs = await loadBlogs();
  const paths = blogs.map((blog) => {
    return {
      params: {
        id: blog._id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const blog = await loadBlog(id);
  return {
    props: {
      blog: blog,
    },
  };
};

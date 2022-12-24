import Layout from "@components/Layout";
import { useRouter } from "next/router";
import React from "react";

import { getBlogDate, slugifyTitle } from "utils/string";
import blogs from "../../data/blogs.json";

export default function Blog() {
  const r = useRouter();
  const { title } = r.query;

  const blog = blogs.find((b) => slugifyTitle(b.title) === title);

  return (
    <Layout>
      {blog ? (
        <div className="container-fluid blog">
          <h2 className="blog__title">{blog.title}</h2>
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

import React from "react";

import Layout from "@components/Layout";
import blogs from "../../data/blogs.json";
import BlogCard from "@components/BlogCard";

export default function Blogs() {
  return (
    <Layout>
      <div className="container-fluid d-md-flex flex-column px-sm-0 pt-2">
        {blogs
          .sort((a, b) => a.updatedAt <= b.updatedAt)
          .map((b, i) => (
            <BlogCard blog={b} key={i}></BlogCard>
          ))}
      </div>
    </Layout>
  );
}

import React from "react";

import Layout from "@components/Layout";
import BlogCard from "@components/BlogCard";
import { loadBlogs } from "lib/loadBlogs";

export default function Blogs({ blogs }) {
  React.useEffect(() => {});

  return (
    <Layout>
      <div className="container-fluid d-md-flex flex-column px-sm-0 pt-2">
        {blogs
          .sort((a, b) => a.updatedAt <= b.updatedAt)
          .map((b, i) => (
            <BlogCard blog={b} key={b._id}></BlogCard>
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await loadBlogs();
  return {
    props: {
      blogs,
    },
  };
}

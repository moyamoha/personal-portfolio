import React from "react";

import Layout from "@components/Layout";
import BlogCard from "@components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "state/hooks";
import { loadBlogs } from "state/data.api";
import Loader from "@components/Loader";

export default function Blogs() {
  const dispatch = useAppDispatch();
  const blogs = useSelector((s) => s.data.blogs);
  React.useEffect(() => {
    dispatch(loadBlogs());
  }, []);

  return (
    <Layout>
      <div className="container-fluid d-md-flex flex-column px-sm-0 pt-2">
        {blogs && blogs.length > 0 ? (
          blogs.map((b, i) => <BlogCard blog={b} key={b._id}></BlogCard>)
        ) : (
          <Loader></Loader>
        )}
      </div>
    </Layout>
  );
}

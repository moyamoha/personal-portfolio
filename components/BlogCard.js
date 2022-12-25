import Link from "next/link";
import React from "react";

import {
  captitalizeTitle,
  getBlogDate,
  getShortContentForBlog,
} from "utils/string";

export default function BlogCard({ blog }) {
  const shortContent = React.useMemo(() => {
    return getShortContentForBlog(blog.content);
  }, [blog]);

  return (
    <div className="blog-card px-3 d-flex flex-column py-2 mt-3">
      <h4 className="blog-card__title">{captitalizeTitle(blog.title)}</h4>
      <span className="blog-card__date">{getBlogDate(blog.updatedAt)}</span>
      <p>{shortContent}</p>
      <a className="blog-card__readmore" href={`/blogs/${blog._id}`}>
        Read more
      </a>
    </div>
  );
}

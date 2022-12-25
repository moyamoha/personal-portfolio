import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import {
  captitalizeTitle,
  getBlogDate,
  getShortContentForBlog,
  slugifyTitle,
} from "utils/string";

export default function BlogCard({ blog }) {
  const r = useRouter();

  const shortContent = React.useMemo(() => {
    return getShortContentForBlog(blog.content);
  }, [blog]);

  const handleReadmoreClick = () => {
    r.push(`/blogs/${encodeURI(slugifyTitle(blog.title))}?id=${blog._id}`);
  };

  return (
    <div className="blog-card px-3 d-flex flex-column py-2 mt-3">
      <h4 className="blog-card__title">{captitalizeTitle(blog.title)}</h4>
      <span className="blog-card__date">{getBlogDate(blog.updatedAt)}</span>
      <p>{shortContent}</p>
      <span className="blog-card__readmore" onClick={handleReadmoreClick}>
        Read more
      </span>
    </div>
  );
}

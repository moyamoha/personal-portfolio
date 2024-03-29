import { htmlToText } from "html-to-text";

export const getShortContentForBlog = (blogContent) => {
  const text = htmlToText(blogContent);
  if (text.length > 180) return text.substring(0, 179).toLowerCase() + " ...";
  else return text.toLowerCase();
};

export const getBlogDate = (blogDate) => {
  const d = new Date(blogDate);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d.toLocaleDateString("en-US", options);
};

export const slugifyTitle = (blogTitle) => {
  return encodeURIComponent(blogTitle.toLowerCase().split(" ").join("-"));
};

export const captitalizeTitle = (blogTitle) => {
  return blogTitle[0].toUpperCase() + blogTitle.substring(1);
};

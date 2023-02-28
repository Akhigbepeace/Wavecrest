import React from "react";
import BlogPost from "pageLayouts/BlogPost";

const BlogPostPage = () => {
  return <BlogPost />;
};

BlogPostPage.requireAuth = true;

export default BlogPostPage;

import BlogpageLayout from "components/layouts/Blog/BlogpageLayout";
import React from "react";

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        page: "BLOG",
      },
    },
  };
};

const BlogPage = () => {
  return <BlogpageLayout />;
};

BlogPage.requireAuth = true;

export default BlogPage;

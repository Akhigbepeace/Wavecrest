import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { BLOGS, CATEGORIES } from "data/blog";
import { useRouter } from "next/router";
import BlogSideBar from "components/molecules/BlogSideBar";
import Header from "components/molecules/Header/Header";
import Navbar from "components/molecules/Navbar/Navbar";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import PagesBanner from "components/molecules/PagesBanner";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import Footer from "components/organisms/Footer/Footer";
import Blog from "./Blog";

const BlogpageLayout = () => {
  const blogs = BLOGS;
  const [currentBlog, setCurrentBlog] = useState(blogs[0]);
  const categories = CATEGORIES;

  const router = useRouter();

  const ShowPosts = (post: any) => {
    router.push(`/posts/${post.postId}`);
  };

  return (
    <>
      <Header />
      <Navbar />
      <MobileSideBar />

      <PagesBanner imageURL="/assets/imgs/Blog.png" pageName={"BLOG"} />
      <MobilePageBanner imageURL={"/assets/imgs/Blog.png"} title={"BLOG"} />

      <Flex flexDirection="column" alignItems="center">
        <Flex
          p={{
            xl: "70px 50px",
            "2xl": "80px 50px",
          }}
        >
          <BlogSideBar
            currentBlog={currentBlog}
            setCurrentBlog={setCurrentBlog}
            categories={categories}
            blogs={blogs}
            ShowPosts={ShowPosts}
          />

          <Blog />
        </Flex>
      </Flex>

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
        copyright={"Wavecrest College 2022. All Rights Reserved"}
      />
    </>
  );
};

export default BlogpageLayout;

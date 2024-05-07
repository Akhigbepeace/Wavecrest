import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/molecules/Navbar/Navbar";
import Header from "components/molecules/Header/Header";
import { BLOGS, CATEGORIES, POST_MAP } from "data/blog";
import Footer from "components/organisms/Footer/Footer";
import MobileSideBar from "components/molecules/Header/MobileSideBar";
import Router, { useRouter } from "next/router";
import BlogSideBar from "components/molecules/BlogSideBar";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import PagesBanner from "components/molecules/PagesBanner";

const BlogPost = () => {
  const blogs = BLOGS;

  const categories = CATEGORIES;

  const [currentBlog, setCurrentBlog] = useState(blogs[0]);

  const router = useRouter();

  const BackToBlog = (e: any) => {
    e.preventDefault();
    Router.back();
  };

  const { id } = router.query;

  if (!id) return <div>Loading...</div>;
  const post = POST_MAP[id as string] as any;
  const image1 = post?.postsImg;
  const image2 = post?.coverImage || image1;

  const ShowPosts = (post: any) => {
    router.push(`/posts/${post.postId}`);
  };

  return (
    <>
      <Header />
      <Navbar />

      <MobileSideBar />

      <MobilePageBanner imageURL={image2} title={post?.postHeading} />
      <PagesBanner
        imageURL={image2}
        pageName={post?.postHeading}
        fontSize="40px"
      />

      <Flex
        w="100%"
        my="23px"
        mx="auto"
        px={{
          sm: "0",
          md: "0",
          lg: "0",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box
          p={{
            sm: "20px",
            md: "30px",
            lg: "40px",
          }}
          mx="auto"
          mr={{
            sm: "0",
            md: "0",
            lg: "0",
            xl: "50px",
            "2xl": "50px",
          }}
        >
          <Button
            fontFamily="Manrope"
            fontSize="18px"
            py="25px"
            mb="52px"
            fontWeight="700"
            bg="#EEE"
            onClick={(e) => BackToBlog(e)}
          >
            <FaChevronLeft size="20px" />
            Back To Blog
          </Button>

          <Heading
            color="rgba(2, 29, 55, 0.44)"
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="18px"
            mb="20px"
          >
            {post?.postsDate}
          </Heading>

          <Box>
            <Text
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
              whiteSpace="pre-line"
              dangerouslySetInnerHTML={{ __html: post?.postsText }}
            />

            <Image src={image1 || image2} my="10px" alt="postImage" />
          </Box>
        </Box>

        <BlogSideBar
          currentBlog={currentBlog}
          setCurrentBlog={setCurrentBlog}
          categories={categories}
          blogs={blogs}
          ShowPosts={ShowPosts}
        />
      </Flex>

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
      />
    </>
  );
};

export default BlogPost;

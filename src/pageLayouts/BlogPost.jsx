import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/Navbar";
import { BLOGS, CATEGORIES, POST_MAP } from "data/blog";
import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";
import BlogSideBar from "components/BlogSideBar";
import MobileSideBar from "components/MobileSideBar";
import Router, { useRouter } from "next/router";

const BlogPost = () => {
  const blogs = BLOGS;

  const categories = CATEGORIES;

  const [currentBlog, setCurrentBlog] = useState(blogs[0]);

  const router = useRouter();

  const BackToBlog = (e) => {
    e.preventDefault();
    Router.back();
  };

  const { id } = router.query;

  if (!id) return "Loading...";
  const post = POST_MAP[id];
  const image1 = post.postsImg;
  const image2 = post.coverImage || image1;

  const ShowPosts = (post) => {
    router.push(`/posts/${post.postId}`);
  };

  return (
    <Fragment>
      <Navbar />
      <MobileSideBar />

      <Box h="441px" w="100%" position="relative">
        <Image src={image2} h="100%" w="100%" objectFit="cover" />

        <Flex
          bg="rgba(0, 24, 71, 0.5)"
          w="100%"
          h="100%"
          position="absolute"
          bottom="0"
          p={{
            sm: "20px",
            md: "20px 40px",
            lg: "30px 91px",
            xl: "20px 91px",
            "2xl": "20px 91px",
          }}
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize={{
              sm: "25px",
              md: "25px",
              lg: "30px",
              xl: "30px",
              "2xl": "30px",
            }}
            lineHeight={{
              sm: "35px",
              md: "35px",
              lg: "35px",
              xl: "35px",
              "2xl": "40px",
            }}
            alignSelf="flex-end"
          >
            {post.postHeading}
          </Text>
        </Flex>
      </Box>

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
            {post.postsDate}
          </Heading>

          <Box>
            <Text
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
              dangerouslySetInnerHTML={{ __html: post.postsText }}
            />

            <Image src={image1 || image2} my="10px" />
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

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default BlogPost;

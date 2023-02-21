import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BLOGS, CATEGORIES } from "data/blog";
import { useRouter } from "next/router";
import MobileBlogMenu from "./MobileBlogMenu";

const Blog = () => {
  const blogs = BLOGS;

  const [currentBlog, setCurrentBlog] = useState(blogs[0]);
  const categories = CATEGORIES;

  const router = useRouter();

  const ShowPosts = (post: any) => {
    router.push(`/posts/${post.postId}`);
  };

  return (
    <Flex
      px={{
        xl: "50px",
        "2xl": "50px",
      }}
      mb="100px"
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        <Flex
          display={{
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "none",
            "2xl": "none",
          }}
          p={{
            sm: "20px",
            md: "30px",
            lg: "40px",
            xl: "none",
            "2xl": "none",
          }}
        >
          <Input
            type="text"
            variant="filled"
            placeholder="Search"
            w={{
              sm: "100%",
              md: "40%",
              lg: "40%",
              xl: "none",
              "2xl": "none",
            }}
            h="45px"
            bg="#EBEDEF"
            _placeholder={{
              fontFamily: "Manrope",
              color: "#021D37",
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: "400",
            }}
          />

          <MobileBlogMenu
            currentBlog={currentBlog}
            setCurrentBlog={setCurrentBlog}
            categories={categories}
            blogs={blogs}
            ShowPosts={ShowPosts}
          />
        </Flex>
      </Box>

      <Box
        w={{
          xl: "830px",
          "2xl": "1000px",
        }}
      >
        <Grid
          gridTemplateColumns={{
            sm: "auto",
            md: "1fr 1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr",
            "2xl": "1fr 1fr",
          }}
          w="100%"
          cursor="pointer"
        >
          {currentBlog?.posts?.map((post, index) => {
            return (
              <Box
                key={index}
                bg={{
                  sm: post.bg,
                  md: "none",
                  lg: "none",
                  xl: "none",
                  "2xl": "none",
                }}
                mx={{
                  sm: "0",
                  md: "0px",
                  lg: "0px",
                  xl: "20px",
                  "2xl": "20px",
                }}
                p={{
                  sm: "20px",
                  md: "30px",
                  lg: "40px",
                  xl: "0",
                  "2xl": "0",
                }}
                mb="50px"
                onClick={() => ShowPosts(post)}
                transition="all ease 0.5s"
                _hover={{
                  transform: "scale(1.03)",
                }}
              >
                <Image
                  key={index}
                  alt="blog-img"
                  src={post.postsImg}
                  borderRadius="3px"
                  mx="auto"
                  w="100%"
                  mb={{
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                    xl: "0",
                    "2xl": "0",
                  }}
                />

                <Text
                  mt="8px"
                  color="rgba(2, 29, 55, 0.44)"
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="25px"
                  display={{
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "block",
                    "2xl": "block",
                  }}
                >
                  {post.postsDate}
                </Text>

                <Box>
                  <Box
                    w="88px"
                    h="3px"
                    bg="#021D37"
                    mb="10px"
                    display={{
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "none",
                      "2xl": "none",
                    }}
                  ></Box>

                  <Heading
                    color="#021d37"
                    fontFamily="Playfair Display"
                    fontWeight="700"
                    fontSize={{
                      sm: "20px",
                      md: "22px",
                      lg: "22px",
                      xl: "22px",
                      "2xl": "22px",
                    }}
                    lineHeight="30px"
                  >
                    {post.postHeading}
                  </Heading>
                </Box>

                <Text
                  mt="4px"
                  mb="20px"
                  color="rgba(2, 29, 55, 0.44)"
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="25px"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                >
                  {post.postsDate}
                </Text>

                <Text
                  mt="10px"
                  color="#021d37"
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="25px"
                  noOfLines={5}
                  dangerouslySetInnerHTML={{ __html: post.postsText }}
                />
                <Button
                  w="142px"
                  height="46.89px"
                  border="2px solid #021D37"
                  bg="transparent"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="22px"
                  textAlign="center"
                  borderRadius="3px"
                  mt="25px"
                  onClick={(e) => ShowPosts(e)}
                  transition="all ease 0.5s"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                >
                  LEARN MORE
                </Button>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Blog;

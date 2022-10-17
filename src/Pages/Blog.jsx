import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  Text,
  Heading,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogMenuItem from "components/BlogMenuImage";
import blogImg from "assets/Images/Blog.png";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";
import { BLOGS, CATEGORIES } from "data/blog";
import BlogSideBar from "components/BlogSideBar";

const Blog = () => {
  const blogs = BLOGS;

  const categoryMap = {};

  const [currentBlog, setCurrentBlog] = useState(blogs[0]);
  const categories = CATEGORIES;

  const navigate = useNavigate();

  const ShowPosts = (post) => {
    navigate(`/posts/${post.postId}`, { replace: true });
  };

  return (
    <Fragment>
      <Navbar />

      <Box mb="100px">
        <Box w="100%" position="relative">
          <Image src={blogImg} h="441px" w="100%" objectFit="cover" />

          <Box
            bg="rgba(0, 24, 71, 0.5)"
            h="100%"
            w="100%"
            position="absolute"
            bottom="0"
          >
            <Text
              color="white"
              fontFamily="Playfair Display, serif"
              fontWeight="700"
              fontSize="60px"
              textAlign="center"
              mt="242px"
            >
              BLOG
            </Text>
          </Box>
        </Box>

        <Flex flexDirection="column" alignItems="center">
          <Flex
            p={{
              xl: "80px 50px",
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

            <Box>
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

                  <Flex justifyContent="center">
                    <Popover placement="bottom" isLazy>
                      <PopoverTrigger>
                        <IconButton
                          aria-label="More server options"
                          icon={<BlogMenuItem />}
                          h="45px"
                          ml="-10px"
                          bg="#021D37"
                        />
                      </PopoverTrigger>

                      <PopoverContent
                        bg="#EBEDEF"
                        w="136px"
                        _focus={{ boxShadow: "none" }}
                      >
                        <PopoverArrow bg="#EBEDEF" />
                        <PopoverBody>
                          <Stack>
                            {categories.map((category, index) => {
                              return (
                                <Box
                                  key={index}
                                  display="flex"
                                  flexDirection="column"
                                  fontFamily="Manrope"
                                  fontWeight="400"
                                  fontSize="14px"
                                  borderRadius="3px"
                                  bg="#EBEDEF"
                                  w="100%"
                                  cursor="pointer"
                                  lineHeight="24px"
                                  onClick={() => {
                                    setCurrentBlog(categoryMap[category]);
                                  }}
                                  borderBottom={
                                    categories.length - 1 === index
                                      ? "none"
                                      : "1px solid rgba(2, 29, 55, 0.25)"
                                  }
                                  _hover={{
                                    textDecoration: "none",
                                    bg: "rgba(2, 29, 55, 0.25)",
                                  }}
                                >
                                  <Text>{category}</Text>
                                </Box>
                              );
                            })}
                          </Stack>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Flex>
              </Box>

              <Box
                ml="50px"
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
                          src={post.postsImg}
                          borderRadius="3px"
                          objectFit="cover"
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
                        >
                          {post.postsText}
                        </Text>

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
            </Box>
          </Flex>

          <Flex mt="30px">
            <Link
              bg="#021D37"
              p="15px"
              borderRadius="3px"
              color="#FFF"
              mr="50px"
            >
              <FaChevronLeft size="35px" />
            </Link>

            <Link bg="#021D37" p="15px" borderRadius="3px" color="#FFF">
              <FaChevronRight size="35px" />
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Blog;

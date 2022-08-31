import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  Text,
  InputRightElement,
  Heading,
  InputGroup,
  Link,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import blog from "assets/Images/Blog.png";
import blogPost from "assets/Images/blogpost.png";
import blogPost2 from "assets/Images/aboutus.png";
import searchImg from "assets/Images/search.svg";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const Blog = () => {
  const posts = [
    {
      postsImg: blogPost,
      postsDate: "News & Events / October 8, 2022.",
      postHeading:
        "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postsText:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
    },
    {
      bg: "#EBEDEF",
      postsImg: blogPost2,
      postsDate: "Personal stories / October 22, 2022.",
      postHeading:
        "“I Want to Own My Restaurant That is Why I Came to Wavecrest College for Training” -Victoria Joseph",
      postsText:
        "Hello, may we meet you?My name is Victoria JosephWhat inspired you to study at Wavecrest College?I have always wanted to own my restaurant so looking for a school that can...",
    },
    {
      postsImg: blogPost,
      postsDate: "News & Events / October 8, 2022.",
      postHeading:
        "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postsText:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
    },
    {
      bg: "#EBEDEF",
      postsImg: blogPost2,
      postsDate: "News & Events / October 8, 2022.",
      postHeading:
        "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postsText:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
    },
    {
      postsImg: blogPost,
      postsDate: "News & Events / October 8, 2022.",
      postHeading:
        "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postsText:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
    },
    {
      bg: "#EBEDEF",
      postsImg: blogPost2,
      postsDate: "News & Events / October 8, 2022.",
      postHeading:
        "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postsText:
        "Featuring in the Guinness World Records is obviously not a yearly event. This is why Wavecrest College was excited to be a part of an amazing project partnering with the...",
    },
  ];

  const categories = [
    {
      categoryName: "News & Events",
    },
    {
      categoryName: "Tips & Categories",
    },
    {
      categoryName: "Recepies",
    },
    {
      categoryName: "Personal Categories",
    },
    {
      categoryName: "Admission & Scholarship",
    },
  ];

  const topPosts = [
    {
      post: "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postDate: "News & Events / October 8, 2022.",
    },
    {
      post: "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postDate: "News & Events / October 8, 2022.",
    },
    {
      post: "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postDate: "News & Events / October 8, 2022.",
    },
    {
      post: "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postDate: "News & Events / October 8, 2022.",
    },
    {
      post: "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
      postDate: "News & Events / October 8, 2022.",
    },
  ];

  const navigate = useNavigate();

  const ShowPosts = (e) => {
    e.preventDefault();

    navigate("/posts", { replace: true });
  };

  return (
    <Fragment>
      <Navbar />

      <Box mb="150px">
        <Box w="100%" position="relative">
          <Image src={blog} h="441px" w="100%" objectFit="cover" />

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
              sm: "80px 0px",
              md: "80px 0px",
              lg: "80px 0",
              xl: "80px 50px",
              "2xl": "80px 50px",
            }}
            justifyContent="space-between"
          >
            <Box
              pr="46px"
              w="400px"
              display={{
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
                "2xl": "block",
              }}
            >
              <InputGroup>
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Search"
                  w="100%"
                  h="67px"
                  mb="60px"
                  _placeholder={{
                    fontFamily: "Manrope, sans-serif",
                    color: "#021D37",
                    fontSize: "18px",
                    lineHeight: "25px",
                    fontWeight: "400",
                  }}
                />
                <InputRightElement
                  children={
                    <Image
                      src={searchImg}
                      w="20px"
                      h="20px"
                      mt="23px"
                      mr="24px"
                      alignItems="center"
                    />
                  }
                />
              </InputGroup>

              <Box>
                <Heading
                  fontFamily="Playfair Display"
                  fontWeight="700"
                  fontSize="32px"
                >
                  Categories
                </Heading>

                <Box mt="25px">
                  {categories.map((category, index) => {
                    return (
                      <Link
                        key={index}
                        display="flex"
                        flexDirection="column"
                        fontFamily="Manrope"
                        fontWeight="400"
                        fontSize="18px"
                        borderRadius="3px"
                        bg="#EBEDEF"
                        p="25px 20px"
                        w="100%"
                        lineHeight="24px"
                        borderBottom={
                          categories.length - 1 === index
                            ? "none"
                            : "2px solid rgba(2, 29, 55, 0.25)"
                        }
                        _hover={{
                          textDecoration: "none",
                          bg: "rgba(2, 29, 55, 0.25)",
                        }}
                      >
                        <Text>{category.categoryName}</Text>
                      </Link>
                    );
                  })}
                </Box>
              </Box>

              <Box>
                <Heading
                  fontFamily="Playfair Display"
                  fontWeight="700"
                  fontSize="32px"
                  mt="60px"
                  mb="25px"
                >
                  Top Posts
                </Heading>

                <Box>
                  {topPosts.map((topPost, index) => {
                    return (
                      <Box
                        key={index}
                        bg="#EBEDEF"
                        borderRadius="3px"
                        p="25px 35px"
                      >
                        <Flex>
                          <Text
                            color="#021D37"
                            fontFamily="Playfair Display"
                            fontWeight="600"
                            fontSize="40px"
                            mt="-15px"
                          >
                            {index + 1}
                          </Text>
                          <Box>
                            <Heading
                              fontFamily="Playfair Display"
                              fontWeight="700"
                              fontSize="16px"
                              ml="20px"
                              lineHeight="21px"
                            >
                              {topPost.post}
                            </Heading>
                            <Text
                              fontFamily="Manrope"
                              fontWeight="400"
                              fontSize="12px"
                              lineHeight="16px"
                              textAlign="center"
                              color="rgba(2, 29, 55, 0.5)"
                              mt="5px"
                            >
                              {topPost.postDate}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>

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
              {posts.map((post, index) => {
                return (
                  <Box
                    key={index}
                    bg={{
                      sm: post.bg,
                      md: post.bg,
                      lg: post.bg,
                      xl: "none",
                      "2xl": "none",
                    }}
                    w="100%"
                    p={{
                      sm: "20px",
                      md: "30px",
                      lg: "40px",
                      xl: "none",
                      "2xl": "none",
                    }}
                    transition="all ease 0.5s"
                    onClick={(e) => ShowPosts(e)}
                    _hover={{
                      bg: "#FFF",
                      transform: "scale(1.05)",
                      borderRadius: "10px",
                      boxShadow: "3px 3px 10px 1px rgba(0,0,0,0.2)",
                    }}
                  >
                    <Image
                      src={post.postsImg}
                      borderRadius="3px"
                      h="279px"
                      w="100%"
                      objectFit="cover"
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
                        fontSize="22px"
                        lineHeight="30px"
                      >
                        {post.postHeading}
                      </Heading>
                    </Box>

                    <Text
                      mt="8px"
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
                    >
                      {post.postsText}
                    </Text>

                    <Button
                      w="110px"
                      h="40px"
                      borderRadius="5px"
                      border="2px solid #021D37"
                      bg="transparent"
                      fontFamily="Marope"
                      fontWeight="700"
                      fontSize="16px"
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
                      _hover={{
                        bg: "#EBEDEF",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                );
              })}
            </Grid>
          </Flex>

          <Flex>
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

import {
  Box,
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
import blog from "assets/Images/Blog.png";
import blogPost from "assets/Images/blogpost.png";
import blogPost2 from "assets/Images/aboutus.png";
import searchImg from "assets/Images/search.svg";
import Navbar from "components/layout/Navbar";
import Footer from "Pages/Home/Footer";
import FooterCopywright from "Pages/Home/FooterCopywright";

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
  return (
    <Fragment>
      <Navbar />

      <Box mb="150px">
        <Box w="100%" gridGap="68px" position="relative">
          <Image src={blog} h="100%" w="100%" />

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
          <Flex p="50px 0px" justifyContent="space-between">
            <Box pr="46px" w="382px">
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

            <Grid gridTemplateColumns="1fr 1fr" gridGap="30px" w="832px">
              {posts.map((post, index) => {
                return (
                  <Fragment>
                    <Box key={index} mb="33px">
                      <Image
                        src={post.postsImg}
                        borderRadius="3px"
                        h="279px"
                        w="100%"
                        objectFit="cover"
                      />

                      <Text
                        mt="8px"
                        color="rgba(2, 29, 55, 0.44)"
                        fontFamily="Manrope"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="25px"
                      >
                        {post.postsDate}
                      </Text>

                      <Heading
                        color="#021d37"
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="22px"
                        lineHeight="30px"
                      >
                        {post.postHeading}
                      </Heading>

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
                    </Box>

                    <Box mb="33px">
                      <Image
                        src={post.postsImg}
                        borderRadius="3px"
                        h="279px"
                        w="100%"
                        objectFit="cover"
                      />

                      <Text
                        mt="8px"
                        color="rgba(2, 29, 55, 0.44)"
                        fontFamily="Manrope"
                        fontWeight="400"
                        fontSize="18px"
                        lineHeight="25px"
                      >
                        {post.postsDate}
                      </Text>

                      <Heading
                        color="#021d37"
                        fontFamily="Playfair Display"
                        fontWeight="700"
                        fontSize="22px"
                        lineHeight="30px"
                      >
                        {post.postHeading}
                      </Heading>

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
                    </Box>
                  </Fragment>
                );
              })}
            </Grid>
          </Flex>

          <Flex mr="-390px">
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

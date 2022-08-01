import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "components/layouts/Navbar";
import blogPostImage from "assets/Images/blogpost.png";
import searchImg from "assets/Images/search.svg";
import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";

const BlogPost = () => {
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

      <Box h="441px" w="100%" position="relative">
        <Image src={blogPostImage} h="100%" w="100%" objectFit="cover" />

        <Flex
          bg="rgba(0, 24, 71, 0.5)"
          w="100%"
          h="100%"
          position="absolute"
          bottom="0"
          p="20px 91px"
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize="30px"
            lineHeight="40px"
            alignSelf="flex-end"
          >
            ‘The icing on the cake’ …Wavecrest College of Hospitality Partners
            with Fly Africa Initiative to break Guinness World Record 2020 -
            <br />- Wavecrest College
          </Text>
        </Flex>
      </Box>

      <Flex w="1258px" my="23px" mx="auto">
        <Box w="75%">
          <Heading
            color="rgba(2, 29, 55, 0.44)"
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="18px"
          >
            News & Events / October 8, 2022.
          </Heading>

          <Box>
            <Text
              mt="52px"
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
            >
              Featuring in the Guinness World Records is obviously not a yearly
              event. This is why Wavecrest College was excited to be a part of
              an amazing project partnering with the Featuring in the Guinness
              World Records is obviously not a yearly event. This is why
              Wavecrest College was excited to be a part of an amazing project
              partnering with the...Featuring in the Guinness World Records is
              obviously not a yearly event. This is why Wavecrest College was
              excited to be a part of an amazing project partnering with
              the...Featuring in the Guinness World Records is obviously not a
              yearly event. This is why Wavecrest College was excited to be a
              part of an amazing project partnering with the...Featuring in the
              Guinness World Records is obviously not a yearly event. This is
              why Wavecrest College was excited to be a part of an amazing
              project partnering with the...Featuring in the Guinness World
              Records is obviously not a yearly event. This is why Wavecrest
              College was excited to be a part of an amazing project partnering
              with the...Featuring in the Guinness World Records is obviously
              not a yearly event. This is why Wavecrest College was excited to
              be a part of an amazing project partnering with the...Featuring in
              the Guinness World Records is obviously not a yearly event. This
              is why Wavecrest College was excited to be a part of an amazing
              project partnering with the...Featuring in the Guinness World
              Records is obviously not a yearly event. This is why Wavecrest
              College was excited to be a part of an amazing project partnering
              with the...Featuring in the Guinness World Records is obviously
              not a yearly event. This is why Wavecrest College was excited to
              be a part of an amazing project partnering with the...
            </Text>

            <Image
              src={blogPostImage}
              w="100%"
              h="315px"
              objectFit="cover"
              my="10px"
            />

            <Text
              fontFamily="Manrope"
              fontSize="18px"
              fontWeight="400"
              lineHeight="25px"
              color="#021D37"
              mb="27px"
            >
              Featuring in the Guinness World Records is obviously not a yearly
              event. This is why Wavecrest College was excited to be a part of
              an amazing project partnering with the Featuring in the Guinness
              World Records is obviously not a yearly event. This is why
              Wavecrest College was excited to be a part of an amazing project
              partnering with the...Featuring in the Guinness World Records is
              obviously not a yearly event. This is why Wavecrest College was
              excited to be a part of an amazing project partnering with
              the...Featuring in the Guinness World Records is obviously not a
              yearly event. This is why Wavecrest College was excited to be a
              part of an amazing project partnering with the...Featuring in the
              Guinness World Records is obviously not a yearly event. This is
              why Wavecrest College was excited to be a part of an amazing
              project partnering with the...Featuring in the Guinness World
              Records is obviously not a yearly event. This is why Wavecrest
              College was excited to be a part of an amazing project partnering
              with the...Featuring in the Guinness World Records is obviously
              not a yearly event. This is why Wavecrest College was excited to
              be a part of an amazing project partnering with the...Featuring in
              the Guinness World Records is obviously not a yearly event. This
              is why Wavecrest College was excited to be a part of an amazing
              project partnering with the...Featuring in the Guinness World
              Records is obviously not a yearly event. This is why Wavecrest
              College was excited to be a part of an amazing project partnering
              with the...Featuring in the Guinness World Records is obviously
              not a yearly event. This is why Wavecrest College was excited to
              be a part of an amazing project partnering with the...
            </Text>

            <Flex>
              <Link
                bg="#021D37"
                p="15px"
                borderRadius="3px"
                color="#FFF"
                mr="20px"
              >
                <FaChevronLeft size="20px" />
              </Link>
              <Link bg="#021D37" p="15px" borderRadius="3px" color="#FFF">
                <FaChevronRight size="20px" />
              </Link>
            </Flex>
          </Box>
        </Box>

        <Box pl="48px" w="35%">
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
                          textAlign="left"
                          color="rgba(2, 29, 55, 0.5)"
                          mt="5px"
                          ml="22px"
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
      </Flex>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default BlogPost;
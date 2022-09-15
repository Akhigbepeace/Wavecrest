import {
  Box,
  Button,
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "components/Navbar";
import blogPostImage from "assets/Images/blogpost.png";
import searchImg from "assets/Images/search.svg";
import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";

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

  const navigate = useNavigate();

  const BackToBlog = (e) => {
    e.preventDefault();
    navigate("/blog", { replace: true });
  };
  const [searchParams] = useSearchParams();
  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" position="relative">
        <Image
          src={searchParams.get("image")}
          h="100%"
          w="100%"
          objectFit="cover"
        />

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
            {searchParams.get("headline")}
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
          w={{
            sm: "90%",
            md: "85%",
            lg: "80%",
            xl: "75%",
            "2xl": "75%",
          }}
          mx="auto"
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
            {searchParams.get("date")}
          </Heading>

          <Box>
            <Text
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
              src={searchParams.get("image")}
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

        <Box
          pl="48px"
          w="35%"
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
                fontFamily: "Manrope",
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
                    cursor="pointer"
                    transition="all ease 0.5s"
                    _hover={{
                      bg: "#DDD",
                    }}
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

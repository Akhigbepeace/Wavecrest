import React from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  InputRightElement,
  Heading,
  InputGroup,
} from "@chakra-ui/react";

const searchImg = "/assets/imgs/search.svg";

const BlogSideBar = ({
  currentBlog,
  setCurrentBlog,
  categories,
  blogs,
  ShowPosts,
}) => {
  const categoryMap = {};

  blogs.forEach((bl) => {
    categoryMap[bl.category] = bl;
  });

  return (
    <Box
      w="300px"
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
        <InputRightElement>
          <Image
            src={searchImg}
            w="20px"
            h="20px"
            mt="23px"
            mr="24px"
            alignItems="center"
          />
        </InputRightElement>
      </InputGroup>

      <Box>
        <Heading fontFamily="Playfair Display" fontWeight="700" fontSize="32px">
          Categories
        </Heading>

        <Box mt="25px">
          {categories.map((category, index) => {
            return (
              <Box
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
          {currentBlog.posts.map((post, index) => {
            return (
              post.isTopPost && (
                <Flex
                  key={index}
                  bg="#EBEDEF"
                  p="25px 35px"
                  borderBottom={
                    currentBlog.posts.length - 1 === index
                      ? "none"
                      : "1px solid rgba(2, 29, 55, 0.25)"
                  }
                  cursor="pointer"
                  onClick={() => ShowPosts(post)}
                  transition="all ease 0.5s"
                  _hover={{
                    bg: "#DDD",
                  }}
                >
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
                      {post.postHeading}
                    </Heading>

                    <Text
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="12px"
                      lineHeight="16px"
                      color="rgba(2, 29, 55, 0.5)"
                      mt="10px"
                      mb="15px"
                      ml="20px"
                    >
                      {post.postDate}
                    </Text>
                  </Box>
                </Flex>
              )
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSideBar;

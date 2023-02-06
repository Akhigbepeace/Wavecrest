import {
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { CATEGORIES, CATEGORY_MAP } from "data/blog";
import React from "react";
import BlogMenuItem from "./BlogMenuImage";

const MobileBlogMenu = (props: any) => {
  const { setCurrentBlog } = props;

  const categoryMap = CATEGORY_MAP;
  const categories = CATEGORIES;

  return (
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

        <PopoverContent bg="#EBEDEF" w="136px" _focus={{ boxShadow: "none" }}>
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
  );
};

export default MobileBlogMenu;

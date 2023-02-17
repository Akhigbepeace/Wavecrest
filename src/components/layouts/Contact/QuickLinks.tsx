import { Flex, Link, Text } from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import NextLink from "next/link";
import React from "react";
import { quickLinks } from "./constants";

const QuickLinks = () => {
  return (
    <Flex justifyContent="space-between">
      {quickLinks.map((quickLink, index) => {
        return (
          <NextLink href={quickLink.href} key={index} legacyBehavior passHref>
            <Link
              w="294px"
              h="241px"
              mr="25px"
              transition="all ease 0.8s"
              cursor="pointer"
              _hover={{
                transform: "scale(1.2)",
              }}
            >
              <PeaceImage
                src={quickLink.image}
                alt="quicklinks-images"
                w="100%"
                h="100%"
                borderRadius="3px"
                objectFit="cover"
              />

              <Flex
                bg="linear-gradient(180deg, rgba(2, 29, 55, 0) 0%, rgba(2, 29, 55, 0.7) 100%);"
                position="relative"
                h="100%"
                top="-241px"
                borderRadius="3px"
              >
                <Text
                  color="#FFF"
                  fontFamily="Playfair Display"
                  fontSize="22px"
                  mt="auto"
                  mx="auto"
                  mb="20px"
                  textAlign="center"
                >
                  {quickLink.text}
                </Text>
              </Flex>
            </Link>
          </NextLink>
        );
      })}
    </Flex>
  );
};

export default QuickLinks;

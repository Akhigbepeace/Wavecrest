import { Link, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { socials } from "components/organisms/Footer/constant";
import NextLink from "next/link";

const SocialMediaLinks = () => {
  return (
    <Flex>
      {socials.map((social, index) => {
        return (
          <NextLink key={index} href={social.to} passHref legacyBehavior>
            <Link target={social.target} rel={social.rel}>
              <Image
                src={social.icon}
                alt="social-media-icon"
                w="40px"
                h="40px"
                mt="10px"
                mr={{
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "0",
                  "2xl": "0",
                }}
                ml={{
                  sm: "0",
                  md: "0",
                  lg: "0",
                  xl: "15px",
                  "2xl": "15px",
                }}
              />
            </Link>
          </NextLink>
        );
      })}
    </Flex>
  );
};

export default SocialMediaLinks;

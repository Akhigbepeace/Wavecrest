import NextLink from "next/link";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Logo from "components/atoms/Logo";

const loginForms = [
  {
    label: "Username",
    for: "name",
    variant: "filled",
    placeholder: "Username",
    type: "name",
  },
  {
    label: "Email Address",
    for: "email",
    variant: "filled",
    placeholder: "Email",
    type: "email",
  },
  {
    label: "Password",
    for: "password",
    variant: "filled",
    placeholder: "Password",
    type: "password",
  },
  {
    label: "Confirm Password",
    for: "password2",
    variant: "filled",
    placeholder: "Password",
    type: "password",
  },
];
const SignUpLayout = () => {
  // const Logo = "/assets/imgs/WC-LOGO-july.png";

  return (
    <Box>
      <Box
        bg="#021D37"
        h="200px"
        w="100%"
        zIndex="-3"
        position="relative"
      ></Box>

      <Box
        flexDirection="column"
        alignItems="center"
        mt="-80px"
        mb="100px"
        borderRadius="5px"
        p="30px"
        w={{
          sm: "290px",
          md: "400px",
          lg: "500px",
          xl: "500px",
          "2xl": "500px",
        }}
        mx="auto"
        bg="#FFF"
        zIndex="3"
        boxShadow="1px 1px 10px 1px rgba(0,0,0,0.2)"
      >
        <Box display="grid" placeItems="center" mb="30px">
          <Logo />
        </Box>

        <form action="">
          {loginForms.map((loginForm, index) => {
            return (
              <Fragment key={index}>
                <label
                  htmlFor={loginForm.for}
                  style={{
                    color: "#021D37",
                    fontFamily: "Manrope",
                    fontSize: "18px",
                  }}
                >
                  {loginForm.label}
                </label>

                <Input
                  type={loginForm.type}
                  variant={loginForm.variant}
                  placeholder={loginForm.placeholder}
                  mb="10px"
                  py="25px"
                  bg="#EBEDEF"
                  _placeholder={{
                    fontFamily: "Manrope",
                  }}
                  isRequired
                ></Input>
              </Fragment>
            );
          })}
        </form>

        <Button
          type="submit"
          w="100px"
          mt="30px"
          bg="#021D37"
          color="white"
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="16px"
          textAlign="center"
          borderRadius="5px"
          _hover={{
            bg: "#020E1B",
          }}
        >
          SIGNUP
        </Button>

        <Flex mt="40px">
          <Text
            fontFamily="Manrope"
            fontSize="16px"
            fontWeight="400"
            color="#021D37"
            mr="10px"
          >
            Already have an account ?
          </Text>

          <NextLink href="/admin" passHref>
            <Link
              textDecoration="underline"
              transition="all ease 0.8s"
              _hover={{
                color: "#020E1B",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUpLayout;

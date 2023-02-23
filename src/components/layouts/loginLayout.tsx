import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Link,
  Text,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type InputValues = {
  email: string;
  password: string;
  name: string;
};

const LoginLayout = () => {
  const Logo = "assets/WC-LOGO-july.png";
  const initialValues: InputValues = {
    name: "",
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialValues);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleInputChange = (e: any) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const isError = input.password === "";

  const navigate = useNavigate();

  const redirectToHome = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/admin/dashboard", { replace: true });
  };

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
        <Box w="60px" mb="30px" mx="auto">
          <Image src={Logo} alt="logo" />
        </Box>

        <form>
          <FormControl>
            <Input
              type="email"
              name="email"
              variant="filled"
              placeholder="Email"
              onChange={handleInputChange}
              mb="10px"
              py="25px"
              bg="#EBEDEF"
              _placeholder={{
                fontFamily: "Manrope",
              }}
            />
          </FormControl>

          <FormControl>
            <InputGroup size="md">
              <Input
                isRequired
                type={show ? "text" : "password"}
                name="password"
                variant="filled"
                placeholder="Password"
                onChange={handleInputChange}
                mb="10px"
                py="25px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope",
                }}
              />
              {isError && (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}

              <InputRightElement width="90px">
                <Button
                  h="30px"
                  mt="13px"
                  size="sm"
                  bg="#DDD"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>

        <Flex justifyContent="space-between" mt="10px">
          <Checkbox
            color="#021D37"
            fontFamily="Manrope"
            fontSize="16px"
            fontWeight="500"
          >
            Remember Me
          </Checkbox>

          <Link
            to="/forgotPassword"
            as={NavLink}
            color="#021D37"
            fontFamily="Manrope"
            fontSize="15px"
            fontWeight="500"
            _hover={{
              textDecoration: "none",
            }}
          >
            Forgot Password
          </Link>
        </Flex>

        <Button
          type="submit"
          w="100px"
          mt="30px"
          bg="#021D37"
          color="white"
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="16px"
          onClick={(e) => redirectToHome(e)}
          textAlign="center"
          borderRadius="5px"
          _hover={{
            bg: "#020E1B",
          }}
        >
          LOGIN
        </Button>

        <Flex mt="40px">
          <Text
            fontFamily="Manrope"
            fontSize="16px"
            fontWeight="400"
            color="#021D37"
            mr="10px"
          >
            Don&apos;t have an account ?
          </Text>
          <Link as={NavLink} to="/signup" textDecoration="underline">
            Sign Up
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default LoginLayout;

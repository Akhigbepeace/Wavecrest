import {
  Box,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "components/atoms/Logo";
import { useRouter } from "next/router";
import React, { useState } from "react";
type InputValues = {
  email: string;
  password: string;
  name: string;
};

const LoginLayout = () => {
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

  const router = useRouter();
  const isError = input.password === "";

  const redirectToHome = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/admin/dashboard");
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
        <Box display="grid" placeItems="center" mb="30px">
          <Logo />
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
      </Box>
    </Box>
  );
};

export default LoginLayout;

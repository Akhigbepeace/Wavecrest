import {
  Box,
  Button,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "components/atoms/Logo";

import React, { FormEvent, SyntheticEvent, useState } from "react";

type LoginLayoutProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  error: string;
};
const LoginLayout = (props: LoginLayoutProps) => {
  const { onSubmit, onChange, error } = props;

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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

        <form onSubmit={onSubmit}>
          <FormControl>
            <Input
              type="email"
              name="email"
              variant="filled"
              placeholder="Email"
              required
              aria-required
              onChange={onChange}
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
                aria-required
                placeholder="Password"
                mb="10px"
                py="25px"
                onChange={onChange}
                required
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope",
                }}
              />

              <InputRightElement width="90px">
                <Button
                  h="30px"
                  mt="13px"
                  size="sm"
                  type="button"
                  bg="#DDD"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {error && <Box color="red">{error}</Box>}

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
            LOGIN
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginLayout;

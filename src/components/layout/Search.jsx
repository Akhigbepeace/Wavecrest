import {
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import searchIcon from "assets/Images/search.svg";
import React from "react";

const Search = () => {
  return (
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
            src={searchIcon}
            w="20px"
            h="20px"
            mt="23px"
            mr="24px"
            alignItems="center"
          />
        }
      />
    </InputGroup>
  );
};

export default Search;

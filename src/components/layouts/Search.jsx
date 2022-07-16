import { Box, Image, Input } from "@chakra-ui/react";
import searchIcon from "assets/Images/search.svg";
import React from "react";

const Search = () => {
  return (
    <Box>
      <Input variant="filled" type="name" w="278px" h="47px" />
      <Image src={searchIcon} w="20px" h="20px" />
    </Box>
  );
};

export default Search;

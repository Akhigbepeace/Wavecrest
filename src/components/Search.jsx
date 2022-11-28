import { Box, Flex, Image, Input, useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

const searchIcon = "/assets/imgs/search.svg";

const Search = () => {
  const [showSearchBar, setShowSearchBar] = useBoolean();
  const [inputField, setInputField] = useState();

  const inputValues = (e) => {
    setInputField(e.target.value);
  };

  const navigateTo = `/searhResults?searchTerm=${inputField}`;

  const router = useRouter();

  const ShowResult = (e) => {
    e.preventDefault();

    router.push(navigateTo);
  };

  return (
    <Flex alignItems="center" w="278px" h="47px">
      <form onSubmit={(e) => ShowResult(e)}>
        <Input
          h="47px"
          bg="#EBEDEF"
          border="none"
          borderRightRadius="0"
          visibility={showSearchBar ? "block" : "hidden"}
          placeholder="Search"
          onChange={inputValues}
          _placeholder={{
            fontFamily: "Manrope",
            color: "#021D37",
            fontSize: "18px",
            lineHeight: "25px",
            fontWeight: "400",
          }}
        />
      </form>

      <Box
        bg={showSearchBar ? "#EBEDEF" : "#FFF"}
        borderRightRadius="7px"
        p="14px"
        h="100%"
        onClick={() => setShowSearchBar.toggle()}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Image src={searchIcon} />
      </Box>
    </Flex>
  );
};

export default Search;

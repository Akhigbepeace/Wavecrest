import { Box, Flex, Image, Input, useBoolean } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "assets/Images/search.svg";

const Search = () => {
  const [showSearchBar, setShowSearchBar] = useBoolean();

  const navigate = useNavigate();

  const ShowResult = (e) => {
    e.preventDefault();

    navigate("/searhResults", { replace: true });
  };

  console.log();

  return (
    <Flex alignItems="center" w="278px" h="47px">
      <Input
        bg="#EBEDEF"
        border="none"
        h="100%"
        borderRightRadius="0"
        visibility={showSearchBar ? "block" : "hidden"}
        placeholder="Search"
        _placeholder={{
          fontFamily: "Manrope, sans-serif",
          color: "#021D37",
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: "400",
        }}
      />

      <Box
        h="100%"
        bg={showSearchBar ? "#EBEDEF" : "#FFF"}
        borderRightRadius="7px"
        p="15px"
        onClick={() => setShowSearchBar.toggle()}
        onSubmit={ShowResult}
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

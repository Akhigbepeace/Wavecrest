import React from "react";
import Navbar from "components/layout/Navbar";
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import searchIcon from "assets/Images/search.svg";
import Footer from "./Home/Footer";
import FooterCopywright from "./Home/FooterCopywright";

const SearchResult = () => {
  return (
    <Box>
      <Navbar />

      <Box>
        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="60px"
            textAlign="center"
            mt="140px"
          >
            Search Result
          </Text>
          <Text>Tuition</Text>
        </Box>
      </Box>

      <Box>
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
      </Box>

      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default SearchResult;

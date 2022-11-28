import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Grid,
  Link,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "components/Navbar";
import Footer from "../components/Footer";
import FooterCopywright from "../components/FooterCopywright";
import { useRouter } from "next/router";

const about = "/assets/imgs/About.png";
const searchImg = "/assets/imgs/search.svg";
const blogPost2 = "/assets/imgs/aboutus.png";

const results = [
  {
    resultImg: blogPost2,
    category: "News & Events / October 8, 2022.",
    posts:
      "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
  {
    resultImg: blogPost2,
    category: "Admissions / Tuition and Scholarship",
    posts:
      "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
  {
    resultImg: blogPost2,
    category: "News & Events / October 8, 2022.",
    posts:
      "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
  {
    resultImg: blogPost2,
    category: "Admissions / Tuition and Scholarship",
    posts:
      "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
  {
    resultImg: blogPost2,
    category: "News & Events / October 8, 2022.",
    posts:
      "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
  {
    resultImg: blogPost2,
    category: "Admissions / Tuition and Scholarship",
    posts:
      "‘The icing on the cake’ …Wavecrest College of Hospitality Partners with Fly Africa Initiative to break Guinness World Record 2020",
  },
];

const SearchResult = () => {
  const router = useRouter();

  const searchTerm = router.query.searchTerm || "";

  return (
    <Box>
      <Navbar />

      <Box h="200px" w="100%" gridGap="68px" position="relative">
        <Image src={about} h="100%" w="100%" objectFit="cover" />

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Box>
            <Heading
              color="white"
              fontFamily="Manrope"
              fontWeight="700"
              fontSize="30px"
              textAlign="left"
            >
              {searchTerm}
            </Heading>
            <Text
              color="white"
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="60px"
              textAlign="center"
            >
              Search Results
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box w="1200px" m="0 auto" px="91px">
        <Box>
          <Flex alignItems="center" w="49%" my="40px">
            <Input
              variant="filled"
              placeholder="Search"
              h="67px"
              _placeholder={{
                fontFamily: "Manrope",
                color: "#021D37",
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: "400",
              }}
            />

            <Box ml="-40px" zIndex="2">
              <Image src={searchImg} w="20px" h="20px" alignItems="center" />
            </Box>
          </Flex>
        </Box>

        <Grid gridTemplateColumns="1fr 1fr" gridGap="30px" mb="60px">
          {results.map((result, index) => {
            return (
              <Fragment key={index}>
                <Link
                  href="/posts"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Image src={result.resultImg} w="611px" objectFit="contain" />
                  <Box>
                    <Text
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      color="rgba(2, 29, 55, 0.44)"
                      my="5px"
                    >
                      {result.category}
                    </Text>
                    <Heading
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="22px"
                      color="#021D37"
                    >
                      {result.posts}
                    </Heading>
                  </Box>
                </Link>
              </Fragment>
            );
          })}
        </Grid>

        <Flex>
          <Link bg="#021D37" p="15px" borderRadius="3px" color="#FFF" mr="50px">
            <FaChevronLeft size="35px" />
          </Link>
          <Link bg="#021D37" p="15px" borderRadius="3px" color="#FFF">
            <FaChevronRight size="35px" />
          </Link>
        </Flex>
      </Box>

      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default SearchResult;

import { Box, Button, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React, { Fragment } from "react";
import alumni from "assets/Images/Alumni.png";
import alumni2 from "assets/Images/alumni2.png";
import Navbar from "components/layouts/Navbar";
import Footer from "components/Pages/Home/Footer";
import FooterCopywright from "components/Pages/Home/FooterCopywright";

const Alumni = () => {
  const alumnis = [
    {
      alumnisImg: alumni,
      alumnisDate: "Personal stories / October 22, 2022.",
      alumnisHeading:
        "“I Want to Own My Restaurant That is Why I Came to Wavecrest College for Training” -Victoria Joseph",
      aluminsText:
        "Hello, may we meet you?My name is Victoria JosephWhat inspired you to study at Wavecrest College?I have always wanted to own my restaurant so looking for a school that can...",
    },
  ];

  const newsPosts = [
    {
      alumnisImg: alumni,
      alumnisDate: "Personal stories / October 22, 2022.",
      alumnisHeading:
        "“I Want to Own My Restaurant That is Why I Came to Wavecrest College for Training” -Victoria Joseph",
      aluminsText:
        "Hello, may we meet you?My name is Victoria JosephWhat inspired you to study at Wavecrest College?I have always wanted to own my restaurant so looking for a school that can...",
    },
  ];

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={alumni} h="100%" w="100%" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize="60px"
            textAlign="center"
            mt="140px"
          >
            ALUMNI
          </Text>
        </Box>
      </Box>

      <Box bg="#EBEDEF">
        <Flex
          w="1246px"
          h="600px"
          m="0 auto"
          position="relative"
          bottom="185px"
        >
          <Box bg="#fff" p="55px 65px">
            <Heading
              fontFamily="Playfair Display"
              fontSize="40px"
              fontWeight="700"
              color="#021d37"
            >
              Wavecrest Alumni
            </Heading>
            <Text
              fontFamily="Manrope"
              fontSize="26px"
              lineHeight="40px"
              fontWeight="400"
              h="306px"
              mt="20px"
              color="#021d37"
            >
              We are one of the biggest Colleges of Hospitality in West Africa,
              with over 2000 alumni students scattered all over the globe
              showcasing excellence. From your time as a student to your
              post-graduate experience as an alumni, Wavecrest’s support and
              amenities continue, as a result of your connection to the
              Wavecrest Alumni Network.
            </Text>

            <Text
              fontFamily="Playfair Display"
              fontSize="30px"
              fontWeight="600"
              color="#021d37"
              mt="23px"
            >
              Are you an Alumni?
            </Text>

            <Button
              bg="#021d37"
              p="10px 25px"
              fontFamily="Manrope"
              fontSize="20px"
              fontWeight="700"
              textAlign="center"
              color="#fff"
              mt="10px"
              _hover={{
                bg: "#020E1B",
              }}
            >
              JOIN HERE
            </Button>
          </Box>
          <Image src={alumni2} w="560px" h="100%" />
        </Flex>

        <Flex>
          <Box bg="#fff" w="65%" p="0 83px" pb="100px">
            <Heading
              mt="24px"
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
            >
              Events and Opportunities
            </Heading>

            {alumnis.map((alumni, index) => {
              return (
                <Fragment>
                  <Box key={index}>
                    <Image
                      src={alumni.alumnisImg}
                      borderRadius="3px"
                      objectFit="cover"
                      mt="33px"
                      h="279px"
                      w="100%"
                    />

                    <Text
                      mt="8px"
                      color="rgba(2, 29, 55, 0.44)"
                      fontFamily="Manrope"
                      fontWeight="500"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {alumni.alumnisDate}
                    </Text>

                    <Heading
                      color="#021d37"
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="22px"
                      lineHeight="30px"
                    >
                      {alumni.alumnisHeading}
                    </Heading>

                    <Text
                      mt="10px"
                      color="#021d37"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {alumni.aluminsText}
                    </Text>
                  </Box>

                  <Box key={index}>
                    <Image
                      src={alumni.alumnisImg}
                      w="100%"
                      h="279px"
                      objectFit="cover"
                      borderRadius="3px"
                      mt="33px"
                    />

                    <Text
                      mt="8px"
                      color="rgba(2, 29, 55, 0.44)"
                      fontFamily="Manrope"
                      fontWeight="500"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {alumni.alumnisDate}
                    </Text>

                    <Heading
                      color="#021d37"
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="22px"
                      lineHeight="30px"
                    >
                      {alumni.alumnisHeading}
                    </Heading>

                    <Text
                      mt="10px"
                      color="#021d37"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {alumni.aluminsText}
                    </Text>
                  </Box>

                  <Box key={index}>
                    <Image
                      src={alumni.alumnisImg}
                      borderRadius="3px"
                      mt="33px"
                      objectFit="cover"
                      h="279px"
                      w="100%"
                    />

                    <Text
                      mt="8px"
                      color="rgba(2, 29, 55, 0.44)"
                      fontFamily="Manrope"
                      fontWeight="500"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {alumni.alumnisDate}
                    </Text>

                    <Heading
                      color="#021d37"
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="22px"
                      lineHeight="30px"
                    >
                      {alumni.alumnisHeading}
                    </Heading>

                    <Text
                      mt="10px"
                      color="#021d37"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {alumni.aluminsText}
                    </Text>
                  </Box>
                </Fragment>
              );
            })}
          </Box>

          <Box w="35%" p="0 75px">
            <Heading
              mt="24px"
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
            >
              News Post
            </Heading>

            {newsPosts.map((newsPost, index) => {
              return (
                <Fragment>
                  <Box key={index}>
                    <Image
                      src={newsPost.alumnisImg}
                      borderRadius="3px"
                      h="279px"
                      w="100%"
                      objectFit="cover"
                      mt="33px"
                    />

                    <Text
                      mt="8px"
                      color="rgba(2, 29, 55, 0.44)"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {newsPost.alumnisDate}
                    </Text>

                    <Heading
                      color="#021d37"
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="22px"
                      lineHeight="30px"
                    >
                      {newsPost.alumnisHeading}
                    </Heading>

                    <Text
                      mt="10px"
                      color="#021d37"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {newsPost.aluminsText}
                    </Text>
                  </Box>

                  <Box key={index}>
                    <Image
                      src={newsPost.alumnisImg}
                      borderRadius="3px"
                      h="279px"
                      w="100%"
                      objectFit="cover"
                      mt="33px"
                    />

                    <Text
                      mt="8px"
                      color="rgba(2, 29, 55, 0.44)"
                      fontFamily="Manrope"
                      fontWeight="500"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {newsPost.alumnisDate}
                    </Text>

                    <Heading
                      color="#021d37"
                      fontFamily="Playfair Display"
                      fontWeight="700"
                      fontSize="22px"
                      lineHeight="30px"
                    >
                      {newsPost.alumnisHeading}
                    </Heading>

                    <Text
                      mt="10px"
                      color="#021d37"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      lineHeight="25px"
                    >
                      {newsPost.aluminsText}
                    </Text>
                  </Box>
                </Fragment>
              );
            })}
          </Box>
        </Flex>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default Alumni;

import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";

const Partners = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      m="8rem 0"
    >
      <Flex
        m="40px 0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        margin-top="8rem"
      >
        <Text
          position="absolute"
          fontFamily="'Dancing Script', cursive"
          fontSize="150px"
          color="rgba(3, 29, 56, 0.06)"
        >
          Work with us
        </Text>
        <Text
          position="relative"
          top="1rem"
          color="#021D37"
          fontSize="40px"
          fontWeight="700"
        >
          Partners and Sponsors
        </Text>
      </Flex>

      <Flex alignItems="center" overflowX="scroll">
        <Image
          src="assets/Images/Nestle Logo.png"
          alt="Nestle"
          m="0 3rem"
          w="80px"
          h="78px"
        />
        <Image src="assets/Images/bihc logo.png" alt="bihc" m="0 3rem" />
        <Image
          src="assets/Images/raddison hotel.png"
          alt="raddison"
          m="0 3rem"
        />
        <Image
          src="assets/Images/Maggi Logo.png"
          alt="Maggi"
          m="0 3rem"
          h="100px"
        />
        <Image
          src="assets/Images/women's board.jpg"
          alt="women board"
          m="0 3rem"
        />
        <Image
          src="assets/Images/intercontinental.png"
          alt="intercontinental"
          m="0 3rem"
        />
        <Image
          src="assets/Images/crowneplaza.png"
          alt="crowneplaza"
          m="0 3rem"
        />
        <Image src="assets/Images/sheraton.png" alt="sheraton" m="0 3rem" />
        <Image src="assets/Images/bomahotel.png" alt="bomahotel" m="0 3rem" />
      </Flex>
    </Flex>
  );
};

export default Partners;

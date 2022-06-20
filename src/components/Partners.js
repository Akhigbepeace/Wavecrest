import React from "react";
import { Image, Flex, Text, Link, Box } from "@chakra-ui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Nestle from "../assets/Images/Nestle.png";
import Pau from "../assets/Images/pau.png";
import bihc from "../assets/Images/bihc.png";
import raddison from "../assets/Images/raddison.png";
import maggi from "../assets/Images/Maggi.png";
import womenBoard from "../assets/Images/women's board.jpg";
import sheraton from "../assets/Images/sheraton.png";
import intercontinental from "../assets/Images/intercontinental.png";
import crowneplaza from "../assets/Images/crowneplaza.png";
import starwood from "../assets/Images/starwood.png";
import bomahotel from "../assets/Images/bomahotel.png";

const Partners = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Flex
        m="20px 0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text
          position="absolute"
          fontFamily="Dancing Script, cursive"
          fontWeight="400"
          fontSize="130px"
          color="rgba(3, 29, 56, 0.06)"
        >
          Work with us
        </Text>
        <Text
          position="relative"
          top="15px"
          color="#021D37"
          fontFamily="Playfair Display, serif"
          fontSize="40px"
          fontWeight="700"
        >
          Partners and Sponsors
        </Text>
      </Flex>

      <Box mb="-50px">
        <Flex alignItems="center" w="100%" overflowX="hidden">
          <Image src={sheraton} alt="sheraton" mr="20px" />
          <Image src={Nestle} alt="Nestle" w="80px" mr="66px" />
          <Image src={Pau} alt="pauLogo" h="72px" mr="70px" />
          <Image src={bihc} alt="bihc" w="100px" h="100px" mr="59px" />
          <Image src={raddison} alt="raddison" mr="59px" />
          <Image src={maggi} alt="Maggi" h="100px" mr="59px" />
          <Image src={womenBoard} alt="women board" h="100px" mr="59px" />
          <Image
            src={intercontinental}
            alt="intercontinental"
            h="100px"
            mr="59px"
          />
          <Image src={crowneplaza} alt="crowneplaza" mr="59px" />
          <Image src={starwood} alt="starwood" w="208px" h="72px" mr="59px" />
          <Image src={bomahotel} alt="bomahotel" mr="59px" />
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          top="-150px"
        >
          <Link
            bg="linear-gradient(90deg, rgba(197,197,197,1) 30%, rgba(209,209,209,0.8) 70%, rgba(248,248,248,1) 88%, rgba(255,255,255,0.5) 100%)"
            h="150px"
            display="flex"
            alignSelf="center"
            pt="40px"
            px="20px"
            color="gray"
          >
            <FaChevronCircleLeft size="50px" />
          </Link>
          <Link
            bg="linear-gradient(270deg, rgba(197,197,197,1) 30%, rgba(209,209,209,0.8) 70%, rgba(248,248,248,1) 88%, rgba(255,255,255,0.5) 100%)"
            h="150px"
            display="flex"
            alignSelf="center"
            pt="40px"
            px="20px"
            color="gray"
          >
            <FaChevronCircleRight size="50px" />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Partners;

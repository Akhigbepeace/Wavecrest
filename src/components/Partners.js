import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";
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
          top="20px"
          color="#021D37"
          fontFamily="Playfair Display, serif"
          fontSize="40px"
          fontWeight="700"
        >
          Partners and Sponsors
        </Text>
      </Flex>
      <Flex alignItems="center" overflowX="scroll" mt="20px">
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
    </Flex>
  );
};

export default Partners;

//   <Flex alignItems="center" overflowX="scroll" mt="20px">
//     <Image
//       src="assets/Images/Nestle Logo.png"
//       alt="Nestle"
//       m="0 30px"
//       w="80px"
//       h="78px"
//     />
//     <Image src="assets/Images/bihc logo.png" alt="bihc" m="0 30px" />
//     <Image
//       src="assets/Images/raddison hotel.png"
//       alt="raddison"
//       m="0 30px"
//     />
//     <Image
//       src="assets/Images/Maggi Logo.png"
//       alt="Maggi"
//       m="0 30px"
//       h="100px"
//     />
//     <Image
//       src="assets/Images/womens board.jpg"
//       alt="womens board"
//       m="0 30px"
//     />
//     <Image
//       src="assets/Images/intercontinental.png"
//       alt="intercontinental"
//       m="0 30px"
//     />
//     <Image
//       src="assets/Images/crowneplaza.png"
//       alt="crowneplaza"
//       m="0 30px"
//     />
//     <Image src="assets/Images/sheraton.png" alt="sheraton" m="0 30px" />
//     <Image src="assets/Images/bomahotel.png" alt="bomahotel" m="0 30px" />
//   </Flex>
// </Flex>
//   );
// };

// export default Partners;

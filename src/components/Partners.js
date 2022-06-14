import React from "react";
import { Image, Flex, Text } from "@chakra-ui/react";

const Partners = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Flex
        m="40px 0"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text
          position="absolute"
          fontFamily="Dancing Script, cursive"
          fontWeight="400"
          fontSize="150px"
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
        <Image
          src="assets/Images/Nestle Logo.png"
          alt="Nestle"
          m="0 20px"
          w="208px"
          h="78px"
        />
        <Image src="assets/Images/bihc logo.png" alt="bihc" m="0 20px" />
        <Image
          src="assets/Images/raddison hotel.png"
          alt="raddison"
          m="0 20px"
        />
        <Image
          src="assets/Images/Maggi Logo.png"
          alt="Maggi"
          m="0 25px"
          h="100px"
        />
        <Image
          src="assets/Images/women's board.jpg"
          alt="women board"
          m="0 25px"
        />
        <Image
          src="assets/Images/intercontinental.png"
          alt="intercontinental"
          m="0 25px"
        />
        <Image
          src="assets/Images/crowneplaza.png"
          alt="crowneplaza"
        />
        <Image
          src="assets/Images/sheraton.png"
          alt="sheraton"
        />
        <Image
          src="assets/Images/starwood.png"
          alt="starwood"
          w="208px"
          h="72px"
        />
        <Image
          src="assets/Images/pau logo.png"
          alt="pau logo"
          w="208px"
          h="72px"
          ml="35px"
        />

        <Image src="assets/Images/bomahotel.png" alt="bomahotel" m="0 20px" />
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

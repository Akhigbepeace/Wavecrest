import {
  Heading,
  Box,
  Text,
  Flex,
  Image,
  Button,
  Grid,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import aboutus from "assets/Images/aboutus.png";

const ApplyOnline = () => {
  const images = [
    {
      hotelPic: aboutus,
    },
    {
      hotelPic: aboutus,
    },
    {
      hotelPic: aboutus,
    },
    {
      hotelPic: aboutus,
    },
  ];

  return (
    <Fragment>
      <Box p="100px 91px">
        <Flex alignItems="center">
          <Box>
            <Heading
              fontFamily="Playfair Display"
              fontSize="32px"
              fontWeight="700"
              color="#021D37"
            >
              Hostel Application
            </Heading>
            <Text
              fontFamily="Manrope"
              fontSize="24px"
              fontWeight="400"
              lineHeight="33px"
              my="24px"
              color="#021D37"
            >
              Wavecrest offers accomodation to its students. We have a two well
              furnished hostels. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Reiciendis possimus quasi distinctio! Eaque
              reprehenderit quo, ut perferendis, maxime dolor culpa recusandae
              autem saepe laborum possimus fugiat quisquam ipsum incidunt quae.
            </Text>
            <Button
              bg="#021D37"
              color="#FFF"
              textAlign="center"
              border="none"
              fontFamily="Manrope"
              fontSize="16px"
              fontWeight="700"
              w="226px"
              h="47px"
              _hover={{
                bg: "#020E1B",
              }}
            >
              Register
            </Button>
          </Box>
          <Image
            src={aboutus}
            w="580px"
            h="323px"
            objectFit="cover"
            borderRadius="3px"
            ml="78px"
          />
        </Flex>

        <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap="10px" mt=" 60px">
          {images.map((image) => {
            return (
              <Image
                src={image.hotelPic}
                w="309px"
                h="414px"
                objectFit="cover"
              />
            );
          })}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default ApplyOnline;

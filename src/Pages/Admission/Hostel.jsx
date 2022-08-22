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
      <Box
        p={{
          sm: "35px 20px",
          md: "20px 40px",
          lg: "30px 91px",
          xl: "50px 91px",
          "2xl": "100px 91px",
        }}
      >
        <Flex
          alignItems="center"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <Box>
            <Box>
              <Box
                w="88px"
                h="3px"
                bg="#021D37"
                mb="10px"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                  "2xl": "none",
                }}
              ></Box>

              <Box>
                <Heading
                  fontFamily="Playfair Display"
                  fontSize="32px"
                  fontWeight="700"
                  color="#021D37"
                  display={{
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "block",
                    "2xl": "block",
                  }}
                >
                  Hostel Application
                </Heading>
                <Heading
                  fontFamily="Playfair Display"
                  fontSize="24px"
                  fontWeight="700"
                  color="#021D37"
                  display={{
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "none",
                    "2xl": "none",
                  }}
                >
                  Apply For A Hostel
                </Heading>
              </Box>
            </Box>

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
            w="323px"
            h="323px"
            objectFit="cover"
            borderRadius="5px"
            ml={{
              sm: "0",
              md: "0",
              lg: "0",
              xl: "78px",
              "2xl": "78px",
            }}
            mt={{
              sm: "50px",
              md: "50px",
              lg: "50px",
              xl: "0",
              "2xl": "0",
            }}
          />
        </Flex>

        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          gridGap="10px"
          mt=" 60px"
        >
          {images.map((image) => {
            return (
              <Image
                src={image.hotelPic}
                w="309px"
                h="309px"
                borderRadius="5px"
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

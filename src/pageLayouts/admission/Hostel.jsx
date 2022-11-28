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
import MobileSideBar from "components/MobileSideBar";
import { useRouter } from "next/router";

const ApplyOnline = () => {
  const hostel1 =
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667228298/hostel1_ku7zu0.jpg";
  const hostel2 =
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667228296/hostel2_obtkc0.jpg";
  const hostel3 =
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667228297/hostel3_bh9uua.jpg";
  const hostel4 =
    "https://res.cloudinary.com/wavecrest1/image/upload/v1667228297/hostel4_imflsp.jpg";
  const images = [hostel1, hostel2, hostel3, hostel4];

  const router = useRouter();

  const navigateTo = [
    {
      name: "ADMISSION REQUIREMENTS",
      redirect: () => {
        router.push("/admission/admissionRequirements");
      },
    },
    {
      name: "TUITION AND SCHOLARSHIP",
      redirect: () => {
        router.push("/admission/tuitionAndScholarship");
      },
    },
    {
      name: "APPLY ONLINE",
      redirect: () => {
        router.push("/admission/applyOnline");
      },
    },
    {
      name: "FAQs",
      redirect: () => {
        router.push("/admission/faqs");
      },
    },
  ];
  return (
    <Fragment>
      <MobileSideBar />
      <Box
        h="441px"
        w="100%"
        gridGap="68px"
        position="relative"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      >
        <Image src={hostel1} h="100%" w="100%" objectFit="cover" />

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
            fontSize="30px"
            textAlign="center"
            mt="250px"
          >
            HOSTEL APPLICATION
          </Text>
        </Box>
      </Box>

      <Box
        p={{
          sm: "35px 20px",
          md: "20px 40px",
          lg: "30px 91px",
          xl: "50px 91px",
          "2xl": "100px 91px",
        }}
        w={{
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1280px",
          "2xl": "1280px",
        }}
        mx="auto"
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
            <Flex
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "flex",
                "2xl": "flex",
              }}
              alignItems="center"
            >
              <Image
                src={hostel3}
                w="323px"
                h="323px"
                objectFit="contain"
                borderRadius="5px"
                mt="30px"
                mr="30px"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                  "2xl": "none",
                }}
              />

              <Box>
                <Box>
                  <Box
                    w="88px"
                    h="3px"
                    bg="#021D37"
                    mb="5px"
                    mt="20px"
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
                  fontSize={{
                    sm: "18px",
                    md: "22px",
                    lg: "24px",
                    xl: "24px",
                    "2xl": "24px",
                  }}
                  fontWeight="400"
                  lineHeight="33px"
                  my="24px"
                  color="#021D37"
                >
                  Wavecrest offers accommodation to her students both on campus
                  and off campus. The hostel services are outsourced but
                  regulated by the College
                </Text>

                <Button
                  to="/admission/hostelApplication"
                  w="142px"
                  height="46.89px"
                  bg="#021D37"
                  border="none"
                  color="#fff"
                  fontWeight="700"
                  fontSize="16px"
                  lineHeight="22px"
                  textAlign="center"
                  borderRadius="3px"
                  mt="8px"
                  _hover={{
                    bg: "#020E1B",
                    transition: "all ease 0.4s",
                  }}
                >
                  REGISTER
                </Button>
              </Box>

              <Image
                src={hostel3}
                w="323px"
                h="323px"
                objectFit="cover"
                borderRadius="5px"
                mt="30px"
                ml="30px"
                display={{
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "block",
                  "2xl": "block",
                }}
              />
            </Flex>
          </Box>
        </Flex>

        <Grid
          gridTemplateColumns={{
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "repeat(4, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          gridGap="10px"
          mt=" 60px"
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                w={{
                  sm: "auto",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "309px",
                  "2xl": "309px",
                }}
                h={{
                  sm: "auto",
                  md: "1fr 1fr",
                  lg: "1fr 1fr 1fr",
                  xl: "309px",
                  "2xl": "309px",
                }}
                borderRadius="5px"
                objectFit="cover"
              />
            );
          })}
        </Grid>

        <Box
          mt="70px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        >
          <Heading
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
            textAlign="center"
            mb="22px"
          >
            Navigate To:
          </Heading>
          <Grid
            gridTemplateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr",
            }}
            mb="50px"
          >
            {navigateTo.map((items, index) => {
              return (
                <Button
                  key={index}
                  fontFamily="Manrope"
                  fontSize="18px"
                  py="25px"
                  mb="15px"
                  mr="15px"
                  textAlign="center"
                  fontWeight="700"
                  bg="#EEE"
                  onClick={items.redirect}
                >
                  {items.name}
                </Button>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ApplyOnline;

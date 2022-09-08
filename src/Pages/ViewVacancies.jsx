import { Box, Button, Heading, Input, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/Navbar";
import about from "assets/Images/About.png";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const ViewVacancies = () => {
  const forms = [
    {
      fieldType: "text",
      placeHolder: "Full Name",
      variant: "filled",
    },
    {
      fieldType: "email",
      placeHolder: "Email",
      variant: "filled",
    },
    {
      fieldType: "number",
      placeHolder: "Phone Number",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Address",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Company",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Post",
      variant: "filled",
    },
  ];

  const navigate = useNavigate();

  const BackToJobVancanies = (e) => {
    e.preventDefault();
    navigate("/career/viewJobVacancies", { replace: true });
  };

  return (
    <Box>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={about} h="100%" w="100%" objectFit="cover" />

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
            fontSize="35px"
            textAlign="center"
            mt="250px"
          >
            APPLY FOR JOB
          </Text>
        </Box>
      </Box>

      <Box
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
        <Box>
          <Box>
            <Button
              fontFamily="Manrope"
              fontSize="18px"
              py="25px"
              mb="52px"
              fontWeight="700"
              bg="#EEE"
              mt={{
                sm: "20px",
                md: "20px",
                lg: "20px",
                xl: "20px",
                "2xl": "20px",
              }}
              onClick={(e) => BackToJobVancanies(e)}
            >
              <FaChevronLeft size="20px" />
              Back To Job Vacancies
            </Button>

            <Box
              w="88px"
              h="3px"
              bg="#021D37"
              mb="10px"
              mt="60px"
              display={{
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
                "2xl": "none",
              }}
            ></Box>

            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
            >
              Apply For Job
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "18px",
              lg: "22px",
              xl: "22px",
              "2xl": "22px",
            }}
            lineHeight="33px"
            color="#021D37"
            my="24px"
          >
            Wavecrest offers accomodation to its students. We have a two well
            furnished hostels orem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
        </Box>

        <Box>
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                display="block"
                w={{
                  sm: "100%",
                  md: "400px",
                  lg: "526px",
                  xl: "526px",
                  "2xl": "526px",
                }}
                h="67px"
                mb="10px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            );
          })}
        </Box>

        <Button
          type="submit"
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
          mb="70px"
          _hover={{
            bg: "#020E1B",
            transition: "all ease 0.4s",
          }}
        >
          APPLY
        </Button>
      </Box>

      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default ViewVacancies;

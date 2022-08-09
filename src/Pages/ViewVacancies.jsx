import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "components/Navbar";
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
  return (
    <Box>
      <Navbar />

      <Box px="91px">
        <Box>
          <Heading
            mt="60px"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
          >
            Apply For Job
          </Heading>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize="24px"
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
                required={true}
                display="block"
                w="526px"
                h="67px"
                mb="10px"
                bg="#EBEDEF"
                _placeholder={{
                  fontFamily: "Manrope, sans-serif",
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
          fontFamily="Manrope"
          fontSize="16px"
          fontWeight="700"
          m="20px 0"
          borderRadius="3px"
          bg="#021D37"
          py="7px"
          textAlign="center"
          color="#FFF"
          _hover={{
            bg: "#020E1B",
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

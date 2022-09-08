import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Select,
  Button,
} from "@chakra-ui/react";

import React, { Fragment } from "react";
import studyProgrammes3 from "assets/Images/studyprogrammes3.png";

const Internship = () => {
  const forms = [
    {
      fieldType: "text",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Address",
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
      placeHolder: "Class",
      variant: "filled",
    },
  ];

  const programmes = [
    {
      course: "HND in Hospitality Management",
    },
    {
      course: "ND in Hospitality Management",
    },
    {
      course: "Certificate in Hospitality Operations",
    },
  ];
  return (
    <Fragment>
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
        <Image src={studyProgrammes3} h="100%" w="100%" objectFit="cover" />

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
            fontSize="40px"
            textAlign="center"
            mt="250px"
          >
            INTERNSHIP
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
            <Box
              w="88px"
              h="3px"
              bg="#021D37"
              mt={{
                sm: "60px",
                md: "60px",
                lg: "60px",
                xl: "none",
                "2xl": "none",
              }}
              mb="10px"
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
              Apply for Internship
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "24px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            lineHeight="33px"
            color="#021D37"
            my="24px"
          >
            Wavecrest offers accomodation to its students. We have a two well
            furnished hostels orem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute pidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Text>
        </Box>

        <Flex flexDirection="column">
          {forms.map((form, index) => {
            return (
              <Input
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
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
        </Flex>

        <Select
          placeholder="Programme"
          w={{
            sm: "100%",
            md: "400px",
            lg: "526px",
            xl: "526px",
            "2xl": "526px",
          }}
          h="67px"
          bg="#EBEDEF"
          textAlign="left"
          fontFamily="Manrope"
          border="none"
          color="#021D37"
          fontSize="18px"
          lineHeight="25px"
          fontWeight="400"
          mb="10px"
        >
          {programmes.map((programme, index) => {
            return (
              <option
                value={programme.course}
                key={index}
                borderBottom={
                  programme.length - 1 === index ? "none" : "1px solid #EBEDEF"
                }
              >
                {programme.course}
              </option>
            );
          })}
        </Select>

        <Button
          w="142px"
          height="46.89px"
          bg="#021D37"
          border="none"
          color="#fff"
          fontFamily="Manrope"
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
          PRE-REGISTER
        </Button>

        <Text
          fontFamily="Manrope"
          fontSize={{
            sm: "18px",
            md: "24px",
            lg: "24px",
            xl: "24px",
            "2xl": "24px",
          }}
          fontWeight="400"
          my="45px"
        >
          NB: After payment, a google link would be sent to your mail to
          complete the registration
        </Text>
      </Box>
    </Fragment>
  );
};

export default Internship;

import { Heading, Input, Box, Text, Button, Textarea } from "@chakra-ui/react";

import React, { Fragment } from "react";

const ApplyOnline = () => {
  const forms = [
    {
      fieldType: "name",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Company",
      variant: "filled",
    },
    {
      fieldType: "email",
      placeHolder: "Email",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Job Description",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Application Deadline",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Application Deadline",
      variant: "filled",
    },
  ];

  return (
    <Fragment>
      <Box px="91px">
        <Box>
          <Heading
            mt="60px"
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize="32px"
            color="#021D37"
          >
            Post Job Vacancy
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

          <Textarea
            placeholder="Extra Notes"
            variant="filled"
            w="526px"
            h="80px"
            _placeholder={{
              fontFamily: "Manrope, sans-serif",
              color: "#021D37",
              fontSize: "18px",
              lineHeight: "25px",
              fontWeight: "400",
            }}
          />
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
          POST
        </Button>

        <Text fontFamily="Manrope" fontSize="24px" fontWeight="400" my="45px">
          NB: After payment, a google link would be sent to your mail to
          complete the registration
        </Text>
      </Box>
    </Fragment>
  );
};

export default ApplyOnline;

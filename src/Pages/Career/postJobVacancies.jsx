import {
  Heading,
  Input,
  Box,
  Text,
  Image,
  Button,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import React, { Fragment, useRef, useState } from "react";
import emailjs from "emailjs-com";
import waveimg from "assets/Images/waveimg.png";

const PostJobVacancies = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_company: "",
    job_description: "",
    application_deadline: "",
    user_message: "",
  };

  const [inputField, setInputField] = useState(initialValues);

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const forms = [
    {
      fieldType: "name",
      name: "user_name",
      label: "Full Name",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "email",
      name: "user_email",
      label: "Email",
      placeHolder: "Please Enter Your Email",
      variant: "filled",
    },
    {
      fieldType: "text",
      name: "user_company",
      label: "Company",
      placeHolder: "Name Of Company",
      variant: "filled",
    },
    {
      fieldType: "text",
      name: "job_description",
      label: "Job Description",
      placeHolder: "Job Description",
      variant: "filled",
    },
    {
      fieldType: "date",
      name: "application_deadline",
      label: "Application Deadline",
      variant: "filled",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_i27quow",
      form.current,
      "JPAG_ZJVlAcuO_5D-"
    );

    if (res.status === 200 || res.text === "OK") {
      setInputField(initialValues);
    }
  };

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
        <Image src={waveimg} h="100%" w="100%" objectFit="cover" />

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
            px="10px"
          >
            POST JOB VACANCIES
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
              mt={{
                sm: "0",
                md: "0px",
                lg: "0",
                xl: "60px",
                "2xl": "60px",
              }}
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
            >
              Post Job Vacancy
            </Heading>
          </Box>

          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "21px",
              lg: "21px",
              xl: "21px",
              "2xl": "21px",
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

        <form ref={form} onSubmit={sendEmail}>
          <Box>
            {forms.map((form, index) => {
              return (
                <Fragment>
                  <FormLabel
                    key={index}
                    fontFamily="Manrope"
                    color="#021D37"
                    fontSize="18px"
                    lineHeight="25px"
                    fontWeight="600"
                    mt="20px"
                  >
                    {form.label}
                  </FormLabel>
                  <Input
                    type={form.fieldType}
                    placeholder={form.placeHolder}
                    variant={form.variant}
                    name={form.name}
                    display="block"
                    value={inputField[form.name]}
                    onChange={inputValues}
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
                </Fragment>
              );
            })}

            <Box>
              <FormLabel
                fontFamily="Manrope"
                color="#021D37"
                fontSize="18px"
                lineHeight="25px"
                fontWeight="700"
                mt="20px"
              >
                Notes:
              </FormLabel>

              <Textarea
                placeholder="Extra Notes"
                variant="filled"
                bg="#EBEDEF"
                onChange={inputValues}
                name="user_message"
                value={inputField.user_message}
                w={{
                  sm: "100%",
                  md: "400px",
                  lg: "526px",
                  xl: "526px",
                  "2xl": "526px",
                }}
                h="80px"
                _placeholder={{
                  fontFamily: "Manrope",
                  color: "#021D37",
                  fontSize: "18px",
                  lineHeight: "25px",
                  fontWeight: "400",
                }}
              />
            </Box>
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
            mt="20px"
            mb="70px"
            _hover={{
              bg: "#020E1B",
              transition: "all ease 0.4s",
            }}
          >
            POST
          </Button>
        </form>
      </Box>
    </Fragment>
  );
};

export default PostJobVacancies;

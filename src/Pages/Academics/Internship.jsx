import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Select,
  Button,
  Grid,
  useToast,
} from "@chakra-ui/react";

import React, { Fragment, useRef, useState } from "react";
import emailjs from "emailjs-com";
import studyProgrammes3 from "assets/Images/studyprogrammes3.png";
import { useNavigate } from "react-router-dom";

const Internship = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
    user_address: "",
    user_class: "",
    user_programme: "",
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
      fieldType: "text",
      name: "user_name",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "text",
      name: "user_address",
      placeHolder: "Address",
      variant: "filled",
    },
    {
      fieldType: "email",
      placeHolder: "Email",
      name: "user_email",
      variant: "filled",
    },
    {
      fieldType: "number",
      name: "user_number",
      placeHolder: "Phone Number",
      variant: "filled",
    },
    {
      fieldType: "text",
      placeHolder: "Class",
      name: "user_class",
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
  const navigate = useNavigate();
  const navigateTo = [
    {
      name: "PROGRAMMES",
      redirect: () => {
        navigate("/academics/programmes", { replace: true });
      },
    },
    {
      name: "TRAINING",
      redirect: () => {
        navigate("/academics/training", { replace: true });
      },
    },
    {
      name: "NYSC",
      redirect: () => {
        navigate("/academics/nysc", { replace: true });
      },
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_krcopwh",
      form.current,
      "JPAG_ZJVlAcuO_5D-"
    );

    setInputField(initialValues);

    toast({
      title: "SUCCESSFUL !",
      description: "Your request has been submitted",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  const toast = useToast();
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
            The National Board for Technical Education &#40;NBTE&#41; requires
            that students go for an internship. The Industrial Training
            &#40;IT&#41; enables students to put into practice, in the real
            world of work, the theoretical and practical knowledge gained in the
            College in the areas of Front Office, Food &#38; Beverage
            Production, Food &#38; Beverage Service, Housekeeping and any other
            relevant department.
          </Text>
        </Box>

        <form ref={form} onSubmit={sendEmail}>
          <Flex flexDirection="column">
            {forms.map((form, index) => {
              return (
                <Input
                  required
                  key={index}
                  type={form.fieldType}
                  placeholder={form.placeHolder}
                  variant={form.variant}
                  name={form.name}
                  value={inputField[form.name]}
                  w={{
                    sm: "100%",
                    md: "400px",
                    lg: "526px",
                    xl: "526px",
                    "2xl": "526px",
                  }}
                  onChange={inputValues}
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
            onChange={inputValues}
            color="#021D37"
            fontSize="18px"
            lineHeight="25px"
            fontWeight="400"
            mb="10px"
          >
            {programmes.map((programme, index) => {
              return (
                <option
                  name={inputField.user_programme}
                  value={programme.course}
                  key={index}
                  borderbottom={
                    programme.length - 1 === index
                      ? "none"
                      : "1px solid #EBEDEF"
                  }
                >
                  {programme.course}
                </option>
              );
            })}
          </Select>

          <Button
            type="submit"
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
            mb="45px"
            _hover={{
              bg: "#020E1B",
              transition: "all ease 0.4s",
            }}
          >
            PRE-REGISTER
          </Button>
        </form>
      </Box>

      <Box
        mt="70px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
          xl: "91px",
          "2xl": "91px",
        }}
      >
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
    </Fragment>
  );
};

export default Internship;

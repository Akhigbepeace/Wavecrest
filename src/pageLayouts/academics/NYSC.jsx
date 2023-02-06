import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Grid,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";

import React, { Fragment, useRef, useState } from "react";
import emailjs from "emailjs-com";

import MobileSideBar from "components/molecules/Header/MobileSideBar";
import { useRouter } from "next/router";

const NYSC = () => {
  const studyProgrammes3 = "/assets/imgs/studyprogramme.jpg";
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
      name: "user_email",
      placeHolder: "Email",
      variant: "filled",
    },
    {
      fieldType: "tel",
      name: "user_number",
      placeHolder: "Phone Number",
      variant: "filled",
    },
    {
      fieldType: "text",
      name: "user_class",
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
  const router = useRouter();

  const navigateTo = [
    {
      name: "PROGRAMMES",
      redirect: () => {
        router.push("/academics/programmes");
      },
    },
    {
      name: "TRAINING",
      redirect: () => {
        router.push("/academics/training");
      },
    },
    {
      name: "INTERNSHIP",
      redirect: () => {
        router.push("/academics/internship");
      },
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

    setInputField(initialValues);
    if (res.status === 200 || res.text === "OK") {
      toast({
        title: "SUCCESSFUL !",
        description: "Your request has been submitted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const toast = useToast();

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
        <Image
          src={studyProgrammes3}
          alt="banner"
          h="100%"
          w="100%"
          objectFit="cover"
        />

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
            NYSC
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
        mt="50px"
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
              Register for NYSC
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
            color="#021D37"
            lineHeight="33px"
            my="24px"
          >
            Our HND 2 graduates go for the National Youth Service &#40;NYSC&#41;
          </Text>
        </Box>

        <form ref={form} onSubmit={sendEmail}>
          <Flex flexDirection="column">
            {forms.map((form, index) => {
              return (
                <Input
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
                  h="67px"
                  mb="10px"
                  onChange={inputValues}
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
            onChange={inputValues}
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
                  key={index}
                  name={inputField.user_programme}
                  value={inputField[programme.course]}
                  borderBottom={
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

export default NYSC;

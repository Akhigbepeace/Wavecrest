import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";

import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import emailjs from "emailjs-com";
import hostel2 from "assets/Images/hostel2.jpg";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const HostelApplication = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
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
  ];

  const hostels = [
    {
      hostel: "Hostel Types",
      price: "",
    },
    {
      hostel: "Presidential Suite",
      price: " The fee for this hostel is: #500,000",
    },
    {
      hostel: "Royal Hostels",
      price: " The fee for this hostel is: #400,000",
    },
    {
      hostel: "Executive Hostels",
      price: " The fee for this hostel is: #300,000",
    },
    {
      hostel: "One-man Hostels",
      price: " The fee for this hostel is: #200,000",
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

  const navigate = useNavigate();

  const BackToHostel = (e) => {
    e.preventDefault();

    navigate("/admission/hostel", { replace: true });
  };

  const [showCoursePrice, setShowCoursePrice] = useState({});

  const toast = useToast();
  return (
    <Fragment>
      <Navbar />
      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={hostel2} h="100%" w="100%" objectFit="cover" />

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
            HOSTEL APPLICATION
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
        <Button
          fontFamily="Manrope"
          fontSize="18px"
          py="25px"
          mt="20px"
          mb="52px"
          fontWeight="700"
          bg="#EEE"
          onClick={(e) => BackToHostel(e)}
        >
          <FaChevronLeft size="20px" />
          Back To Hostel
        </Button>

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
              Apply for Hostel
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
            Wavecrest offers accommodation to her students both on campus and
            off campus. The hostel services are outsourced but regulated by the
            College
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
            onChange={(e) => {
              const programme = JSON.parse(e.target.value);
              setShowCoursePrice(programme);
            }}
            color="#021D37"
            fontSize="18px"
            lineHeight="25px"
            fontWeight="400"
            mb="10px"
          >
            {hostels.map((items, index) => {
              return (
                <option
                  key={index}
                  name={inputField.user_programme}
                  value={JSON.stringify(items)}
                  borderbottom={
                    items.length - 1 === index ? "none" : "1px solid #EBEDEF"
                  }
                >
                  {items.hostel}
                </option>
              );
            })}
          </Select>

          <Text fontFamily="Manrope" fontSize="18px" fontWeight="400">
            <b> {showCoursePrice.price} </b>
          </Text>

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
            mb="100px"
            _hover={{
              bg: "#020E1B",
              transition: "all ease 0.4s",
            }}
          >
            REGISTER
          </Button>
        </form>
      </Box>

      <Footer />
      <FooterCopywright />
    </Fragment>
  );
};

export default HostelApplication;

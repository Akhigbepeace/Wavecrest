import {
  Box,
  Button,
  Heading,
  Input,
  Image,
  Text,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import React, { Fragment, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/Navbar";
import about from "assets/Images/About.png";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const ViewVacancies = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_company: "",
    user_number: "",
    user_address: "",
    user_post: "",
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
      placeHolder: "Enter Full Name",
      label: "Full Name",
      variant: "filled",
    },
    {
      fieldType: "email",
      name: "user_email",
      label: "Email Address",
      placeHolder: "Enter Email address",
      variant: "filled",
    },
    {
      fieldType: "number",
      name: "user_number",
      label: "Phone Number",
      placeHolder: "Enter Phone Number",
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

    setInputField(initialValues);
  };

  const navigate = useNavigate();

  const BackToJobVancanies = (e) => {
    e.preventDefault();
    navigate("/career/viewJobVacancies", { replace: true });
  };
  const [searchParams] = useSearchParams();

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

      <Box>
        <Box>
          <Box>
            <Button
              fontFamily="Manrope"
              fontSize="18px"
              py="25px"
              mb="52px"
              fontWeight="700"
              bg="#EEE"
              mx={{
                sm: "20px",
                md: "20px",
                lg: "91px",
                xl: "91px",
                "2xl": "91px",
              }}
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

            <Flex
              bg={{
                sm: "#EBEDEF",
                md: "#EBEDEF",
                lg: "none",
                xl: "none",
                "2xl": "none",
              }}
              mt="20px"
              mb="90px"
              flexDirection="column"
              px={{
                sm: "20px",
                md: "20px",
                lg: "91px",
                xl: "91px",
                "2xl": "91px",
              }}
              py="20px"
            >
              <Flex
                display={{
                  sm: "block",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  "2xl": "flex",
                }}
                alignItems="center"
              >
                <Heading fontWeight="700" fontFamily="Manrope" fontSize="25px">
                  Company Name: &nbsp;
                </Heading>

                <Text
                  fontWeight="400"
                  fontFamily="Manrope"
                  fontSize="20px"
                  textAlign={{
                    sm: "left",
                    md: "center",
                    lg: "center",
                    xl: "center",
                    "2xl": "center",
                  }}
                >
                  {searchParams.get("companyName")}
                </Text>
              </Flex>

              <Flex
                display={{
                  sm: "block",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  "2xl": "flex",
                }}
                alignItems="center"
                my="10px"
              >
                <Heading fontWeight="700" fontFamily="Manrope" fontSize="25px">
                  Description: &nbsp;
                </Heading>

                <Text
                  fontWeight="400"
                  fontFamily="Manrope"
                  fontSize="20px"
                  textAlign={{
                    sm: "left",
                    md: "center",
                    lg: "center",
                    xl: "center",
                    "2xl": "center",
                  }}
                >
                  {searchParams.get("desc")}
                </Text>
              </Flex>

              <Flex
                display={{
                  sm: "block",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                  "2xl": "flex",
                }}
                alignItems="center"
              >
                <Heading fontWeight="700" fontFamily="Manrope" fontSize="25px">
                  Deadline: &nbsp;
                </Heading>

                <Text
                  fontWeight="400"
                  fontFamily="Manrope"
                  fontSize="20px"
                  textAlign={{
                    sm: "left",
                    md: "center",
                    lg: "center",
                    xl: "center",
                    "2xl": "center",
                  }}
                >
                  {searchParams.get("deadline")}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <form ref={form} onSubmit={sendEmail}>
          <Box
            px={{
              sm: "20px",
              md: "20px",
              lg: "91px",
              xl: "91px",
              "2xl": "91px",
            }}
          >
            {forms.map((form, index) => {
              return (
                <Fragment>
                  <FormLabel
                    fontFamily="Manrope"
                    color="#021D37"
                    fontSize="18px"
                    lineHeight="25px"
                    fontWeight="700"
                    mt="20px"
                  >
                    {form.label}
                    <Text display="inline" color={"red"}>
                      *
                    </Text>
                  </FormLabel>
                  <Input
                    key={index}
                    type={form.fieldType}
                    placeholder={form.placeHolder}
                    variant={form.variant}
                    display="block"
                    onChange={inputValues}
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
            <FormLabel
              fontFamily="Manrope"
              color="#021D37"
              fontSize="18px"
              lineHeight="25px"
              fontWeight="700"
              mt="20px"
            >
              Upload Resumé
            </FormLabel>
            <Input
              type="file"
              variant="filled"
              display="block"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png, .jpg, .jpeg"
              h="67px"
              pt="15px"
              onChange={inputValues}
              w={{
                sm: "100%",
                md: "400px",
                lg: "526px",
                xl: "526px",
                "2xl": "526px",
              }}
              mb="10px"
              bg="#EBEDEF"
            ></Input>
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
            <FormLabel
              fontFamily="Manrope"
              color="#021D37"
              fontSize="18px"
              lineHeight="25px"
              fontWeight="700"
              mt="20px"
            >
              Upload Cover Letter
            </FormLabel>
            <Input
              type="file"
              variant="filled"
              display="block"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png, .jpg, .jpeg"
              h="67px"
              pt="15px"
              onChange={inputValues}
              w={{
                sm: "100%",
                md: "400px",
                lg: "526px",
                xl: "526px",
                "2xl": "526px",
              }}
              mb="10px"
              bg="#EBEDEF"
            ></Input>
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
            mx={{
              sm: "20px",
              md: "20px",
              lg: "91px",
              xl: "91px",
              "2xl": "91px",
            }}
            _hover={{
              bg: "#020E1B",
              transition: "all ease 0.4s",
            }}
          >
            APPLY
          </Button>
        </form>
      </Box>

      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default ViewVacancies;

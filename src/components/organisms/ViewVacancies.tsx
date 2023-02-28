import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  FormLabel,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React, { Fragment, useRef, SyntheticEvent, useState } from "react";
import emailjs from "emailjs-com";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "components/molecules/Navbar/Navbar";
import Footer from "components/organisms/Footer/Footer";
import { useRouter } from "next/router";
import MobilePageBanner from "components/molecules/MobilePageBanner";
import NextLink from "next/link";

const ViewVacancies = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
    user_resume: "",
    user_coverLetter: "",
  };

  const [inputField, setInputField] = useState(initialValues as any);

  const inputValues = (e: any) => {
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
  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_krcopwh",
      "#contact-form",
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

  const router = useRouter();

  const { companyName = "", desc = "", deadline = "" } = router.query;
  const toast = useToast();

  return (
    <Box>
      <Navbar />

      <MobilePageBanner
        imageURL="./assets/imgs/About.png"
        title="APPLY FOR JOB"
      />

      <Box>
        <Box>
          <NextLink href="./Career/viewJob/viewJobVacancies">
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
            >
              <FaChevronLeft size="20px" />
              Back To Job Vacancies
            </Button>
          </NextLink>

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
                {companyName}
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
                {desc}
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
                {deadline}
              </Text>
            </Flex>
          </Flex>
        </Box>

        <form id="contact-form" ref={form as any} onSubmit={sendEmail}>
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
                <Fragment key={index}>
                  <FormLabel
                    fontFamily="Manrope"
                    color="#021D37"
                    fontSize="18px"
                    lineHeight="25px"
                    fontWeight="700"
                    mt="20px"
                  >
                    {form.label}
                  </FormLabel>
                  <Input
                    required
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
              required
              type="file"
              variant="filled"
              display="block"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png, .jpg, .jpeg"
              name="user_resume"
              value={inputField.user_resume}
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
              required
              type="file"
              variant="filled"
              display="block"
              name="user_coverLetter"
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.png, .jpg, .jpeg"
              h="67px"
              pt="15px"
              onChange={inputValues}
              value={inputField.user_coverLetter}
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

      <Footer
        address={
          "75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos, Nigeria."
        }
        phone1={"+234 909 685 6606"}
        phone2={"+234 808 396 4840"}
        email={"info@wavecrest.edu.ng"}
      />
    </Box>
  );
};

export default ViewVacancies;

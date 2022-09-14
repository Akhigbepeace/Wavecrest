import {
  Box,
  Text,
  Image,
  Grid,
  Flex,
  Heading,
  Stack,
  Input,
  Button,
  Textarea,
  Link,
  useToast,
} from "@chakra-ui/react";
import React, { Fragment, useRef, useState } from "react";
import Navbar from "components/Navbar";
import emailjs from "emailjs-com";
import contactpic from "assets/Images/contact.png";
import aboutgallery1 from "assets/Images/aboutgallery1.png";
import aboutgallery2 from "assets/Images/aboutgallery2.png";
import aboutgallery3 from "assets/Images/aboutgallery3.png";
import aboutgallery4 from "assets/Images/aboutgallery4.png";
import Footer from "components/Footer";
import FooterCopywright from "components/FooterCopywright";

const Contact = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
    user_subject: "",
    user_message: "",
  };

  const contactFields = [
    {
      fieldType: "text",
      name: "user_name",
      variant: "filled",
      placeHolder: "Name",
    },
    {
      fieldType: "email",
      name: "user_email",
      variant: "filled",
      placeHolder: "Email",
    },
    {
      fieldType: "number",
      name: "user_number",
      variant: "filled",
      placeHolder: "Phone Number",
    },
    {
      fieldType: "text",
      name: "user_subject",
      variant: "filled",
      placeHolder: "Subject",
    },
  ];

  const enquires = [
    {
      name: "Admission:",
      phoneNumber: "Phone: +234 909 685 6606",
      email: "Email: info@wavecrest.edu.ng",
    },
    {
      name: "Training:",
      phoneNumber: "Phone: +234 909 685 6606",
      email: "Email: info@wavecrest.edu.ng",
    },
    {
      name: "General:",
      phoneNumber: "Phone: +234 909 685 6606",
      email: "Email: info@wavecrest.edu.ng",
    },
    {
      name: "Partnership:",
      phoneNumber: "Phone: +234 909 685 6606",
      email: "Email: info@wavecrest.edu.ng",
    },
    {
      name: "Front Desk:",
      phoneNumber: "Phone: +234 909 685 6606",
      email: "Email: info@wavecrest.edu.ng",
    },
    {
      name: "Job Placement:",
      phoneNumber: "Phone: +234 909 685 6606",
      email: "Email: info@wavecrest.edu.ng",
    },
  ];

  const quickLinks = [
    {
      image: aboutgallery1,
      text: "News and Events",
      linkTo: "/",
    },
    {
      image: aboutgallery2,
      text: "Testimonials",
      linkTo: "/blog",
    },
    {
      image: aboutgallery3,
      text: "About",
      linkTo: "/about/profile",
    },
    {
      image: aboutgallery4,
      text: "Programmes",
      linkTo: "/academics/programmes",
    },
  ];

  const [inputField, setInputField] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.user_name) {
      errors.user_name = "This field is required";
    }
    if (!values.user_email) {
      errors.user_email = "This field is required";
    }
    if (!values.user_number) {
      errors.user_number = "This field is required";
    }
    if (!values.user_subject) {
      errors.user_subject = "This field is required";
    }
    if (!values.user_message) {
      errors.user_message = "This field is required";
    }

    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_i27quow",
      form.current,
      "JPAG_ZJVlAcuO_5D-"
    );
    setformErrors(validate(inputField));
    setInputField(initialValues);
  };

  const form = useRef();

  const toast = useToast();
  return (
    <Box>
      <Navbar />

      <Box h="441px" position="relative">
        <Image src={contactpic} h="100%" w="100%" objectFit="cover" />

        <Box
          bg="rgba(0, 24, 71, 0.5)"
          h="100%"
          w="100%"
          position="absolute"
          bottom="0"
        >
          <Text
            color="white"
            fontFamily="Playfair Display, serif"
            fontWeight="700"
            fontSize={{
              sm: "34px",
              md: "50px",
              lg: "50px",
              xl: "60px",
              "2xl": "60px",
            }}
            textAlign="center"
            mt="242px"
          >
            CONTACT
          </Text>
        </Box>
      </Box>

      <Box pt="50px">
        <Grid
          gridTemplateColumns={{
            sm: "1fr",
            md: "1fr",
            lg: "1fr",
            xl: "auto auto",
            "2xl": "auto auto",
          }}
          px={{
            sm: "0",
            md: "0",
            lg: "91px",
            xl: "91px",
            "2xl": "91px",
          }}
        >
          <Flex
            flexDirection="column"
            textAlign="left"
            px={{
              sm: "20px",
              md: "20px",
              lg: "0px",
              xl: "0",
              "2xl": "0",
            }}
          >
            <Box>
              <Box
                w="88px"
                bg="#021D37"
                h="3px"
                mt="40px"
                mb="5px"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                  "2xl": "none",
                }}
              ></Box>

              <Heading mb="10px" fontFamily="Playfair Display">
                Contact Form
              </Heading>
            </Box>

            <Text
              w="80%"
              mb="15px"
              fontFamily="Manrope"
              fontWeight="400"
              fontSize="20px"
              lineHeight="25px"
              color="#021D37"
            >
              Kindly leave us a message and we'll get back to you as soon as
              possible
            </Text>

            <form ref={form} onSubmit={sendEmail}>
              <Stack>
                {contactFields.map((field, index) => {
                  return (
                    <Fragment>
                      <Input
                        isRequired
                        key={index}
                        type={field.fieldType}
                        variant={field.variant}
                        placeholder={field.placeHolder}
                        name={field.name}
                        value={inputField[field.name]}
                        h="67px"
                        mt="10px"
                        w={{
                          md: "500px",
                        }}
                        onChange={inputValues}
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

                <Textarea
                  type="text"
                  variant="filled"
                  placeholder="Message"
                  name="user_message"
                  onChange={inputValues}
                  value={inputField.user_message}
                  h="223px"
                  mb="10px"
                  w={{
                    md: "500px",
                  }}
                  _placeholder={{
                    fontFamily: "Manrope",
                    color: "#021D37",
                    fontSize: "18px",
                    lineHeight: "25px",
                    fontWeight: "400",
                  }}
                />
              </Stack>

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
                mt="10px"
                mb={{
                  sm: "100px",
                  md: "100px",
                  lg: "0",
                  xl: "0",
                  "2xl": "0",
                }}
                onClick={() =>
                  toast({
                    title: "SUCCESSFUL !",
                    description: "Your request has been submitted",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  })
                }
                _hover={{
                  bg: "#020E1B",
                  transition: "all ease 0.4s",
                }}
              >
                SUBMIT
              </Button>
            </form>
          </Flex>

          <Box
            bg={{
              sm: "#EBEDEF",
              md: "#EBEDEF",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
            px={{
              sm: "20px",
              md: "20px",
              lg: "0",
              xl: "0",
              "2xl": "0",
            }}
            mb={{
              sm: "100px",
              md: "100px",
              lg: "0",
              xl: "0",
              "2xl": "0",
            }}
          >
            <Box>
              <Box
                w="88px"
                bg="#021D37"
                h="3px"
                mt="40px"
                mb="5px"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                  "2xl": "none",
                }}
              ></Box>

              <Heading mb="10px" fontFamily="Playfair Display">
                Visit Us
              </Heading>
            </Box>

            <Box
              w={{
                sm: "335",
                md: "335",
                lg: "665",
                xl: "665",
                "2xl": "665",
              }}
            >
              <iframe
                title="Wavecrest College of Hospitality"
                width="100%"
                height="364"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=665&amp;height=364&amp;hl=en&amp;q=75%20Adisa%20Bashua%20Street,%20Off%20Adelabu%20Street,%20Surulere,%20Lagos%20State,%20Nigeria.%20%20+(Wavecrest)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>

              <script
                type="text/javascript"
                src="https://embedmaps.com/google-maps-authorization/script.js?id=1e38e70d8c3f5fe4769bac191f721c59a7bdb19c"
              ></script>

              <Text
                mt="10px"
                fontFamily="Manrope"
                fontSize="16px"
                fontWeight="400"
              >
                75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos
                State, Nigeria.
              </Text>
            </Box>

            <Grid
              gridTemplateColumns={{
                sm: "1fr",
                md: "auto auto",
                lg: "auto auto",
                xl: "auto auto",
                "2xl": "auto auto",
              }}
              mt="30px"
            >
              {enquires.map((enquiry, index) => {
                return (
                  <Flex key={index} flexDirection="column" mb="30px">
                    <Heading
                      mb="6px"
                      fontFamily="Playfair Display, serif"
                      fontWeight="700"
                      fontSize="22px"
                      color="#021D37"
                    >
                      {enquiry.name}
                    </Heading>
                    <Box
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="18px"
                      color="#021D37"
                    >
                      <Text> {enquiry.phoneNumber}</Text>
                      <Text> {enquiry.email}</Text>
                    </Box>
                  </Flex>
                );
              })}
            </Grid>
          </Box>
        </Grid>

        <Box
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
          px={{
            sm: "100px",
            md: "100px",
            lg: "30px",
            xl: "91px",
            "2xl": "91px",
          }}
          mb="100px"
        >
          <Heading
            m="22px 0"
            color="#021D37"
            fontFamily="Playfair Display, serif"
            fontSize="40px"
            fontWeight="700"
            lineHeight="53px"
          >
            Quick Links
          </Heading>

          <Flex justifyContent="space-between">
            {quickLinks.map((quickLink, index) => {
              return (
                <Link
                  key={index}
                  href={quickLink.linkTo}
                  w="294px"
                  h="241px"
                  ml="25px"
                  transition="all ease 0.8s"
                  _hover={{
                    transform: "scale(1.2)",
                  }}
                >
                  <Image
                    src={quickLink.image}
                    w="100%"
                    h="100%"
                    borderRadius="3px"
                    objectFit="cover"
                  />

                  <Flex
                    bg="linear-gradient(180deg, rgba(2, 29, 55, 0) 0%, rgba(2, 29, 55, 0.7) 100%);"
                    position="relative"
                    h="100%"
                    top="-241px"
                    borderRadius="3px"
                  >
                    <Text
                      color="#FFF"
                      fontFamily="Playfair Display"
                      fontSize="22px"
                      mt="auto"
                      mx="auto"
                      mb="20px"
                      textAlign="center"
                    >
                      {quickLink.text}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </Flex>
        </Box>
      </Box>

      <Footer />
      <FooterCopywright />
    </Box>
  );
};

export default Contact;

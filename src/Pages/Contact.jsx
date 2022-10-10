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
import { useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";
import emailjs from "emailjs-com";
import contactpic from "assets/Images/aboutDesktopBanner.jpg";
import aboutgallery1 from "assets/Images/aboutgallery1.png";
import aboutgallery2 from "assets/Images/aboutgallery2.png";
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
      phoneNumber: "+234 909 685 6606",
      email: " wavecrestadmissions@gmail.com",
    },
    {
      name: "Training:",
      phoneNumber: "+234 909 685 6606",
      email: "info@wavecrest.edu.ng",
    },
    {
      name: "General:",
      phoneNumber: ["+234 909 685 6606", "+234 808 396 4840"],
      email: "info@wavecrest.edu.ng",
    },
    {
      name: "Partnership:",
      phoneNumber: "+234 802 819 1726",
      email: "info@wavecrest.edu.ng",
    },
    {
      name: "Front Desk:",
      phoneNumber: "+234 808 396 4840",
      email: "info@wavecrest.edu.ng",
    },
    {
      name: "Job Placement:",
      phoneNumber: "+234 818 309 0761",
      email: "wavecrestjobplacement@gmail.com",
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
      image: contactpic,
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

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

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

  const navigateTo = (quickLink) => {
    navigate(quickLink.linkTo, { replace: true });
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
          gridGap="10px"
          w={{
            xl: "1100px",
            "2xl": "1100px",
          }}
          mx="auto"
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
                75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos,
                Nigeria.
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
                const multiplePhoneNum = Array.isArray(enquiry.phoneNumber)
                  ? enquiry.phoneNumber.map((number, index) => {
                      return <Text key={index}>{number}</Text>;
                    })
                  : enquiry.phoneNumber;
                return (
                  <Flex key={index} flexDirection="column" mb="30px" mr="30px">
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
                      <Flex>
                        <Text> Phone: &nbsp; </Text>
                        <Text>{multiplePhoneNum}</Text>
                      </Flex>

                      <Flex>
                        <Text>Email: &nbsp; </Text>
                        <Text w="196px">{enquiry.email}</Text>
                      </Flex>
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
          w={{
            xl: "1300px",
            "2xl": "1300px",
          }}
          mx="auto"
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
                <Box
                  key={index}
                  w="294px"
                  h="241px"
                  ml="25px"
                  transition="all ease 0.8s"
                  onClick={() => navigateTo(quickLink)}
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
                </Box>
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

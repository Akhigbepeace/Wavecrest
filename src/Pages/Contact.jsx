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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
} from "@chakra-ui/react";
import React, { Fragment, useRef, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import emailjs from "emailjs-com";
import Navbar from "components/layouts/Navbar";
import contactpic from "assets/Images/contact.png";
import aboutgallery1 from "assets/Images/aboutgallery1.png";
import aboutgallery2 from "assets/Images/aboutgallery2.png";
import aboutgallery3 from "assets/Images/aboutgallery3.png";
import aboutgallery4 from "assets/Images/aboutgallery4.png";
import Footer from "Pages/Home/Footer";
import FooterCopywright from "Pages/Home/FooterCopywright";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [inputField, setInputField] = useState(initialValues);

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const contactFields = [
    {
      fieldType: "text",
      name: "name",
      variant: "filled",
      placeHolder: "Name",
    },
    {
      fieldType: "email",
      name: "email",
      variant: "filled",
      placeHolder: "Email",
    },
    {
      fieldType: "number",
      name: "number",
      variant: "filled",
      placeHolder: "Phone Number",
    },
    {
      fieldType: "text",
      name: "subject",
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
      image: { aboutgallery1 },
      text: "News and Events",
      linkTo: "/",
    },
    {
      image: { aboutgallery2 },
      text: "Testimonials",
      linkTo: "/blog",
    },
    {
      image: { aboutgallery3 },
      text: "About",
      linkTo: "/about/profile",
    },
    {
      image: { aboutgallery4 },
      text: "Programmes",
      linkTo: "/academics/programmes",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djq4ick",
        "Ytemplate_i27quow",
        e.target,
        "JPAG_ZJVlAcuO_5D-"
      )
      .then(
        <Box>
          <Modal>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Heading>
                  <BsFillCheckCircleFill color="green" /> Success!!!
                </Heading>
                <Text>Your Message has been sent successful </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      )
      .catch(
        <Box>
          <Modal>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Heading>
                  <FaTimesCircle color="red" />
                  Oops, Something went wrong!!!
                </Heading>
                <Text>Your Message wasn't delivered </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      );
  };

  return (
    <Fragment>
      <Navbar />

      <Box h="441px" w="100%" gridGap="68px" position="relative">
        <Image src={contactpic} h="100%" w="100%" />

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
            fontSize="60px"
            textAlign="center"
            mt="242px"
          >
            CONTACT
          </Text>
        </Box>
      </Box>

      <Box p="50px">
        <Grid gridTemplateColumns="1fr 1fr" gridGap="68px">
          <Flex flexDirection="column" textAlign="left">
            <Heading
              fontFamily="Playfair Display, serif"
              fontWeight="700"
              fontSize="40px"
              lineHeight="53px"
              color="#021D37"
              mb="5px"
            >
              Contact Form
            </Heading>

            <Text
              w="449px"
              mb="15px"
              fontFamily="Manrope, sans-serif"
              fontWeight="400"
              fontSize="18px"
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
                    <Input
                      key={index}
                      type={field.fieldType}
                      variant={field.variant}
                      placeholder={field.placeHolder}
                      name={field.name}
                      w="526px"
                      h="67px"
                      mb="10px"
                      onChange={inputValues}
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
                  type="text"
                  variant="filled"
                  placeholder="Message"
                  name="message"
                  onChange={inputValues}
                  w="526px"
                  h="223px"
                  mb="10px"
                  _placeholder={{
                    fontFamily: "Manrope, sans-serif",
                    color: "#021D37",
                    fontSize: "18px",
                    lineHeight: "25px",
                    fontWeight: "400",
                  }}
                />
              </Stack>
            </form>

            <Button
              w="103px"
              h="47px"
              mt="10px"
              bg="#021D37"
              color="white"
              fontFamily="Manrope, sans-serif"
              fontWeight="700"
              fontSize="16px"
              textAlign="center"
              borderRadius="3px"
              _hover={{
                bg: "#020E1B",
              }}
            >
              SUBMIT
            </Button>
          </Flex>

          <Grid>
            <Heading mb="10px">Visit Us</Heading>

            <Box>
              <iframe
                title="Wavecrest College of Hospitality"
                width="665"
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
                fontFamily="Manrope, sans-serif"
                fontSize="16px"
                fontWeight="400"
              >
                75 Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos
                State, Nigeria.
              </Text>
            </Box>

            <Grid gridTemplateColumns="1fr 1fr" mt="30px">
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
                      fontFamily="Manrope, sans-serif"
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
          </Grid>
        </Grid>

        <Box>
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

          <Flex>
            {quickLinks.map((quickLink) => {
              return (
                <Link
                  href={quickLink.linkTo}
                  w="294px"
                  h="241px"
                  borderRadius="30px"
                  bg="contact.png"
                  mr="27px"
                  transition="all ease 0.8s"
                  _hover={{
                    transform: "scale(1.2)",
                  }}
                >
                  <Image src="https://picsum.photos/200" w="100%" h="100%" />

                  <Flex
                    bg="rgba(2,29,55, 0.65)"
                    position="relative"
                    h="100%"
                    top="-241px"
                  >
                    <Text
                      color="#FFF"
                      alignSelf="center"
                      fontFamily="Playfair Display"
                      fontSize="28px"
                      mx="auto"
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
    </Fragment>
  );
};

export default Contact;

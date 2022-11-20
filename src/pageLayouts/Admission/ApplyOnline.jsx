import {
  Heading,
  Input,
  Box,
  Text,
  Flex,
  Image,
  Link,
  Select,
  Button,
  Grid,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import visa from "assets/Images/visa.png";
import waveimg from "assets/Images/waveimg.png";
import paypal from "assets/Images/paypal.png";
import mastercard from "assets/Images/mastercard.png";
import MobileSideBar from "components/MobileSideBar";
import { useRouter } from "next/router";

const ApplyOnline = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
  };

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const forms = [
    {
      fieldType: "name",
      name: "user_name",
      placeHolder: "FullName",
      variant: "filled",
    },
    {
      fieldType: "number",
      name: "user_number",
      placeHolder: "Phone Number",
      variant: "filled",
    },
    {
      fieldType: "email",
      name: "user_email",
      placeHolder: "Email",
      variant: "filled",
    },
  ];

  const payNow = [
    {
      image: paypal,
      width: "152px",
      height: "38px",
    },
    {
      image: mastercard,
      width: "92px",
      height: "55px",
    },
    {
      image: visa,
      width: "112px",
      height: "35px",
    },
  ];

  const programmes = [
    {
      course: "Programme",
      price: "",
    },
    {
      course: "HND in Hospitality Management",
      price: "The applicationn fee for this course is: #2,500",
      paymentLink: "https://paystack.com/pay/wchform2",
    },
    {
      course: "ND in Hospitality Management",
      price: "The applicationn fee for this course is: #2,000",
      paymentLink: "https://paystack.com/pay/wchform1",
    },
    {
      course: "Certificate in Hospitality Operations",
      price: "The applicationn fee for this course is: #2,000",
      paymentLink: "https://paystack.com/pay/wchform1",
    },
    {
      course: "Confederation of Tourism and Hospitality",
      paymentLink: "https://tinyurl.com/CTH-Registration-Form1",
    },
    {
      course: "Professional Certificate in Hospitality",
      paymentLink: "https://forms.gle/7vmuHrzHSxHmkh8s8",
    },
    {
      course: "Culinary Courses",
      paymentLink: "https://forms.gle/VQtgEFMa9qhsojGn7",
    },
    {
      course: "National Skill Qualification",
      paymentLink: "https://forms.gle/VQtgEFMa9qhsojGn7",
    },
  ];

  const router = useRouter();
  const navigateTo = [
    {
      name: "ADMISSION REQUIREMENTS",
      redirect: () => {
        router.push("/admission/admissionRequirements", { replace: true });
      },
    },
    {
      name: "TUITION AND SCHOLARSHIP",
      redirect: () => {
        router.push("/admission/tuitionAndScholarship", { replace: true });
      },
    },
    {
      name: "HOSTEL",
      redirect: () => {
        router.push("/admission/hostel", { replace: true });
      },
    },
    {
      name: "FAQs",
      redirect: () => {
        router.push("/admission/faqs", { replace: true });
      },
    },
  ];

  const [inputField, setInputField] = useState(initialValues);
  const [showCoursePrice, setShowCoursePrice] = useState({});

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
          >
            APPLY ONLINE
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
          <Box
            w="88px"
            h="3px"
            mb="10px"
            mt="40px"
            bg="#021D37"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>
          <Heading
            my={{
              xl: "30px",
              "2xl": "30px",
            }}
            mb={{
              sm: "30px",
              md: "30px",
              lg: "30px",
            }}
            fontFamily="Playfair Display"
            fontWeight="700"
            fontSize={{
              sm: "24px",
              md: "32px",
              lg: "32px",
              xl: "32px",
              "2xl": "32px",
            }}
            color="#021D37"
          >
            Pre-Registration Form
          </Heading>
        </Box>

        <Flex flexDirection="column">
          {forms.map((form, index) => {
            return (
              <Input
                isRequired
                key={index}
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                name={form.name}
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
            );
          })}

          <Select
            isRequired
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
            color="#021D37"
            fontSize="18px"
            lineHeight="25px"
            fontWeight="400"
            cursor="pointer"
            onChange={(e) => {
              const programme = JSON.parse(e.target.value);
              setShowCoursePrice(programme);
            }}
          >
            {programmes.map((programme, index) => {
              return (
                <option
                  key={index}
                  value={JSON.stringify(programme)}
                  borderbottom={
                    programme.length - 1 === index
                      ? "none"
                      : "1px solid #EBEDEF"
                  }
                  _hover={{
                    bg: "#EBEDEF",
                    transition: "all ease 0.5s",
                  }}
                >
                  {programme.course}
                </option>
              );
            })}
          </Select>

          <Text>{showCoursePrice.price}</Text>
        </Flex>

        <Box>
          <Flex
            mt="50px"
            alignItems="center"
            gridTemplateColumns={{
              sm: "auto auto",
            }}
            display={{
              sm: "grid",
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            {payNow.map((pay, index) => {
              return (
                <Image
                  key={index}
                  src={pay.image}
                  w={pay.width}
                  mx="10px"
                  mb="10px"
                  h={pay.height}
                />
              );
            })}
          </Flex>

          <Link
            href={showCoursePrice.paymentLink}
            target="_blank"
            _hover={{
              textDecor: "none",
            }}
          >
            <Button
              fontFamily="Manrope"
              fontSize="16px"
              fontWeight="700"
              m=" 30px 0"
              w={{
                sm: "100%",
                md: "400px",
                lg: "526px",
                xl: "423px",
                "2xl": "423px",
              }}
              bg="#021D37"
              height="46.89px"
              textAlign="center"
              color="#FFF"
              _hover={{
                bg: "#020E1B",
              }}
            >
              PAY NOW
            </Button>
          </Link>
        </Box>

        <Text
          fontFamily="Manrope"
          fontSize={{
            sm: "18px",
            md: "24px",
            lg: "24px",
            xl: "24px",
            "2xl": "24px",
          }}
          fontWeight="400"
          my="45px"
        >
          NB: After payment, a google link would be sent to your mail to
          complete the registration
        </Text>
      </Box>
      <Box
        mt="70px"
        px={{
          sm: "20px",
          md: "20px",
          lg: "91px",
        }}
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
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

export default ApplyOnline;

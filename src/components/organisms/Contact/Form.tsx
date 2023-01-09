import {
  Box,
  Text,
  Flex,
  Heading,
  Stack,
  Input,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { Fragment, useRef, SyntheticEvent, useState } from "react";
import emailjs from "emailjs-com";
import { initialValues, contactFields } from "./constants";

const Form = () => {
  const toast = useToast();

  const [inputField, setInputField] = useState(initialValues as any);

  const inputValues = (e: any) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_i27quow",
      "form#contact-form",
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

  const form = useRef();
  return (
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
        Kindly leave us a message and we&lsquo;ll get back to you as soon as
        possible
      </Text>

      <form id="contact-form" ref={form as any} onSubmit={sendEmail}>
        <Stack>
          {contactFields.map((field, index) => {
            return (
              <Fragment key={index}>
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
  );
};

export default Form;

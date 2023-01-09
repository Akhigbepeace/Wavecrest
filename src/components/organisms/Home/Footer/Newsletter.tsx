import {
  Flex,
  Heading,
  Input,
  Stack,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { SyntheticEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";
<<<<<<< HEAD
import { subscribeForm } from "./constant";
=======
// import { subscribeForm } from "./constant";
import { subscribeForm } from "../Home/Footer/constant";
>>>>>>> e1307bb (Formated files)

const Newsletter = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
  };

  const [inputField, setInputField] = useState(initialValues as any);

  const inputValues = (e: any) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/organisms/Footer/Newsletter.tsx
========
    console.log(e.currentTarget);
>>>>>>>> 61df93b (Formated files):src/components/organisms/Home/Footer/Newsletter.tsx
>>>>>>> 61df93b (Formated files)
=======
>>>>>>> e1307bb (Formated files)
    setInputField({
      ...inputField,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const form = useRef();

  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_krcopwh",
      "form#contact-form",
      "JPAG_ZJVlAcuO_5D-"
    );

    setInputField(initialValues);

    if (res.status === 200 && res.text === "OK") {
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
    <Flex flexDirection="column">
      <Heading
        color="#021D37"
        fontFamily="Playfair Display"
        fontWeight="700"
        fontSize="22px"
        lineHeight="29px"
      >
        Subscribe to our Newsletter
      </Heading>

      <Text
        color="#021d37"
        p="5px 0"
        fontFamily="Manrope"
        fontWeight="400"
        fontSize="18px"
      >
        Keep up-to-date and informed about relevant Hospitality news and our
        College events by filling your details below
      </Text>

      <form ref={form as any} onSubmit={sendEmail}>
        <Stack>
          {subscribeForm.map((field, index) => {
            return (
              <Input
                isRequired
                key={index}
                type={field.fieldType}
                placeholder={field.placeHolder}
                name={field.name}
                value={inputField[field.name]}
                border="none"
                mt="10px"
                p="15px 20px"
                bg="#fff"
                h="51px"
                onChange={inputValues}
                _placeholder={{
                  color: "#021D37",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              />
            );
          })}
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
          mt="8px"
          mb="70px"
          _hover={{
            bg: "#020E1B",
            transition: "all ease 0.4s",
          }}
        >
          SUBSCRIBE
        </Button>
      </form>
    </Flex>
  );
};

export default Newsletter;

import { Button, Flex, Input, Select, useToast } from "@chakra-ui/react";
import React, { useRef, SyntheticEvent, useState } from "react";
import { forms } from "./constants";
import emailjs from "emailjs-com";

const Form = () => {
  const initialValues: any = {
    user_name: "",
    user_email: "",
    user_number: "",
    user_address: "",
    user_class: "",
    user_programme: "",
  };

  const programmes = [
    "HND in Hospitality Management",
    "ND in Hospitality Management",
    "Certificate in Hospitality Operations",
  ];

  const [inputField, setInputField] = useState(initialValues);

  const form = useRef();
  const toast = useToast();

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

  return (
    <form id="contact-form" ref={form as any} onSubmit={sendEmail}>
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
        name={inputField.user_programme}
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
            <option key={index} value={inputField[programme]}>
              {programme}
            </option>
          );
        })}
      </Select>

      <Button
        type="submit"
        width="142px"
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
  );
};

export default Form;

import { Button, Flex, Input, Select, useToast } from "@chakra-ui/react";
import React, { SyntheticEvent, useRef, useState } from "react";
import { formsField, hostelTypes } from "data/data";

import emailjs from "emailjs-com";

const HostelApplicationForm = () => {
  const [showCoursePrice, setShowCoursePrice] = useState({});

  const form = useRef();
  const toast = useToast();

  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
    user_programme: "",
  };

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

  return (
    <form id="contact-form" ref={form as any} onSubmit={sendEmail}>
      <Flex flexDirection="column">
        {formsField.map((form, index) => {
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
        name={inputField.user_programme}
        color="#021D37"
        fontSize="18px"
        lineHeight="25px"
        fontWeight="400"
        mb="10px"
      >
        {hostelTypes.map((items, index) => {
          return (
            <option key={index} value={JSON.stringify(items)}>
              {items.hostel}
            </option>
          );
        })}
      </Select>

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
  );
};

HostelApplicationForm.requireAuth = true;

export default HostelApplicationForm;

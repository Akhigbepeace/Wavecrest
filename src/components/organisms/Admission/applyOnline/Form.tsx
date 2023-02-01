import { Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { forms, Programme, programmes } from "./data";

type ApplyOnlineFormProp = {
  price: string;
  paymentLink: string;
  onChange: (programme: Programme) => void;
};

const ApplyOnlineForm = (props: ApplyOnlineFormProp) => {
  const { price, onChange } = props;

  const initialValues = {
    user_name: "",
    user_email: "",
    user_number: "",
  };

  const inputValues = (e: any) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const [inputField, setInputField] = useState(initialValues as any);

  return (
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
        placeholder="Programme"
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
          const programme = programmes[+e.target.value];
          onChange(programme);
        }}
      >
        {programmes.map((programme, index) => {
          return (
            <option key={index} value={index}>
              {programme.course}
            </option>
          );
        })}
      </Select>

      <Text>{price}</Text>
    </Flex>
  );
};

export default ApplyOnlineForm;

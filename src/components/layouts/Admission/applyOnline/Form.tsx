import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { forms, Programme, programmes } from "./data";
import NextLink from "next/link";
import PeaceImage from "components/atoms/PeaceImage";

type ApplyOnlineFormProp = {
  price: string;
  paymentLink: string;
  showCoursePrice: any;
  onChange: (programme: Programme) => void;
};

const ApplyOnlineForm = (props: ApplyOnlineFormProp) => {
  const visa = "/assets/imgs/visa.png";
  const paypal = "/assets/imgs/paypal.png";
  const mastercard = "/assets/imgs/mastercard.png";

  const { price, onChange, showCoursePrice } = props;
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
    <form action={showCoursePrice.paymentLink}>
      {forms.map((form, index) => {
        return (
          <Input
            required
            display="block"
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
        required
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
              <PeaceImage
                key={index}
                src={pay.image}
                alt="payment-method"
                w={pay.width}
                mx="10px"
                mb="10px"
                h={pay.height}
              />
            );
          })}
        </Flex>

        <NextLink href={showCoursePrice.paymentLink} target="_blank">
          <Button
            type="submit"
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
        </NextLink>
      </Box>
    </form>
  );
};

export default ApplyOnlineForm;

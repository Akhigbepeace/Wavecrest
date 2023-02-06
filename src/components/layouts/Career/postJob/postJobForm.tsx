import {
  Box,
  FormLabel,
  useToast,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { Fragment, SyntheticEvent, useRef, useState } from "react";
import emailjs from "emailjs-com";

const PostJobForm = () => {
  const form = useRef();
  const toast = useToast();

  const forms = [
    {
      fieldType: "name",
      name: "user_name",
      label: "Full Name",
      placeHolder: "Full Name",
      variant: "filled",
    },
    {
      fieldType: "email",
      name: "user_email",
      label: "Email",
      placeHolder: "Please Enter Your Email",
      variant: "filled",
    },
    {
      fieldType: "text",
      name: "user_company",
      label: "Company",
      placeHolder: "Name Of Company",
      variant: "filled",
    },
    {
      fieldType: "date",
      name: "application_deadline",
      label: "Application Deadline",
      variant: "filled",
    },
  ];

  const initialValues = {
    user_name: "",
    user_email: "",
    user_company: "",
    job_description: "",
    application_deadline: "",
    user_message: "",
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
    try {
      const res = await emailjs.sendForm(
        "service_djq4ick",
        "template_krcopwh",
        "#contact-form",
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
    } catch (err) {
      toast({
        title: "ERROR !",
        description: "File size too large! Maximum file size of 50kb",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form id="contact-form" ref={form as any} onSubmit={sendEmail}>
      <Box>
        {forms.map((form, index) => {
          return (
            <Fragment key={index}>
              <FormLabel
                key={index}
                fontFamily="Manrope"
                color="#021D37"
                fontSize="18px"
                lineHeight="25px"
                fontWeight="600"
                mt="20px"
              >
                {form.label}
              </FormLabel>
              <Input
                required
                type={form.fieldType}
                placeholder={form.placeHolder}
                variant={form.variant}
                name={form.name}
                display="block"
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
            </Fragment>
          );
        })}

        <Box>
          <Box>
            <FormLabel
              fontFamily="Manrope"
              color="#021D37"
              fontSize="18px"
              lineHeight="25px"
              fontWeight="600"
              mt="20px"
            >
              Upload Job Description
            </FormLabel>
            <Input
              type="file"
              variant="filled"
              name="job_description"
              display="block"
              pt="15px"
              value={inputField.job_description}
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
          </Box>

          <Box>
            <FormLabel
              fontFamily="Manrope"
              color="#021D37"
              fontSize="18px"
              lineHeight="25px"
              fontWeight="700"
              mt="20px"
            >
              Notes:
            </FormLabel>

            <Textarea
              placeholder="Extra Notes"
              variant="filled"
              bg="#EBEDEF"
              onChange={inputValues}
              name="user_message"
              value={inputField.user_message}
              w={{
                sm: "100%",
                md: "400px",
                lg: "526px",
                xl: "526px",
                "2xl": "526px",
              }}
              h="80px"
              _placeholder={{
                fontFamily: "Manrope",
                color: "#021D37",
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: "400",
              }}
            />
          </Box>
        </Box>
      </Box>

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
        mt="20px"
        mb="70px"
        _hover={{
          bg: "#020E1B",
          transition: "all ease 0.4s",
        }}
      >
        POST
      </Button>
    </form>
  );
};

export default PostJobForm;

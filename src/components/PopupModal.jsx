import {
  Flex,
  Heading,
  Text,
  Stack,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Box,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const PopupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timerId, setTimerId] = useState(-1);

  useEffect(() => {
    const initialisedPage = () => {
      if (typeof window !== "undefined") {
        const hasViewedModal =
          localStorage.getItem("hasViewedModal") === "true";
        const hasSubscribed = localStorage.getItem("hasSubscribed") === "true";
        const timerId = +setTimeout(() => {
          if (!hasViewedModal && !hasSubscribed) {
            onOpen();
          }
        }, 3000);

        setTimerId(timerId);
      }
    };

    initialisedPage();

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onOpen]);

  const initialValues = {
    user_name: "",
    user_email: "",
  };

  const [inputField, setInputField] = useState(initialValues);

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_krcopwh",
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
      localStorage.setItem("hasSubscribed", "true");
      handleModalClose();
    }
  };

  const subscribeForm = [
    {
      fieldType: "text",
      name: "user_name",
      placeHolder: "Name",
    },
    {
      fieldType: "email",
      name: "user_email",
      placeHolder: "Email",
    },
  ];
  const toast = useToast();

  const handleModalClose = () => {
    localStorage.setItem("hasViewedModal", true);
    onClose();
  };

  return (
    <Box display="none">
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading
              color="#021D37"
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="22px"
              lineHeight="29px"
            >
              Subscribe to our Newsletter
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection="column">
              <Text
                color="#021d37"
                p="5px 0"
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="18px"
              >
                Keep up-to-date and informed about relevant Hospitality news and
                our College events by filling your details below
              </Text>

              <form ref={form} onSubmit={sendEmail}>
                <Stack>
                  {subscribeForm.map((field, index) => {
                    return (
                      <Input
                        isRequired
                        key={index}
                        type={field.fieldType}
                        variant={field.variant}
                        placeholder={field.placeHolder}
                        name={field.name}
                        value={inputField[field.name]}
                        border="none"
                        mt="10px"
                        p="20px"
                        bg="#EBEDEF"
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PopupModal;

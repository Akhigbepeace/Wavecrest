import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";
import {  subjects } from "../constants";

const ShowModal = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="#DCE5E5"
          p="30px"
          maxW="none"
          w={{
            sm: "300px",
            md: "600px",
            lg: "900px",
            xl: "1000px",
            "2xl": "1000px",
          }}
        >
          <ModalHeader
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
            Updated Subject Combinations
          </ModalHeader>
          <ModalCloseButton
            bg="#021D37"
            color="#FFF"
            _hover={{
              bg: "#020E1B",
            }}
          />
          <ModalBody>
            <Heading
              fontFamily="Manrope"
              fontWeight="700"
              fontSize={{
                md: "24px",
                lg: "24px",
                xl: "24px",
                "2xl": "24px",
              }}
              color="#021D37"
            >
              Five (5) credit passes in SSCE/NECO/GCE/WASSCE in not more than 2
              sittings
            </Heading>
            <Text
              fontFamily="Manrope"
              fontWeight="700"
              fontSize={{
                md: "24px",
                lg: "24px",
                xl: "24px",
                "2xl": "24px",
              }}
              color="#021D37"
              my="20px"
              lineHeight="20px"
            >
              Compulsory subjects for SSCE/NECO/GCE/WASSCE
            </Text>
            <UnorderedList>
              <Text
                fontFamily="Manrope"
                fontWeight="700"
                fontSize={{
                  md: "24px",
                  lg: "24px",
                  xl: "24px",
                  "2xl": "24px",
                }}
                color="#021D37"
                my="10px"
                lineHeight="20px"
              >
                Four (4) Subjects can be chosen from this list:
              </Text>

              {subjects.map((subject, index) => {
                return (
                  <ListItem
                    key={index}
                    listStyleType="none"
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize={{
                      md: "24px",
                      lg: "24px",
                      xl: "24px",
                      "2xl": "24px",
                    }}
                    color="#021D37"
                  >
                    {subject}
                  </ListItem>
                );
              })}
            </UnorderedList>
            <Text
              fontFamily="Manrope"
              fontWeight="700"
              fontSize={{
                md: "24px",
                lg: "24px",
                xl: "24px",
                "2xl": "24px",
              }}
              color="#021D37"
              mt="20px"
              mb="5px"
              lineHeight="20px"
            >
              Subject Combination for JAMB (UTME):
            </Text>
            <UnorderedList>
              <ListItem
                listStyleType="none"
                fontFamily="Manrope"
                fontWeight="400"
                fontSize={{
                  md: "24px",
                  lg: "24px",
                  xl: "24px",
                  "2xl": "24px",
                }}
                color="#021D37"
              >
                English Language (COMPULSORY and other three subjects of choice
                (WITH EXCEPTION OF RELIGIOUS STUDIES)
              </ListItem>
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ShowModal;

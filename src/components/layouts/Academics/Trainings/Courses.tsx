import {
  Box,
  Button,
  Link,
  Flex,
  Heading,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import JsFileDownloader from "js-file-downloader";
import NextLink from "next/link";
import { Trainings } from "../constants";
import PeaceImage from "components/atoms/PeaceImage";

const fileDownload = "/assets/imgs/paperDownload.png";
const trainingCert = "/assets/imgs/trainingCert.png";

const Courses = (training: Trainings) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={training.background}
      p={{
        sm: "40px 20px",
        md: "40px 40px",
        lg: "40px 50px",
        xl: "25px 91px",
        "2xl": "20px 91px",
      }}
    >
      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="10px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>
        <Heading
          fontFamily="Playfair Display"
          fontWeight="700"
          fontSize={{
            sm: "22px",
            md: "25px",
            lg: "30px",
            xl: "32px",
            "2xl": "32px",
          }}
          color="#021D37"
          m="0 auto"
          mb="36px"
          w={{
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "1200px",
            "2xl": "1200px",
          }}
        >
          {training.trainingsTitle}
        </Heading>
      </Box>

      <Flex
        mt="24px"
        alignItems="center"
        m="0 auto"
        w={{
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1200px",
          "2xl": "1200px",
        }}
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Box
          borderRadius="3px"
          mr={{
            sm: "0",
            md: "0",
            lg: "0",
            xl: "50px",
            "2xl": "50px",
          }}
        >
          <PeaceImage
            src={training.trainingsImage}
            alt="trainingsImage"
            objectFit="contain"
            maxWidth="none"
            w={{
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "477px",
              "2xl": "477px",
            }}
            h="410px"
          />
        </Box>

        <Flex alignItems="center">
          <Heading
            fontFamily="Manrope"
            fontWeight="700"
            fontSize={{
              sm: "20px",
              md: "20px",
              lg: "20px",
            }}
            my="20px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          >
            {training.trainingDurationTime}
          </Heading>

          <Box
            bg="#021D37"
            w="2px"
            h="20px"
            m="auto 8px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          ></Box>

          <Heading
            fontFamily="Manrope"
            fontWeight="700"
            fontSize={{
              sm: "20px",
              md: "20px",
              lg: "20px",
            }}
            my="20px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          >
            {training.trainingDurationYear}
          </Heading>
        </Flex>

        <Box>
          <Text
            fontFamily="Manrope"
            fontWeight="400"
            fontSize={{
              sm: "18px",
              md: "20px",
              lg: "20px",
              xl: "24px",
              "2xl": "24px",
            }}
            lineHeight="33px"
          >
            {training.trainingsText}
          </Text>

          {/* <Link
            onClick={onOpen}
            fontFamily="Manrope"
            fontWeight="700"
            fontSize={{
              sm: "20px",
              md: "24px",
              lg: "24px",
              xl: "24px",
              "2xl": "24px",
            }}
            textDecoration="underline"
            _hover={{
              textDecoration: "none",
            }}
          >
            {training.reapprovalCert}
          </Link> */}

          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="#DCE5E5" p="30px" maxW="none" w="1110px">
              <ModalCloseButton
                bg="#021D37"
                color="#FFF"
                _hover={{
                  bg: "#020E1B",
                }}
              />

              <ModalBody m="0 auto">
                <Image src={trainingCert} alt="training-cert" />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Flex
            alignItems="center"
            mt="19px"
            onClick={() =>
              new JsFileDownloader({ url: training.fileUrl as string })
            }
            display={{
              sm: "none",
              md: "none",
              lg: "none",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <FaFileDownload size="30px" color="#021D37" />
            <Link
              lineHeight="33px"
              fontFamily="Manrope"
              fontWeight="800"
              fontSize="24px"
              ml="10px"
              color="#201D37"
            >
              {training.downloadBrochure}
            </Link>
          </Flex>

          <NextLink href="/admission/applyOnline">
            <Button
              display="block"
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
              mt="40px"
              _hover={{
                bg: "#020E1B",
                transition: "all ease 0.4s",
              }}
            >
              {training.button}
            </Button>
          </NextLink>

          <Flex
            alignItems="center"
            mt="19px"
            onClick={() =>
              new JsFileDownloader({ url: training.fileUrl as string })
            }
            display={{
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "none",
              "2xl": "none",
            }}
          >
            <PeaceImage
              src={fileDownload}
              alt="download"
              w="20px"
              h="25px"
              mr="13px"
            />

            <Link
              lineHeight="33px"
              fontFamily="Manrope"
              fontWeight="700"
              fontSize={{
                sm: "18px",
                md: "18px",
                lg: "20px",
                xl: "24px",
                "2xl": "24px",
              }}
              color="#201D37"
            >
              {training.downloadBrochure}
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Courses;

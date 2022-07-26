import React, { Fragment } from "react";
import { FaFileDownload } from "react-icons/fa";
import cth from "assets/Images/cth.png";
import training1 from "assets/Images/training1.png";
import training2 from "assets/Images/training2.png";
import training3 from "assets/Images/training3.png";
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
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

const Training = () => {
  const trainings = [
    {
      background: "#EBEDEF",
      trainingsTitle: "Confederation of Tourism and Hospitality",
      trainingsImage: cth,
      trainingsText:
        "Wavecrest College is an approved International Centre for the delivery and assessment of the Professional Management Qualifications of the Institute of Hospitality, UK. ",
      reapprovalCert: "See Wavecrest College Reapproval Certificate 2020",
      downloadBrochure: "Download CTH Brochure",
      button: "APPLY NOW",
    },
    {
      background: "#FFF",
      trainingsTitle: "Hospitality Training Programs",
      trainingsImage: training1,
      trainingsText:
        "Hospitality Training Programmes (HTP) is the training and consulting division geared towards industry managers, supervisors and operatives. This was formed to provide specialist human resource training, knowledge and advice to assist industry partners. The training is geared towards members of staff involved with providing service. In the training emphasis is placed on details that matter, customer care and improving standards to exceed expectations.",
      downloadBrochure: "Download HTP Brochure",
      button: "REGISTER",
    },
    {
      background: "#EBEDEF",
      trainingsTitle: "Culinary Courses",
      trainingsImage: training2,
      trainingsText:
        "Are you new to the world of Professional cookery or are you on a quest to develop you existing skills? Our culinary programs are designed to provide a step by step introduction to the fundamentals of cookery in the following areas – National and International dishes, yeast products, cakes & icing, pastries, finger foods, mixed drinks and lots more. Through a combined delivery process of demonstrations and hands-on sessions, you will be exposed to a world of eclectic fusions designed to delight your family and friends. ",
      downloadBrochure: "Download Culinary Course Brochure",
      button: "APPLY NOW",
    },
    {
      background: "#FFF",
      trainingsTitle: "National Skill Acquisition",
      trainingsImage: training3,
      trainingsText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      downloadBrochure: "Download NSQ Brochure",
      button: "REGISTER",
    },
  ];

  function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Fragment>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInRight"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Hello</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Fragment>
    );
  }

  return (
    <Flex flexDirection="column" mb="70px">
      {trainings.map((training, index) => {
        return (
          <Box key={index} bg={training.background} p="50px 91px">
            <Heading
              fontFamily="Playfair Display"
              fontWeight="700"
              fontSize="32px"
              color="#021D37"
              m="0 auto"
              mb="36px"
              w="1247px"
            >
              {training.trainingsTitle}
            </Heading>

            <Flex mt="24px" alignItems="center" m="0 auto" w="1200px">
              <Box bg="#FFF" borderRadius="3px" mr="50px">
                <Image
                  src={training.trainingsImage}
                  maxWidth="none"
                  align="center"
                />
              </Box>

              <Box>
                <Text
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="24px"
                  lineHeight="33px"
                >
                  {training.trainingsText}
                </Text>

                <Link
                  onClick={TransitionExample()}
                  fontFamily="Manrope"
                  fontWeight="700"
                  fontSize="24px"
                  textDecoration="underline"
                  _hover={{ textDecoration: "none" }}
                >
                  {training.reapprovalCert}
                </Link>

                <Flex alignItems="center" mt="19px">
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

                <Button
                  bg="#021D37"
                  color="#FFF"
                  borderRadius="3px"
                  mt="30px"
                  w="208px"
                  h="52px"
                  _hover={{
                    bg: "#20E1B",
                  }}
                >
                  {training.button}
                </Button>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Training;

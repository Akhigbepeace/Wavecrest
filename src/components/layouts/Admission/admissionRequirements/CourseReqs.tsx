import {
  ListItem,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import PeaceImage from "components/atoms/PeaceImage";
import React from "react";
import { RequirementsProps } from "../constants";
import ShowModal from "./ShowModal";

const fileDownload = "/assets/imgs/paperDownload.png";

const CourseReqs = (props: RequirementsProps) => {
  const textToShow = props.courseRequirements.map((values, i) => {
    return (
      <UnorderedList key={i}>
        <ListItem
          mb={{
            sm: "10px",
            md: "15px",
            lg: "15px",
            xl: "20px",
            "2xl": "20px",
          }}
          fontFamily="Manrope"
          fontWeight="400"
          fontSize={{
            sm: "18px",
            md: "22px",
            lg: "22px",
            xl: "24px",
            "2xl": "24px",
          }}
          lineHeight="33px"
          listStyleType="disc"
        >
          {values}
        </ListItem>
      </UnorderedList>
    );
  });

  return (
    <Box
      bg={props.background}
      p={{
        sm: "20px",
        md: "20px 40px",
        lg: "30px 91px",
        xl: "50px 91px",
        "2xl": "50px 91px",
      }}
    >
      <Box>
        <Box
          w="88px"
          h="3px"
          bg="#021D37"
          mb="10px"
          mt="30px"
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
            sm: "24px",
            md: "block",
            lg: "block",
            xl: "32px",
            "2xl": "32px",
          }}
        >
          {props.course}
        </Heading>
      </Box>

      <Flex
        mt="24px"
        alignItems="center"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <PeaceImage
          src={props.coursePic}
          alt="course-img"
          w="580px"
          h="323px"
          borderRadius="3px"
          mr="45px"
          mb="20px"
        />

        <Box>
          <Box>{textToShow}</Box>

          <ShowModal viewUpdate={props.viewUpdate} />

          <Link
            href={props.linkTo}
            target="_blank"
            display="block"
            w="142px"
            height="46.89px"
            bg="#021D37"
            border="none"
            color="#fff"
            fontWeight="700"
            fontSize="16px"
            lineHeight="22px"
            pt="12px"
            textAlign="center"
            borderRadius="3px"
            mt="8px"
            _hover={{
              bg: "#020E1B",
              transition: "all ease 0.4s",
            }}
          >
            APPLY NOW
          </Link>

          <Link
            display={{
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "none",
              "2xl": "none",
            }}
            textAlign="center"
            alignItems="center"
            fontFamily="Manrope"
            fontSize="14px"
            fontWeight="800"
            color="#021D37"
            my="14px"
          >
            <Image src={fileDownload} alt="download" w="20px" mr="13px" />
            <Text
              fontFamily="Manrope"
              fontWeight="700"
              fontSize={{
                sm: "17px",
                md: "18px",
                lg: "20px",
                xl: "24px",
                "2xl": "24px",
              }}
              color="#201D37"
            >
              Download Programme Brochure
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default CourseReqs;

import React from "react";
import NextLink from "next/link";
import { Box, Text, Heading, Link } from "@chakra-ui/react";
import ShowcaseSlider from "./ShowcaseSlider";
import { ShowcaseProps } from "./types";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const ShowcaseMobile = (props: ShowcaseProps) => {
  const { videoURL, gallery0, gallery1, gallery2, gallery3 } = props;

  const gallery = [gallery0, gallery1, gallery2, gallery3];
  return (
    <Box
      display={{
        sm: "block",
        md: "block",
        lg: "block",
        xl: "none",
        "2xl": "none",
      }}
    >
      <Box>
        <Box>
          <ShowcaseSlider cards={gallery} />
        </Box>

        <Box
          px={{
            sm: "15px",
            md: "15px",
            lg: "15px",
          }}
        >
          <Box bg="#021D37" h="3px" w="88px" mt="20px"></Box>
          <Heading
            fontSize="60px"
            fontFamily="Visual Hollow Script"
            fontWeight="400"
            mt="10px"
            mb="-15px"
          >
            Study In
          </Heading>
          <Heading
            fontSize={{
              sm: "25px",
              md: "30px",
            }}
            fontFamily="Playfair Display"
            fontWeight="700"
            lineHeight="32px"
            w={{
              sm: "295px",
              md: "350px",
              lg: "400px",
            }}
          >
            Nigeria&lsquo;s Premier Hospitality Monotechnic
          </Heading>

          <Text
            fontSize="14px"
            fontFamily="Manrope"
            fontWeight="400"
            lineHeight="19px"
            my="15px"
          >
            In the last 40 years we have consistently trained individuals and
            produced graduates who are in very high demand in the Industry. 100%
            of our graduates are decently employed within 3 months after
            graduation. About 40% become entrepreneurs while working and even
            employers of labour soon after graduation. Presently, Hospitality
            Education is a guarantee of employment in Nigeria.
          </Text>

          <ReactPlayer
            url={videoURL}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />

          <NextLink href="/about/profile" legacyBehavior passHref>
            <Link
              display="inline-grid"
              placeItems="center"
              w="142px"
              height="46.89px"
              bg="transparent"
              border="2px solid #021D37"
              color="#021D37"
              fontWeight="700"
              fontSize="16px"
              lineHeight="22px"
              textAlign="center"
              textTransform="uppercase"
              borderRadius="6px"
              mt="14px"
              mb="55px"
              textDecoration="none"
              verticalAlign="middle"
              _hover={{
                textDecoration: "none",
              }}
              _active={{
                textDecoration: "none",
              }}
            >
              Learn More
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowcaseMobile;

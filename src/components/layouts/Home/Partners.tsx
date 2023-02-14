import React from "react";
import {
  Box,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import MobilePartner from "components/molecules/MobilePartner";
import PeaceImage from "components/atoms/PeaceImage";

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 0,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: "linear",
};
export default function Partners() {
  const [slider, setSlider] = React.useState<Slider>();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    "/assets/imgs/IshkTolaram.png",
    "/assets/imgs/elisLogo.png",
    "/assets/imgs/lexonCapital.png",
    "/assets/imgs/women's board.jpg",
    "/assets/imgs/venFoundation.jpeg",
    "/assets/imgs/nestleProfessionals.png",
    "/assets/imgs/woner_foundation.png",
  ];

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Link
        position="absolute"
        left={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      ></Link>

      <Link
        position="absolute"
        right={side}
        top={top}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      ></Link>

      <Box
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "flex",
          "2xl": "flex",
        }}
        px={{
          sm: "20px",
          md: "20px",
          lg: "20px",
        }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading
          fontFamily="Visual Hollow Script"
          fontWeight="400"
          fontSize="150px"
          color="rgba(3, 29, 56, 0.06)"
          display={{
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
            "2xl": "block",
          }}
        >
          Work with us
        </Heading>
        <Box
          bg="#021D37"
          h="3px"
          w="88px"
          mt="55px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        ></Box>

        <Text
          position="absolute"
          color="#021D37"
          fontFamily="Playfair Display"
          fontSize={{
            sm: "30px",
            md: "30px",
            lg: "30px",
            xl: "40px",
            "2xl": "40px",
          }}
          fontWeight="700"
          mb="25px"
        >
          Partners and Sponsors
        </Text>
      </Box>
      <Box
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
          "2xl": "flex",
        }}
        flexDirection="column"
        mb="50px"
      >
        <Slider
          {...settings}
          ref={(slider) => setSlider(slider as Slider)}
          pauseOnFocus
        >
          {cards.map((image, index) => (
            <PeaceImage
              key={index}
              src={image}
              alt="companyLogo"
              display="flex"
              minH="0px"
              h="120px"
              objectFit="contain"
            />
          ))}
        </Slider>
      </Box>

      <MobilePartner />
    </Box>
  );
}

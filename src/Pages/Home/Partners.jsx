import React from "react";
import {
  Box,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import womenBoard from "assets/Images/women's board.jpg";
import elisLogo from "assets/Images/elisLogo.png";
import lexonCapital from "assets/Images/lexonCapital.png";
import IshkTolaram from "assets/Images/IshkTolaram.png";
import venFoundation from "assets/Images/venFoundation.jpeg";
import nestleProfessionals from "assets/Images/nestleProfessionals.png";

const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 0,
  slidesToShow: 5,
  slidesToScroll: 1,
  cssEase: "linear",
};
export default function Carousel() {
  const [slider, setSlider] = React.useState();

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    IshkTolaram,
    elisLogo,
    lexonCapital,
    womenBoard,
    IshkTolaram,
    venFoundation,
    nestleProfessionals,
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
          xl: "block",
          "2xl": "block",
        }}
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)} pauseOnFocus>
          {cards.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="companyLogo"
              h="75px"
              mb="50px"
              objectFit="contain"
            />
          ))}
        </Slider>
      </Box>

      <Grid
        display={{
          sm: "grid",
          md: "grid",
          lg: "grid",
          xl: "none",
          "2xl": "none",
        }}
        gridTemplateColumns={{
          sm: "auto auto auto",
          md: "auto auto auto",
          lg: "1fr 1fr 1fr",
        }}
        px={{
          sm: "20px",
          md: "40px",
          lg: "40px",
          xl: "none",
          "2xl": "none",
        }}
        mt={{
          sm: "80px",
          md: "80px",
          lg: "80px",
        }}
        alignItems="center"
      >
        {cards.map((image, index) => (
          <Image
            key={index}
            src={image.logo}
            alt="companyLogo"
            alignItems="center"
            objectFit="contain"
            mb={{
              sm: "40px",
              md: "40px",
              lg: "40px",
              xl: "50px",
              "2xl": "50px",
            }}
            mx="auto"
          />
        ))}
      </Grid>
    </Box>
  );
}
